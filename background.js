function clickTargetButton(tabId) {
    console.log('Injecting script into tab:', tabId);
    browser.scripting.executeScript({
        target: { tabId: tabId },
        files: ["inject.js"]
    });
}

browser.runtime.onMessage.addListener((message) => {
    console.log('Message received:', message);
    if (message.action === "clickButton") {
        clickTargetButton(message.tabId);
    }
});
