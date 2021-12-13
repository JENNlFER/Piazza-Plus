window.addEventListener('load', function () {
	chrome.storage.local.get(['history'], function(data) {
		if (data.history) {
			document.getElementsByClassName('main_panel')[0].setAttribute('data-visible', true);
			document.getElementById('history_slider_wrapper').setAttribute('data-visible', true);
			document.getElementById('popular_tags_bar').setAttribute('data-visible', true);
		}
	});
});