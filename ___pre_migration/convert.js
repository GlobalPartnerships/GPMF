const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const TurndownService = require('turndown');

const dir = 'c:\\Development\\GPMF-prod-deploy\\___pre_migration';
const outputFile = path.join(dir, 'Textos_Legacy.md');

// Configure turndown
const turndownService = new TurndownService({ headingStyle: 'atx' });

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
let finalMarkdown = '# Recopilación de Textos Legacy (Mejorado)\n\n';

for (const file of files) {
    console.log(`Processing: ${file}`);
    const htmlContent = fs.readFileSync(path.join(dir, file), 'utf8');
    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;

    // Remove noise elements
    const selectorsToRemove = ['nav', 'header', 'footer', '.menu', '#menu', '.navbar', '#mobile-menu', '#mobile-menu-btn', '.footer', '.social', 'script', 'style'];
    for (const selector of selectorsToRemove) {
        document.querySelectorAll(selector).forEach(el => el.remove());
    }

    // Fallback to body if no main
    let mainContent = document.querySelector('main') || document.body;

    if (mainContent) {
        let md = turndownService.turndown(mainContent.innerHTML);
        finalMarkdown += `## === ARCHIVO: ${file} ===\n\n${md}\n\n---\n\n`;
    }
}

fs.writeFileSync(outputFile, finalMarkdown, 'utf8');
console.log(`Conversion completed: ${outputFile}`);
