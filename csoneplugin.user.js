// ==UserScript==
// @name         CSoneQueueRefresh
// @namespace    https://csone.my.salesforce.com/console
// @version      0.0.1
// @description  Auto Refresh
// @author       yuxuliu@cisco.com
// @match        *://csone.my.salesforce.com/*
// @grant        none
// @run-at      document-idle
// @downloadURL https://raw.githubusercontent.com/ccieliu/csonerefresh/master/csoneplugin.user.js
// @updateURL   https://raw.githubusercontent.com/ccieliu/csonerefresh/master/csoneplugin.user.js
// ==/UserScript==

// Version History :
// 0.0.1    First release

(function() {
    'use strict';
function refreshQueue(){
    document.getElementById("00B1C00000ALA4O_refresh").onclick();
}
setInterval(refreshQueue,5000);
})();
