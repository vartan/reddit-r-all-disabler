// ==UserScript==
// @name       /r/all disabler
// @namespace  http://www.mvartan.com
// @version    0.2
// @description  Disables /r/all
// @match      http://*reddit.com*
// @copyright  2012+, You
// ==/UserScript==
if(document.URL.indexOf("/r/all")!=-1)
	window.location = "http://www.google.com/"
var anchors = document.getElementsByTagName('a');
for(var i = 0; i < anchors.length; i++)
    if(anchors[i] != null && anchors[i].getAttribute("href").indexOf("/r/all")!=-1)
		anchors[i].parentNode.removeChild(anchors[i]);