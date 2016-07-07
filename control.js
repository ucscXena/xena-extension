chrome.webRequest.onBeforeRequest.addListener(function () {
		return {
			redirectUrl: chrome.extension.getURL("scripts.js")
		};
	}, {
		urls: ["*://dcc.icgc.org/scripts/scripts.*.js"]
	}, ['blocking']);

chrome.webRequest.onBeforeRequest.addListener(function () {
		return {
			redirectUrl: chrome.extension.getURL("advanced.expression.html")
		};
	}, {
		urls: ["*://dcc.icgc.org/scripts/advanced/views/advanced.expression.html"]
	}, ['blocking']);

chrome.webRequest.onBeforeRequest.addListener(function () {
		return {
			redirectUrl: chrome.extension.getURL("advanced.html")
		};
	}, {
		urls: ["*://dcc.icgc.org/scripts/advanced/views/advanced.html"]
	}, ['blocking']);
