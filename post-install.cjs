const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Running manual post-install tasks...');
console.log('Detected platform:', process.platform);

// Function to safely execute commands
function safeExec(command) {
  try {
    console.log(`Executing: ${command}`);
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(`Command failed: ${command}`, error.message);
    return false;
  }
}

// Determine if we're on Linux
const isLinux = process.platform === 'linux';

if (isLinux) {
  console.log('Linux platform detected - installing only glibc-compatible packages');
  
  // Install GNU bindings directly (avoid checking/detecting, just install what we need)
  try {
    // Install specific SWC GNU bindings needed for Linux
    safeExec('npm install @swc/core-linux-x64-gnu@1.3.96 --no-save');
    
    // Install rollup GNU bindings for Linux
    safeExec('npm install @rollup/rollup-linux-x64-gnu@4.6.1 --no-save');

  } catch (error) {
    console.warn('Error installing Linux packages:', error.message);
    console.log('Continuing with deployment...');
  }
}

// Ensure Terser is installed for minification
try {
  console.log('Installing Terser for minification...');
  safeExec('npm install terser@5.26.0 --no-save');
} catch (error) {
  console.warn('Failed to install Terser:', error.message);
}

console.log('Post-install tasks completed successfully');
