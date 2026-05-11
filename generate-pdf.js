const puppeteer = require('puppeteer');
const fs = require('fs');

async function generatePDF() {
  console.log('Browser khulche...');
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
  });
  const page = await browser.newPage();

  // A4 width set koro
  await page.setViewport({ width: 1240, height: 1754, deviceScaleFactor: 1 });

  console.log('Portfolio load hocche...');
  await page.goto('http://localhost:3000', {
    waitUntil: 'networkidle0',
    timeout: 60000,
  });

  await new Promise(r => setTimeout(r, 3000));

  // Scroll kore sob animation trigger korbo
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 200;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 100);
    });
  });

  await new Promise(r => setTimeout(r, 2000));

  // Sob animation off, navbar static, print optimized
  await page.addStyleTag({
    content: [
      '* { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; animation: none !important; transition: none !important; }',
      'nav { position: static !important; }',
      'html { zoom: 1; }',
      'section { page-break-inside: avoid; }',
    ].join(' ')
  });

  await new Promise(r => setTimeout(r, 1000));

  console.log('A4 PDF generate hocche...');
  await page.pdf({
    path: 'D:/my-own-portfolio/Portfolio-v2.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' },
    scale: 0.8,
    displayHeaderFooter: false,
  });

  await browser.close();
  console.log('Done! PDF save hoyeche!');
}

generatePDF().catch(console.error);