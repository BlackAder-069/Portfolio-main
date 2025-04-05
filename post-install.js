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
      
      // Check for Linux GNU bindings
      const gnuBindingsPath = path.join(__dirname, 'node_modules', '@swc', 'core-linux-x64-gnu');
      const hasGnuBindings = directoryExists(gnuBindingsPath);
      console.log('Linux GNU bindings:', hasGnuBindings ? 'Found' : 'Missing');
      
      // Install GNU bindings if missing
      if (!hasGnuBindings) {
        console.log('Installing Linux GNU bindings...');
        safeExec('npm install @swc/core-linux-x64-gnu --no-save');
      }
      
      // Check for Rollup GNU bindings
      const rollupGnuPath = path.join(__dirname, 'node_modules', '@rollup', 'rollup-linux-x64-gnu');
      const hasRollupGnu = directoryExists(rollupGnuPath);
      console.log('Rollup Linux GNU bindings:', hasRollupGnu ? 'Found' : 'Missing');
      
      // Install Rollup GNU bindings if missing
      if (!hasRollupGnu) {
        console.log('Installing Rollup Linux GNU bindings...');
        safeExec('npm install @rollup/rollup-linux-x64-gnu --no-save');
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
