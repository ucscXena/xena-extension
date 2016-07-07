document.addEventListener("DOMContentLoaded", function(event) { 
	var element = document.getElementById('status');
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
		var url = tabs[0].url;
		if (url.match(/^https?:\/\/dcc.icgc.org/)) {
			element.innerHTML = "<p>Enabled on this page.</p> <p>If you encounter problems, you can disable the plugin from the 'Manage Extensions' page, available by right-clicking on the plugin icon.</p>";
		} else {
			element.innerHTML = '<p>Disabled on this page.</p>';
		}
	});
});
