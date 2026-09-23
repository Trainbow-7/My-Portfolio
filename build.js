const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const distDir = path.join(rootDir, 'dist');

console.log('Building portfolio for production...');

// Clean dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Copy index.html
fs.copyFileSync(path.join(rootDir, 'index.html'), path.join(distDir, 'index.html'));

// Helper to copy directory if it exists
function copyDir(name) {
  const src = path.join(rootDir, name);
  const dest = path.join(distDir, name);
  if (fs.existsSync(src)) {
    fs.cpSync(src, dest, { recursive: true });
    console.log(`Copied ${name}/`);
  }
}

copyDir('css');
copyDir('js');
copyDir('assets');

console.log('Build completed successfully: all static assets generated in dist/');
