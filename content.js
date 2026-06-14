/**
 * Replaces 'microsoft' with 'microslop' in the given node and its children.
 */
function replaceMicrosoft(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent;
        const replacedText = text.replace(/microsoft/gi, (match) => {
            // Preserve capitalization if possible
            if (match === 'Microsoft') return 'Microslop';
            if (match === 'MICROSOFT') return 'MICROSLOP';
            return 'microslop';
        });

        if (replacedText !== text) {
            node.textContent = replacedText;
        }
    } else if (node.nodeType === Node.ELEMENT_NODE &&
               node.tagName !== 'SCRIPT' &&
               node.tagName !== 'STYLE' &&
               node.tagName !== 'TEXTAREA') {
        // Don't mess with scripts, styles, or user input areas
        for (const child of node.childNodes) {
            replaceMicrosoft(child);
        }
    }
}

// Initial replacement
replaceMicrosoft(document.body);

// Watch for changes in the DOM to handle dynamic content (AJAX, React, etc.)
const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        for (const addedNode of mutation.addedNodes) {
            replaceMicrosoft(addedNode);
        }
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
