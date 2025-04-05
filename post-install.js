const fs = require('fs');
const path = require('path');

// Detect the platform
const platform = process.platform;

try {
  // If on Linux, check if we're in a deployment environment
  if (platform === 'linux') {
    console.log('Detected Linux platform, checking for necessary packages...');
    
    // Create a simple check file to make sure things are accessible
    fs.writeFileSync(path.join(__dirname, 'platform-check.txt'), 
      `Platform check: ${platform}, Node version: ${process.version}`);
    
    // Check for @swc/core-linux packages
    const nodeModulesPath = path.join(__dirname, 'node_modules');
    const swcPath = path.join(nodeModulesPath, '@swc');
    
    if (fs.existsSync(swcPath)) {
      console.log('SWC packages directory exists, verifying Linux bindings...');
      
      const hasLinuxGnu = fs.existsSync(path.join(swcPath, 'core-linux-x64-gnu'));
      const hasLinuxMusl = fs.existsSync(path.join(swcPath, 'core-linux-x64-musl'));
      
      console.log(`Linux GNU bindings: ${hasLinuxGnu ? 'Found' : 'Missing'}`);
      console.log(`Linux MUSL bindings: ${hasLinuxMusl ? 'Found' : 'Missing'}`);
      
      if (!hasLinuxGnu && !hasLinuxMusl) {
        console.log('No Linux bindings found, deployment might fail on Linux-based servers');
      }
    }
  }
  
  console.log('Post-install check completed successfully');
} catch (error) {
  console.error('Error during post-install check:', error);
}
