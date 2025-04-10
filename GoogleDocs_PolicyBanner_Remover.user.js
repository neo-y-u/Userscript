// ==UserScript==
// @name         GoogleDocs_PolicyBanner_Remover
// @namespace    https://github.com/neo-y-u/Userscript
// @version      1.2.1
// @description  「ポリシーに準拠するには～」バナーを完全に非表示にする(Google ドキュメント・スプレッドシート・スライド・ドライブ上のPDF/画像)
// @author       neo-y-u
// @icon         https://w7.pngwing.com/pngs/990/967/png-transparent-google-file-application-google-docs-document-google-sheets-google-drive-google-plus-angle-rectangle-logo.png
// @match        https://drive.google.com/*
// @match        https://docs.google.com/document/*
// @match        https://docs.google.com/presentation/*
// @match        https://docs.google.com/spreadsheets/*
// @grant        none
// @updateURL    https://github.com/neo-y-u/Userscript/blob/main/GoogleDocs_PolicyBanner_Remover.user.js
// @downloadURL  https://github.com/neo-y-u/Userscript/blob/main/GoogleDocs_PolicyBanner_Remover.user.js
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    const selectors = [
        // Google ドキュメント、スライド、スプレッドシートのバナー
        '.docs-odp-banner-flex-wrap',
        '.docs-odp-banner-container',

        // Drive 内ビューアと新しいタブ（PDF・画像）
        '.a-b-SjW3R-xf-j',      // 通常バナー（未入力）
        '.a-b-Nk-xf',           // 審査リクエストバナー
        '.a-b-L7w45e-xf',       // スパム警告バナー
        '.a-b-oKM7Re-L7w45e-xf', // スパム（別種）
        '.a-b-Un-R3oXPe-xf',    // その他の警告系バナー
        '.ndfHFb-c4YZDc-SjW3R-ORHb', // 新しいタブで開いたPDFのバナー
    ];

    function hideBanners() {
        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                el.style.display = 'none';
            });
        });
    }

    // 初回実行
    hideBanners();

    // 動的に追加されるバナーへの対応
    new MutationObserver(hideBanners).observe(document.body, {
        childList: true,
        subtree: true
    });
})();
