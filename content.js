const styles = `
    /* This code comes from Ivan Akulov (https://twitter.com/iamakulov/status/1620089614060109825) */
    [data-hotkey]:not(.selected)::after {
        content: attr(data-hotkey);
        background: hsla(210deg 29% 70% / 0.2);
        margin: 0 4px;
        padding: 2px 4px;
        display: inline-block;
        line-height: 1em;
        border-radius: 2px;
        font-family: monospace;
    }
`;

// Create a new style element and set its contents to your CSS styles
const styleElement = document.createElement('style');
styleElement.textContent = styles;

// Append the style element to the head of the document
document.head.appendChild(styleElement);