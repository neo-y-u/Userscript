// ==UserScript==
// @name         GoogleDocs_PolicyBanner_Remover
// @namespace    https://github.com/neo-y-u/Userscript
// @version      1.3.1
// @description  「ポリシーに準拠するには～」バナーを完全に非表示にする(Google ドキュメント・スプレッドシート・スライド・ドライブ上のPDF/画像)
// @author       neo-y-u
// @icon         https://w7.pngwing.com/pngs/990/967/png-transparent-google-file-application-google-docs-document-google-sheets-google-drive-google-plus-angle-rectangle-logo.png
// @match        https://drive.google.com/*
// @match        https://docs.google.com/document/*
// @match        https://docs.google.com/presentation/*
// @match        https://docs.google.com/spreadsheets/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/neo-y-u/Userscript/main/GoogleDocs_PolicyBanner_Remover.user.js
// @downloadURL  https://raw.githubusercontent.com/neo-y-u/Userscript/main/GoogleDocs_PolicyBanner_Remover.user.js
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    // 新旧両方のセレクタをカバー
    const css = `
        /* 新しいマテリアルデザイン・ウィジェット用 */
        .javascriptMaterialdesignGm3WizBannerBanner,
        .javascriptMaterialdesignGm3WizBannerBannerContent,
        .appsDocsUiWizBannerInset,
        .appsDocsUiWizBannerPrimary,

        /* 以前のクラス名（PDF・古いドキュメント用） */
        .docs-odp-banner-flex-wrap,
        .docs-odp-banner-container,
        .docs-ml-banner,
        .ndfHFb-c4YZDc-SjW3R-ORHb,

        /* 動的なクラス名へのワイルドカード指定 */
        div[class*="SjW3R-xf-j"],
        div[class*="L7w45e-xf"] {
            display: none !important;
            height: 0 !important;
            min-height: 0 !important;
            block-size: 0 !important; /* 親要素が block-size を指定している場合への対策 */
            visibility: hidden !important;
            margin: 0 !important;
            padding: 0 !important;
        }
    `;

    const style = document.createElement('style');
    style.textContent = css;
    (document.head || document.documentElement).appendChild(style);

    // 要素が動的に追加された際、親要素のスタイル（block-size等）を強制リセットする処理
    const cleanup = () => {
        const banners = document.querySelectorAll('.javascriptMaterialdesignGm3WizBannerBanner');
        banners.forEach(banner => {
            banner.style.display = 'none';
            banner.style.blockSize = '0';
        });
    };

    const observer = new MutationObserver(cleanup);
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();
