window.addEventListener('load', function () {
	let e = document.getElementsByClassName('special_mentions_visibility')[0];
	if (e.style.display.trim() == 'block') {
		e.click();
	}
	console.log("Statistics hidden.");
}, false);
