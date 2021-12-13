// Translates raw text into an actual HTML element
function hitMeUp(html) {
	let element = document.createElement('template');
	element.innerHTML = html;
	return element.content.firstChild;
}

let tag = hitMeUp('<div class="button-wrapper"><div class="button_pad close-button"><button id="close_donation">Close</button></div></div>');

window.addEventListener('load', function () {
  document.getElementsByClassName('explanation')[1].after(tag);
	tag.children[0].children[0].addEventListener("click", function() { 
		document.getElementById('contribution_wrapper').remove();
	});
	
	chrome.storage.local.get(['donation'], function(data) {
		if (data.donation) {
			let close_btn = document.getElementById('close_donation');
  			if (close_btn != null) close_btn.click();
		}
	});
}, false);
