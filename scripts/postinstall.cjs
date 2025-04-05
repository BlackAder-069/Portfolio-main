#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Running postinstall script...');

try {
  // Install platform-specific dependencies
  if (process.env.VERCEL === '1' || process.platform === 'linux') {
    console.log('Installing Linux-specific dependencies...');
    execSync('npm install @esbuild/linux-x64@latest --no-save', { stdio: 'inherit' });
    execSync('npm install @swc/core-linux-x64-gnu@latest --no-save', { stdio: 'inherit' });
    execSync('npm install @rollup/rollup-linux-x64-gnu@latest --no-save', { stdio: 'inherit' });
  }
  
  console.log('Postinstall completed successfully');
} catch (error) {
  console.warn('Postinstall warning:', error.message);
  console.log('Continuing with build process...');
  process.exit(0); // Exit successfully even with warnings
}