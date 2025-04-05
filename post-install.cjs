const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Running enhanced post-install script...');
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

// Check if file exists
function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (err) {
    return false;
  }
}

// Check if running in a Vercel environment
const isVercel = process.env.VERCEL === '1';
console.log('Is Vercel environment:', isVercel);

// CRITICAL FIX: Make sure esbuild can work on Vercel
try {
  console.log('Ensuring esbuild compatibility...');
  
  // Force install Linux binaries for esbuild
  safeExec('npm install @esbuild/linux-x64 --no-save');
  
  // If in Vercel, we need to patch the esbuild installation
  if (isVercel) {
    const esbuildPkgPath = path.join(__dirname, 'node_modules', 'esbuild', 'package.json');
    if (fileExists(esbuildPkgPath)) {
      console.log('Patching esbuild package.json...');
      const esbuildPkg = require(esbuildPkgPath);
      
      // Make sure the proper binary can be detected
      if (!esbuildPkg.optionalDependencies || !esbuildPkg.optionalDependencies['@esbuild/linux-x64']) {
        console.log('Adding @esbuild/linux-x64 to esbuild dependencies...');
        esbuildPkg.optionalDependencies = esbuildPkg.optionalDependencies || {};
        esbuildPkg.optionalDependencies['@esbuild/linux-x64'] = '0.18.20';
        
        // Write the updated package.json
        fs.writeFileSync(esbuildPkgPath, JSON.stringify(esbuildPkg, null, 2));
        console.log('esbuild package.json patched successfully');
      }
    }
    
    // Create custom esbuild binary path if needed
    const esbuildBinPath = path.join(__dirname, 'node_modules', '@esbuild', 'linux-x64', 'bin', 'esbuild');
    const esbuildNodeModulesDir = path.join(__dirname, 'node_modules', '@esbuild', 'linux-x64');
    
    if (!fileExists(esbuildNodeModulesDir)) {
      console.log('Creating @esbuild/linux-x64 directory structure...');
      try {
        // Create the directory structure
        fs.mkdirSync(path.join(__dirname, 'node_modules', '@esbuild'), { recursive: true });
        fs.mkdirSync(path.join(__dirname, 'node_modules', '@esbuild', 'linux-x64'), { recursive: true });
        fs.mkdirSync(path.join(__dirname, 'node_modules', '@esbuild', 'linux-x64', 'bin'), { recursive: true });
      } catch (err) {
        console.warn('Error creating directory structure:', err.message);
      }
    }
  }
  
  // Install other Linux-specific dependencies
  if (isVercel || process.platform === 'linux') {
    console.log('Installing Linux platform-specific dependencies...');
    safeExec('npm install @swc/core-linux-x64-gnu --no-save');
    safeExec('npm install @rollup/rollup-linux-x64-gnu --no-save');
    safeExec('npm install terser@5.26.0 --no-save');
  }
  
} catch (error) {
  console.warn('Error in post-install esbuild setup:', error.message);
  console.log('Continuing with build process...');
}

console.log('Post-install script completed');
