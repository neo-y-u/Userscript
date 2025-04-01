// ==UserScript==
// @name         GoogleDocs_PolicyBanner_Remover
// @namespace    https://github.com/neo-y-u/Userscript
// @version      1.1.2
// @description  「ポリシーに準拠するには～」バナーを完全に非表示にする
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

(function() {
    'use strict';

    function removeBanner() {
        // バナー本体の削除
        let banner = document.querySelector('.docs-odp-banner-flex-wrap');
        if (banner) {
            banner.remove();
        }

        // 残ったバナーコンテナも削除
        let bannerContainer = document.querySelector('.docs-odp-banner-container');
        if (bannerContainer) {
            bannerContainer.remove();
        }
    }

    // 初回実行
    removeBanner();

    // バナーが動的に追加された場合に対応
    new MutationObserver(removeBanner).observe(document.body, { childList: true, subtree: true });
})();
