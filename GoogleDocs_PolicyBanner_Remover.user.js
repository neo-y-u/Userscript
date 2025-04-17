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
// @updateURL    https://raw.githubusercontent.com/neo-y-u/Userscript/main/GoogleDocs_PolicyBanner_Remover.user.js
// @downloadURL  https://raw.githubusercontent.com/neo-y-u/Userscript/main/GoogleDocs_PolicyBanner_Remover.user.js
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    const css = `
        .docs-odp-banner-flex-wrap,
        .docs-odp-banner-container,
        .a-b-SjW3R-xf-j,
        .a-b-Nk-xf,
        .a-b-L7w45e-xf,
        .a-b-oKM7Re-L7w45e-xf,
        .a-b-Un-R3oXPe-xf,
        .ndfHFb-c4YZDc-SjW3R-ORHb {
            display: none !important;
        }
    `;

    const style = document.createElement('style');
    style.textContent = css;
    document.documentElement.appendChild(style);
})();
