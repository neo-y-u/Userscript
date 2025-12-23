// ==UserScript==
// @name         GoogleDrive_LayoutToggle
// @namespace    https://github.com/neo-y-u/Userscript
// @version      1.2.1
// @description  「V」キーを押すことで、Google Drive のリスト表示とグリッド表示を切り替える
// @author       neo-y-u
// @icon         https://ssl.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png
// @match        https://drive.google.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/neo-y-u/Userscript/main/GoogleDrive_LayoutToggle.user.js
// @downloadURL  https://raw.githubusercontent.com/neo-y-u/Userscript/main/GoogleDrive_LayoutToggle.user.js
// ==/UserScript==

(function () {
    'use strict';

    // キーダウンイベントをキャプチャフェーズで監視
    window.addEventListener('keydown', function (event) {
        // 1. 修飾キーなしの "v" かをチェック（大文字小文字両対応）
        if (event.key.toLowerCase() !== 'v' || event.ctrlKey || event.altKey || event.metaKey) {
            return;
        }

        // 2. 入力中（input, textarea, contenteditable）は除外
        const activeElement = document.activeElement;
        const isTyping = activeElement && (
            activeElement.tagName === 'INPUT' ||
            activeElement.tagName === 'TEXTAREA' ||
            activeElement.isContentEditable
        );

        if (isTyping) return;

        // 3. ボタンの取得（data-test-id に加え、aria-label でも検索）
        // Google Drive の仕様変更に合わせ、複数の候補から探す
        const listButton = document.querySelector('button[data-test-id="list-layout-button"], button[aria-label*="リスト表示"]');
        const gridButton = document.querySelector('button[data-test-id="grid-layout-button"], button[aria-label*="グリッド表示"]');

        if (listButton && gridButton) {
            event.preventDefault();
            event.stopImmediatePropagation(); // 他のスクリプトによる上書きを防止

            // aria-pressed または aria-checked で現在の状態を確認
            const isListActive = listButton.getAttribute('aria-checked') === 'true' || listButton.getAttribute('aria-pressed') === 'true';

            if (isListActive) {
                gridButton.click();
            } else {
                listButton.click();
            }
        }
    }, true); // true を指定してキャプチャフェーズで実行
})();
