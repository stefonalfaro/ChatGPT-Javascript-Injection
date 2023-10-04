console.log('textInject.js is running.');
const textarea = document.getElementById('prompt-textarea');
if (textarea) {
    textarea.value = '';
    textarea.value = 'Your desired text here';
    console.log('Text injected.');
} else {
    console.log('Textarea not found.');
}
