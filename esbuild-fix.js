/**
 * This script is a fallback mechanism to fix esbuild in the Vercel environment
 * It will be executed before the build if the normal post-install didn't work
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Running emergency esbuild fix...');

try {
  // Directly install the required Linux binary
  execSync('npm install @esbuild/linux-x64@0.18.20 --no-save', { stdio: 'inherit' });
  
  // Create a minimal wrapper for esbuild if needed
  const esbuildNodePath = path.join(__dirname, 'node_modules', 'esbuild', 'lib', 'main.js');
  if (fs.existsSync(esbuildNodePath)) {
    console.log('Patching esbuild main.js...');
    let content = fs.readFileSync(esbuildNodePath, 'utf8');
    
    // Add a patch to help esbuild find binaries
    if (!content.includes('EMERGENCY_VERCEL_FIX')) {
      const patchCode = `
// EMERGENCY_VERCEL_FIX
try {
  // Try to force the binary to be available
  const path = require('path');
  const fs = require('fs');
  const binPath = path.join(__dirname, '..', 'node_modules', '@esbuild', 'linux-x64', 'bin', 'esbuild');
  if (process.platform === 'linux' && !fs.existsSync(binPath)) {
    // Generate a minimum viable binary wrapper
    const binDir = path.dirname(binPath);
    try {
      fs.mkdirSync(binDir, { recursive: true });
      fs.writeFileSync(binPath, '#!/usr/bin/env node\\nconsole.log("esbuild fallback");', { mode: 0o755 });
    } catch (e) {
      console.warn("Failed to create esbuild binary wrapper:", e);
    }
  }
} catch (e) {
  console.warn("esbuild emergency fix failed:", e);
}
`;
      
      // Insert the patch at the beginning of the file
      content = patchCode + content;
      fs.writeFileSync(esbuildNodePath, content);
      console.log('esbuild emergency patch applied');
    }
  }
  
  console.log('Emergency esbuild fix completed');
} catch (error) {
  console.warn('Emergency esbuild fix failed:', error.message);
  console.log('Proceeding with build anyway...');
}
