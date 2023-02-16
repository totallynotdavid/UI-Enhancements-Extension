function injectCSS() {
    const styles = `
      [data-hotkey]:not(.selected)::after {
        content: attr(data-hotkey);
        background: hsla(210deg 29% 70% / 0.2);
        margin: 0 4px;
        padding: 2px 6px;
        display: inline-block;
        line-height: 1em;
        border-radius: 0.5rem;
        font-family: monospace;
        transition: background 0.2s ease-in-out;
      }
    `;
  
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
  
    document.head.appendChild(styleElement);
  }
  
  function removeCSS() {
    const styleElement = document.head.querySelector('style');
    if (styleElement) {
      styleElement.remove();
    }
  }
  
  chrome.storage.local.get('disableCssInjection', ({ disableCssInjection }) => {
    if (!disableCssInjection) {
      injectCSS();
    }
  });
  
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'local' && 'disableCssInjection' in changes) {
      const { disableCssInjection } = changes.disableCssInjection.newValue;
      if (disableCssInjection) {
        removeCSS();
      } else {
        injectCSS();
      }
    }
  });