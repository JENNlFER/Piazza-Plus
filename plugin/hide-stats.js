window.addEventListener('load', function () {
	console.log(document.getElementsByClassName('special_mentions_visibility hide')[0]);
	document.getElementsByClassName('special_mentions_visibility hide')[0].click();
	console.log("Loaded Stat Hide");
}, false);
