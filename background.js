chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.id === 'get-disable-css-injection') {
      chrome.storage.local.get('disableCssInjection', ({ disableCssInjection }) => {
        sendResponse({ disableCssInjection });
      });
      return true;
    } else if (message.id === 'disable-css-injection') {
      chrome.storage.local.set({ disableCssInjection: message.disableCssInjection });
      return true;
    }
  });