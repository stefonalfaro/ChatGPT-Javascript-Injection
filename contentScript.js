browser.runtime.onMessage.addListener((message) => {
    if (message.action === "textInjection") {
        console.log('contentScript.js is running.');
        const textarea = document.getElementById('prompt-textarea');
        if (textarea) {
            textarea.value = 'Your desired text here';
            console.log('Text injected.');
        } else {
            console.log('Textarea not found.');
        }
    }
});
