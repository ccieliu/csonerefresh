// ==UserScript==
// @name         CSone Queue Refresh
// @namespace    https://csone.my.salesforce.com/console
// @version      0.0.4
// @description  Auto Refresh
// @author       yuxuliu@cisco.com
// @match        https://csone.my.salesforce.com/500*
// @grant       GM_notification
// @grant       window.focus
// @run-at      document-idle
// @downloadURL https://raw.githubusercontent.com/ccieliu/csonerefresh/master/csoneplugin.user.js
// @updateURL   https://raw.githubusercontent.com/ccieliu/csonerefresh/master/csoneplugin.user.js
// ==/UserScript==
// Version History :
// 0.0.1    First release
// 0.0.2    Fix the queue button, useClassname get elements
// 0.0.3    Change interval to 30s
// 0.0.4    Add case notification feature
function refreshQueue(){
    try{ document.getElementsByClassName("btn refreshListButton")[0].onclick() }
    catch(err){}
}
function notiCase(){
    try{
                var caseSubject = document.getElementsByClassName("x-grid3-cell-inner x-grid3-col-CASES_SUBJECT")[0].textContent
        var notificationDetails = {
            text: caseSubject,
            title: 'NEW CASE!',
            timeout: 10000,
            image: 'https://i.stack.imgur.com/geLPT.png',
            onclick: function() { window.focus(); },
        };
    GM_notification(notificationDetails);
    }
    catch(err){}
}
setInterval(refreshQueue,30000);
setInterval(notiCase,20000);
