// ==UserScript==
// @name         Rename with N Key in Google Drive
// @namespace    https://github.com/neo-y-u/Userscript
// @version      1.0.1
// @description  GoogleドライブでNキーを押すとアイテム名の変更が行えるようにするスクリプト
// @author       neo-y-u
// @match        https://drive.google.com/*
// @grant        none
// @updateURL    https://github.com/neo-y-u/Userscript/raw/refs/heads/main/GoogleDrive_Rename_WithSingleKey.user.js
// @downloadURL  https://github.com/neo-y-u/Userscript/raw/refs/heads/main/GoogleDrive_Rename_WithSingleKey.user.js
// ==/UserScript==

(function() {
    'use strict';

    // ドキュメント全体でキー入力を監視
    document.addEventListener('keydown', function(event) {
        // 「N」キーが押された場合をチェック（shiftキーなど修飾キーは無視）
        if (event.key === 'n' && !event.ctrlKey && !event.altKey && !event.shiftKey) {
            // 「F2」キーのイベントを模倣して送信
            const f2Event = new KeyboardEvent('keydown', {
                key: 'F2',
                code: 'F2',
                keyCode: 113, // F2のkeyCode
                which: 113,
                bubbles: true
            });
            document.activeElement.dispatchEvent(f2Event);

            // 元の「N」キーの動作を無効化
            event.preventDefault();
        }
    });
})();
