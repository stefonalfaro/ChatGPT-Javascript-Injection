function clickTargetButton(tabId) {
    console.log('Injecting script into tab:', tabId);
    browser.scripting.executeScript({
        target: { tabId: tabId },
        files: ["inject.js"]
    });
}

function injectText(tabId) {
    console.log('Sending text injection message to tab:', tabId);
    browser.tabs.sendMessage(tabId, { action: "textInjection" });
}

browser.runtime.onMessage.addListener((message) => {
    console.log('Message received:', message);
    if (message.action === 'clickButton') {
        sendMessageToTab(message.tabId, 'textInjection');
    } else if (message.action === 'textInjection') {
        injectText(message.tabId);
    }
});

function sendMessageToTab(tabId, action) {
    browser.tabs.sendMessage(tabId, { action: action });
}

function fetchDataFromAPI() {
    fetch('https://yourapi.com/dataEndpoint')
    .then(response => response.json())
    .then(data => {
        console.log(data);    
        const textToInject = data.text; // Assuming the data contains a property 'text' with the content you want
        browser.tabs.executeScript({
            code: `document.getElementById('prompt-textarea').value = "${textToInject}";`
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}