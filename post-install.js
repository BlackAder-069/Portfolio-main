// Use top-level await to handle ESM imports
try {
  console.log('Detected platform:', process.platform);
  
  const platform = process.platform;
  const { execSync } = await import('child_process');
  const { default: fs } = await import('fs');
  const { default: path } = await import('path');
  const { fileURLToPath } = await import('url');
  
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  
  // Check if a directory exists
  function directoryExists(dirPath) {
    try {
      return fs.existsSync(dirPath);
    } catch (error) {
      console.warn(`Error checking if directory exists (${dirPath}):`, error.message);
      return false;
    }
  }
  
  // Safely execute commands with fallback
  function safeExec(command, fallbackCommand = null) {
    try {
      execSync(command, { stdio: 'inherit' });
      return true;
    } catch (error) {
      console.warn(`Command failed: ${command}`);
      if (fallbackCommand) {
        try {
          console.log(`Trying fallback command: ${fallbackCommand}`);
          execSync(fallbackCommand, { stdio: 'inherit' });
          return true;
        } catch (fbError) {
          console.warn(`Fallback command failed:`, fbError.message);
        }
      }
      return false;
    }
  }
  
  // Install platform-specific dependencies if needed
  if (platform === 'linux') {
    console.log('Linux platform detected, checking for necessary packages...');
    
    // Check for @swc/core installation
    const swcPath = path.join(__dirname, 'node_modules', '@swc');
    if (directoryExists(swcPath)) {
      console.log('SWC packages directory exists, verifying Linux bindings...');
      
      try {
        // Check libc type (glibc vs musl)
        const isMusl = (() => {
          try {
            // Check for Alpine Linux which uses musl
            const output = execSync('cat /etc/os-release').toString();
            return output.toLowerCase().includes('alpine');
          } catch (error) {
            // If we can't determine, assume glibc as it's more common
            return false;
          }
        })();

        console.log(`Detected libc: ${isMusl ? 'musl' : 'glibc'}`);
        
        // Only install the appropriate binding for the current libc
        if (isMusl) {
          // For musl systems (Alpine Linux)
          const muslBindingsPath = path.join(__dirname, 'node_modules', '@swc', 'core-linux-x64-musl');
          const hasMuslBindings = directoryExists(muslBindingsPath);
          console.log('Linux MUSL bindings:', hasMuslBindings ? 'Found' : 'Missing');
          
          if (!hasMuslBindings) {
            console.log('Installing Linux MUSL bindings...');
            safeExec('npm install @swc/core-linux-x64-musl --no-save');
          }
        } else {
          // For glibc systems (most Linux distributions)
          const gnuBindingsPath = path.join(__dirname, 'node_modules', '@swc', 'core-linux-x64-gnu');
          const hasGnuBindings = directoryExists(gnuBindingsPath);
          console.log('Linux GNU bindings:', hasGnuBindings ? 'Found' : 'Missing');
          
          if (!hasGnuBindings) {
            console.log('Installing Linux GNU bindings...');
            safeExec('npm install @swc/core-linux-x64-gnu --no-save');
          }
        }
      } catch (error) {
        console.warn('Error checking Linux bindings:', error.message);
        console.log('Continuing with deployment...');
      }
    } else {
      console.log('SWC packages directory not found, skipping binding checks.');
    }
  }
  
  // Ensure Terser is installed for minification
  const terserPath = path.join(__dirname, 'node_modules', 'terser');
  if (!directoryExists(terserPath)) {
    console.log('Installing Terser for minification...');
    safeExec('npm install terser --save-dev');
  }
  
  console.log('Post-install check completed successfully');
} catch (error) {
  // Keep the process running even with errors - allows deployment to continue
  console.warn('Post-install script encountered an error:', error.message);
  console.log('Continuing with deployment process...');
  process.exit(0); // Exit with success code to not break the build
}
