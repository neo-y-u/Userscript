// ==UserScript==
// @name         Google Drive Layout Toggle
// @namespace    https://github.com/neo-y-u/Userscript
// @version      1.0.1
// @description  「V」キーを押すことで、Google Drive のリスト表示とグリッド表示を切り替える
// @author       neo-y-u
// @match        https://drive.google.com/*
// @grant        none
// @updateURL    https://github.com/neo-y-u/Userscript/raw/refs/heads/main/GoogleDrive_LayoutToggle.user.js
// @downloadURL  https://github.com/neo-y-u/Userscript/raw/refs/heads/main/GoogleDrive_LayoutToggle.user.js
// ==/UserScript==

(function () {
    'use strict';

    // "V" キーの押下を監視
    document.addEventListener('keydown', function (event) {
        // // 押されたキーが "V" であり、修飾キーが押されていない場合に処理を実行
        if (event.key === 'v' && !event.ctrlKey && !event.altKey && !event.metaKey) {
            // // デフォルトの動作を無効化
            event.preventDefault();

            // 現在アクティブなボタン（リストまたはグリッド）を取得
            const listButton = document.querySelector('button[data-test-id="list-layout-button"]');
            const gridButton = document.querySelector('button[data-test-id="grid-layout-button"]');

            if (listButton && gridButton) {
                // 現在アクティブなボタンを判定
                if (listButton.getAttribute('aria-checked') === 'true') {
                    // グリッド表示に切り替え
                    gridButton.click();
                } else {
                    // リスト表示に切り替え
                    listButton.click();
                }
            } else {
                console.error('List/Grid layout buttons not found.');
            }
        }
    });
})();
