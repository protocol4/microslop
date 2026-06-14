# Microslop Extension

A Chrome and Firefox compatible browser extension with the sole purpose of changing 'microsoft' to 'microslop' on every website ever.

## Features

- **Global Replacement**: Replaces all occurrences of "microsoft" on any webpage you visit.
- **Case Sensitivity**: Smart replacement that preserves capitalization (e.g., "Microsoft" becomes "Microslop", "MICROSOFT" becomes "MICROSLOP").
- **Dynamic Content Support**: Uses `MutationObserver` to ensure text is replaced even on sites that load content dynamically (like social media or single-page apps).
- **Lightweight**: Zero dependencies and minimal performance impact.

## Installation

### Chrome / Edge / Brave
1. Clone this repository or download the files.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top right corner.
4. Click **Load unpacked** and select the directory containing the extension files.

### Firefox
1. Clone this repository or download the files.
2. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
3. Click **Load Temporary Add-on...**.
4. Select the `manifest.json` file from the extension directory.

## How it Works
The extension injects a small content script (`content.js`) into every page. This script traverses the DOM, finds text nodes containing the word "microsoft", and replaces them while ignoring script, style, and input elements to avoid breaking website functionality.
