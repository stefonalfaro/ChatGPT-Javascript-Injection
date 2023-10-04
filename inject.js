setTimeout(() => {
    console.log('Inject.js running.');
    const button = document.querySelector('button.btn[aria-label="Attach files"]');
    if (button) {
        console.log('Button found. Clicking...');
        button.click();
    } else {
        console.log('Button not found.');
    }
 }, 3000);  // waits 3 seconds before running the script
 