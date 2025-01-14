// ==UserScript==
// @name         Google Drive Layout Toggle
// @namespace    https://github.com/neo-y-u/Userscript
// @updateURL    https://github.com/neo-y-u/Userscript/Google Drive Layout Toggle.user.js
// @version      1.3
// @description  Toggle Google Drive's list/grid layout using the "V" key.
// @author       neo-y-u
// @match        https://drive.google.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Listen for the "-" key press
    document.addEventListener('keydown', function (event) {
        // Check if the pressed key is "-" and no modifier keys are active
        if (event.key === 'v' && !event.ctrlKey && !event.altKey && !event.metaKey) {
            // Prevent default behavior
            event.preventDefault();

            // Find the currently active button (list or grid)
            const listButton = document.querySelector('button[data-test-id="list-layout-button"]');
            const gridButton = document.querySelector('button[data-test-id="grid-layout-button"]');

            if (listButton && gridButton) {
                // Check which button is currently active
                if (listButton.getAttribute('aria-checked') === 'true') {
                    // Switch to grid layout
                    gridButton.click();
                } else {
                    // Switch to list layout
                    listButton.click();
                }
            } else {
                console.error('List/Grid layout buttons not found.');
            }
        }
    });
})();
