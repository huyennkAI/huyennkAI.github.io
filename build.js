const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, 'sections');

const sectionOrder = [
    'header',
    'research',
    'publications',
    'experience',
    'projects',
    'education',
    'awards',
    'blog',
    'footer',
];

const bodyContent = sectionOrder
    .map(name => fs.readFileSync(path.join(sectionsDir, `${name}.html`), 'utf-8').trim())
    .map(s => s.split('\n').map(line => (line ? '        ' + line : line)).join('\n'))
    .join('\n\n');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nguyen Khanh Huyen</title>
    <meta name="author" content="Nguyen Khanh Huyen">
    <meta name="description" content="Nguyen Khanh Huyen — AI researcher working on optimization dynamics, implicit-depth models, and safety-preserving LLM fine-tuning.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <main class="site">

${bodyContent}

    </main>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'index.html'), html);
console.log('Build complete! index.html generated.');
