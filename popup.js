document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('disable-css-injection');
  
    // Read the current value of the disableCssInjection flag from storage and update the checkbox state
    chrome.storage.local.get('disableCssInjection', ({ disableCssInjection }) => {
      checkbox.checked = disableCssInjection;
    });
  
    checkbox.addEventListener('change', () => {
      const disableCssInjection = checkbox.checked;
      chrome.storage.local.set({ disableCssInjection });
    });
  });