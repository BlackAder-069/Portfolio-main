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
    
    // Check for GNU bindings
    const hasGnuBindings = isPackageInstalled('@swc/core-linux-x64-gnu');
    console.log('Linux GNU bindings:', hasGnuBindings ? 'Found' : 'Missing');
    
    // Check for MUSL bindings - only needed in Alpine Linux environments
    const hasMuslBindings = isPackageInstalled('@swc/core-linux-x64-musl');
    console.log('Linux MUSL bindings:', hasMuslBindings ? 'Found' : 'Missing');
    
    // If we don't have GNU bindings, try to install them
    if (!hasGnuBindings) {
      try {
        console.log('Installing Linux GNU bindings...');
        execSync('npm install @swc/core-linux-x64-gnu --no-save', { stdio: 'inherit' });
        console.log('Linux GNU bindings installed successfully.');
      } catch (error) {
        console.warn('Failed to install Linux GNU bindings:', error.message);
      }
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
