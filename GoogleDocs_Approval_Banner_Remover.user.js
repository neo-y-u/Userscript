// ==UserScript==
// @name         GoogleDocs_Approval_Banner_Remover
// @namespace    https://github.com/neo-y-u/Userscript
// @version      1.1.1
// @description  承認バナーを完全に非表示にする
// @author       neo-y-u
// @icon         https://w7.pngwing.com/pngs/990/967/png-transparent-google-file-application-google-docs-document-google-sheets-google-drive-google-plus-angle-rectangle-logo.png
// @match        https://docs.google.com/document/*
// @match        https://docs.google.com/presentation/*
// @match        https://docs.google.com/spreadsheets/*
// @updateURL    https://raw.githubusercontent.com//neo-y-u/Userscript/blob/main/GoogleDocs_Approval_Banner_Remover.user.js
// @downloadURL  https://raw.githubusercontent.com//neo-y-u/Userscript/blob/main/GoogleDocs_Approval_Banner_Remover.user.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    function removeApprovalBanner() {
        // 承認バナーの削除
        let approvalBanner = document.querySelector('.docs-approvals-banner-container');
        if (approvalBanner) {
            approvalBanner.remove();
        }
    }

    // 初回実行
    removeApprovalBanner();

    // バナーが動的に追加された場合に対応
    new MutationObserver(removeApprovalBanner).observe(document.body, { childList: true, subtree: true });
})();
