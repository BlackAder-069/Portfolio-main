const { execSync } = require('child_process');

console.log('Running post-install script...');

try {
  if (process.env.VERCEL === '1') {
    console.log('Installing Vercel-specific dependencies...');
    execSync('npm install @esbuild/linux-x64@0.18.20 --no-save', { stdio: 'inherit' });
    execSync('npm install @swc/core-linux-x64-gnu --no-save', { stdio: 'inherit' });
    execSync('npm install @rollup/rollup-linux-x64-gnu --no-save', { stdio: 'inherit' });
  }
} catch (error) {
  console.warn('Warning during dependency installation:', error.message);
  // Continue with the build process even if there are warnings
  process.exit(0);
}

console.log('Post-install completed');
