// ==UserScript==
// @name         GoogleDrive_LayoutToggle
// @namespace    https://github.com/neo-y-u/Userscript
// @version      1.1.2
// @description  「V」キーを押すことで、Google Drive のリスト表示とグリッド表示を切り替える
// @author       neo-y-u
// @icon         https://ssl.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png
// @match        https://drive.google.com/*
// @grant        none
// @updateURL    https://github.com/neo-y-u/Userscript/raw/refs/heads/main/GoogleDrive_LayoutToggle.user.js
// @downloadURL  https://github.com/neo-y-u/Userscript/raw/refs/heads/main/GoogleDrive_LayoutToggle.user.js
// ==/UserScript==

(function () {
    'use strict';

    document.addEventListener('keydown', function (event) {
        // フォーカスされている要素を取得
        const activeElement = document.activeElement;

        // フォーム入力中の場合は処理をスキップ
        if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.isContentEditable)) {
            return;
        }

        // "V" キーの押下を監視（修飾キーなし）
        if (event.key === 'v' && !event.ctrlKey && !event.altKey && !event.metaKey) {
            event.preventDefault(); // デフォルトの動作を無効化

            // 現在アクティブなボタンを取得
            const listButton = document.querySelector('button[data-test-id="list-layout-button"]');
            const gridButton = document.querySelector('button[data-test-id="grid-layout-button"]');

            if (listButton && gridButton) {
                // 現在の表示モードを判定して切り替え
                if (listButton.getAttribute('aria-checked') === 'true') {
                    gridButton.click();
                } else {
                    listButton.click();
                }
            } else {
                console.error('List/Grid layout buttons not found.');
            }
        }
    });
})();
