// ==UserScript==
// @name         Rename with N Key in Google Drive
// @namespace    https://github.com/neo-y-u/Userscript
// @version      1.1.1
// @description  GoogleドライブでNキーを押すとアイテム名の変更が行えるようにするスクリプト
// @author       neo-y-u
// @icon         https://ssl.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png
// @match        https://drive.google.com/*
// @grant        none
// @updateURL    https://github.com/neo-y-u/Userscript/raw/refs/heads/main/GoogleDrive_Rename_WithSingleKey.user.js
// @downloadURL  https://github.com/neo-y-u/Userscript/raw/refs/heads/main/GoogleDrive_Rename_WithSingleKey.user.js
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', function(event) {
        // 入力欄での「N」キー入力は無視
        const activeElement = document.activeElement;
        if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.isContentEditable)) {
            return;
        }

        // 「N」キーが押された場合をチェック（修飾キーなし）
        if (event.key === 'n' && !event.ctrlKey && !event.altKey && !event.shiftKey) {
            event.preventDefault(); // デフォルトの動作を無効化

            // 現在選択されているファイル・フォルダを取得
            const selectedItem = document.querySelector('[aria-selected="true"]');

            if (selectedItem) {
                // 選択項目にフォーカスを設定
                selectedItem.focus();

                // 「F2」キーのイベントを送信
                const f2Event = new KeyboardEvent('keydown', {
                    key: 'F2',
                    code: 'F2',
                    keyCode: 113,
                    which: 113,
                    bubbles: true
                });
                selectedItem.dispatchEvent(f2Event);
            } else {
                console.warn('No item is selected.');
            }
        }
    });
})();
