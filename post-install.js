import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

console.log('Detected platform:', process.platform);

// Function to check if a package is installed
function isPackageInstalled(packageName) {
  try {
    // Dynamic import for checking if a package exists
    new Function(`return import('${packageName}')`)();
    return true;
  } catch (e) {
    return false;
  }
}

// Determine if we're on Linux
const isLinux = process.platform === 'linux';

if (isLinux) {
  console.log('Linux platform detected, checking for necessary packages...');
  
  // Get directory path (ESM equivalent of __dirname)
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  
  // Check for SWC packages
  const swcPath = path.join(__dirname, 'node_modules', '@swc');
  if (fs.existsSync(swcPath)) {
    console.log('SWC packages directory exists, verifying Linux bindings...');
    
    try {
      // Use fs to check if packages exist instead of require.resolve
      const hasGnuBindings = fs.existsSync(path.join(__dirname, 'node_modules', '@swc', 'core-linux-x64-gnu'));
      console.log('Linux GNU bindings:', hasGnuBindings ? 'Found' : 'Missing');
      
      const hasMuslBindings = fs.existsSync(path.join(__dirname, 'node_modules', '@swc', 'core-linux-x64-musl'));
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
    } catch (error) {
      console.warn('Error checking SWC bindings:', error.message);
    }
  } else {
    console.log('SWC packages directory not found, skipping binding checks.');
  }
}

// Check for Terser using fs instead of require.resolve
try {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const terserExists = fs.existsSync(path.join(__dirname, 'node_modules', 'terser'));
  
  if (!terserExists) {
    console.log('Installing Terser for minification...');
    execSync('npm install terser --save-dev', { stdio: 'inherit' });
    console.log('Terser installed successfully.');
  }
} catch (error) {
  console.warn('Failed to check or install Terser:', error.message);
}

console.log('Post-install check completed successfully');
