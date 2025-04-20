// ==UserScript==
// @name         GoogleDrive_Hide_Required-Fields-Missing
// @namespace    https://github.com/neo-y-u/Userscript
// @version      1.0.1
// @description  Googleドライブにアップロード時の「未入力の必須項目があります」を非表示にする
// @author       neo-y-u
// @icon         https://ssl.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png
// @match        https://drive.google.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/neo-y-u/Userscript/main/GoogleDrive_Hide_Required-Fields-Missing.user.js
// @downloadURL  https://raw.githubusercontent.com/neo-y-u/Userscript/main/GoogleDrive_Hide_Required-Fields-Missing.user.js
// ==/UserScript==

(function () {
    'use strict';

    const hideWarning = () => {
        const warnings = document.querySelectorAll('div.a-Vd-zUk4Qd-ztc6md-Jc');
        warnings.forEach(el => {
            if (el.textContent.includes('未入力の必須項目があります')) {
                el.style.display = 'none';
            }
        });
    };

    // 初回実行
    hideWarning();

    // MutationObserverで監視
    const observer = new MutationObserver(() => {
        hideWarning();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
})();
