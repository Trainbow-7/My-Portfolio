const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const htmlPath = path.resolve(__dirname, 'generate-executive-profile.html');
const pdfPath = path.resolve(__dirname, 'assets', 'Oyedeji_Temitayo_Samson_Executive_Profile.pdf');
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

console.log('Input HTML:', htmlPath);
console.log('Output PDF:', pdfPath);

const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');

const result = spawnSync(edgePath, [
  '--headless',
  '--disable-gpu',
  '--no-pdf-header-footer',
  `--print-to-pdf=${pdfPath}`,
  fileUrl
], { stdio: 'inherit' });

console.log('Exit status:', result.status);
if (fs.existsSync(pdfPath)) {
  const stat = fs.statSync(pdfPath);
  console.log('PDF file size:', stat.size, 'Modified:', stat.mtime);
}
