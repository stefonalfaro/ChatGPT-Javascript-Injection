document.getElementById('injectionTest').addEventListener('click', () => {
    browser.tabs.query({active: true, currentWindow: true}, (tabs) => {
      let currentTab = tabs[0];
      browser.runtime.sendMessage({ action: 'clickButton', tabId: currentTab.id });
      console.log('Message sent to background script.');
    });
  });  