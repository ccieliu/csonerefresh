// ==UserScript==
// @name         CSone Queue Refresh
// @namespace    https://csone.my.salesforce.com/console
// @version      0.0.2
// @description  Auto Refresh
// @author       yuxuliu@cisco.com
// @match        https://csone.my.salesforce.com/500*
// @grant        none
// @run-at      document-idle
// @downloadURL https://raw.githubusercontent.com/ccieliu/csonerefresh/master/csoneplugin.user.js
// @updateURL   https://raw.githubusercontent.com/ccieliu/csonerefresh/master/csoneplugin.user.js
// ==/UserScript==

// Version History :
// 0.0.1    First release
// 0.0.2    Fix the queue button, useClassname get elements

(function() {
    'use strict';
function refreshQueue(){
    document.getElementsByClassName("btn refreshListButton")[0].onclick()
}
setInterval(refreshQueue,5000);
})();
