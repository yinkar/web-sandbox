
const htmlCodeArea = document.querySelector('.html-code');
const cssCodeArea = document.querySelector('.css-code');
const jsCodeArea = document.querySelector('.js-code');

const preview = document.querySelector('.preview');

let pageCode = '';

function updatePreview() {

    pageCodeRaw = [
        unescape('%3C%21DOCTYPE%20html%3E%0A%3Chtml%3E%0A%3Chead%3E%0A%09%3Ctitle%3E%3C/title%3E%0A%0A%09%3Cstyle%3E%0A'),
        cssCodeArea.innerText,
        unescape('%0A%09%3C/style%3E%0A%3C/head%3E%0A%3Cbody%3E'),
        htmlCodeArea.innerText,
        unescape('%0A%09%3Cscript%3E'),
        jsCodeArea.innerText,
        unescape('%0A%09%3C/script%3E%0A%3C/body%3E%0A%3C/html%3E')
    ];

    pageCode = pageCodeRaw.join('');

    preview.srcdoc = pageCode;
};

[
    htmlCodeArea,
    cssCodeArea,
    jsCodeArea
].forEach(e => {
    e.addEventListener('input', () => {
        updatePreview();
    });
});
