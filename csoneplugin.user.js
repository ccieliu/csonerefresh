// ==UserScript==
// @name         CSone Queue Refresh
// @namespace    https://csone.my.salesforce.com/console
// @version      0.0.7
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
// 0.0.5    Chagne timer to 60s to notice the case.
// 0.0.6    Chagne timer to 180s to notice the case.
// 0.0.7    Add notification sound.

function refreshQueue(){
    try{ document.getElementsByClassName("btn refreshListButton")[0].onclick() }
    catch(err){}
}

var player = document.createElement('audio');
player.src = 'https://notificationsounds.com/soundfiles/c9892a989183de32e976c6f04e700201/file-sounds-1109-slow-spring-board-longer-tail.mp3';
player.preload = 'auto';

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
    player.play();
    }
    catch(err){}
}
setInterval(refreshQueue,30000);
setInterval(notiCase,180000);
