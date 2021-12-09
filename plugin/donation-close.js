// Translates raw text into an actual HTML element
function hitMeUp(html) {
	let element = document.createElement('template');
	element.innerHTML = html;
	return element.content.firstChild;
}

let tag = hitMeUp('<div class="button-wrapper"><div class="button_pad close-button"><button>Close</button></div></div>');

window.addEventListener('load', function () {
  document.getElementsByClassName('explanation')[1].after(tag);
	tag.children[0].children[0].addEventListener("click", function() { 
		document.getElementById('contribution_wrapper').remove();
	});
	//tag.children[0].children[0].click(); //TODO: remove
	console.log("Donation close button added.");
}, false);
