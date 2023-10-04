document.getElementById('injectionTest').addEventListener('click', () => {
  sendMessageToBackground('clickButton');
});

document.getElementById('textInjectionTest').addEventListener('click', () => {
  sendMessageToBackground('textInjection');
});

function sendMessageToBackground(actionType) {
  console.log(`Sending message: ${actionType}`);
  browser.tabs.query({active: true, currentWindow: true}, (tabs) => {
      let currentTab = tabs[0];
      console.log(`Sending to tab ${currentTab.id}`);
      browser.runtime.sendMessage({ action: actionType, tabId: currentTab.id });
  });
}
