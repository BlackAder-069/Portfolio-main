const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Detected platform:', process.platform);

// Function to check if a package is installed
function isPackageInstalled(packageName) {
  try {
    require.resolve(packageName);
    return true;
  } catch (e) {
    return false;
  }
}

// Determine if we're on Linux
const isLinux = process.platform === 'linux';

if (isLinux) {
  console.log('Linux platform detected, checking for necessary packages...');

  // Check for SWC packages
  const swcPath = path.join('node_modules', '@swc');
  if (fs.existsSync(swcPath)) {
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
        // Check for MUSL bindings - only for Alpine Linux
        const hasMuslBindings = isPackageInstalled('@swc/core-linux-x64-musl');
        console.log('Linux MUSL bindings:', hasMuslBindings ? 'Found' : 'Missing');
        
        if (!hasMuslBindings) {
          console.log('Installing Linux MUSL bindings...');
          execSync('npm install @swc/core-linux-x64-musl --no-save', { stdio: 'inherit' });
        }
      } else {
        // Check for GNU bindings - for standard Linux (glibc)
        const hasGnuBindings = isPackageInstalled('@swc/core-linux-x64-gnu');
        console.log('Linux GNU bindings:', hasGnuBindings ? 'Found' : 'Missing');
        
        if (!hasGnuBindings) {
          console.log('Installing Linux GNU bindings...');
          execSync('npm install @swc/core-linux-x64-gnu --no-save', { stdio: 'inherit' });
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

// Check for Terser
if (!isPackageInstalled('terser')) {
  try {
    console.log('Installing Terser for minification...');
    execSync('npm install terser --save-dev', { stdio: 'inherit' });
    console.log('Terser installed successfully.');
  } catch (error) {
    console.warn('Failed to install Terser:', error.message);
  }
}

console.log('Post-install check completed successfully');
