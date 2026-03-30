const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, 'sections');

const sectionOrder = [
    'nav',
    'hero',
    'about',
    'research',
    'experience',
    'education',
    'awards',
    'projects',
    'blog',
    'contact',
    'footer',
];

// Read each section file
const sectionContents = sectionOrder.map(name => {
    const filePath = path.join(sectionsDir, `${name}.html`);
    const content = fs.readFileSync(filePath, 'utf-8');
    return content.trim();
});

// Join sections with dividers (except around nav, hero, and footer)
const sectionsWithDividers = [];
for (let i = 0; i < sectionContents.length; i++) {
    sectionsWithDividers.push(sectionContents[i]);
    // Add divider between sections (not after nav, not after last, not before footer)
    if (i > 0 && i < sectionContents.length - 2) {
        sectionsWithDividers.push('        <div class="section-divider"></div>');
    }
}

const bodyContent = sectionsWithDividers
    .map(s => s.split('\n').map(line => '        ' + line).join('\n'))
    .join('\n\n');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nguyen Khanh Huyen — AI Researcher & Economist</title>
    <meta name="description" content="Portfolio of Nguyen Khanh Huyen — AI Researcher, Economics Student, Math Enthusiast exploring the intersection of AI, economics, and mathematics.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <!-- STARFIELD BACKGROUND -->
    <canvas id="starfield"></canvas>
    <div class="nebula-layer"></div>

    <!-- CONTENT -->
    <div class="content-layer">

${bodyContent}

    </div>

    <script src="js/main.js"></script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'index.html'), html);
console.log('Build complete! index.html generated.');
