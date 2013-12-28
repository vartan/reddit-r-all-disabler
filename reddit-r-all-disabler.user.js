// ==UserScript==
// @name         /r/all disabler
// @namespace    http://www.mvartan.com
// @version      0.3
// @description  Disables /r/all
// @include      http://*reddit.com*
// @copyright    Michael Vartan, 2012-2013
// ==/UserScript==
if(document.URL.indexOf("/r/all")!=-1)
	document.getElementById("siteTable").innerHTML="/r/all is currently disabled.";
var anchors = document.getElementsByTagName('a');
for(var i = 0; i < anchors.length; i++)
    if(anchors[i] != null && anchors[i].getAttribute("href").indexOf("/r/all")!=-1)
		anchors[i].parentNode.removeChild(anchors[i]);

