

function beep() {
	//
	console.log('hewwo')
}

function hitMeUp(html) {
	let element = document.createElement('template');
	element.innerHTML = html;
	return element.content.firstChild;
}

let bitch = '<div class="button-wrapper"><div class="button_pad close-button"><button>Close</button></div></div>'

let tag = hitMeUp(bitch);

document.getElementsByClassName('explanation')[1].after(tag);

tag.children[0].children[0].addEventListener("click", function() { 
	document.getElementById('contribution_wrapper').remove();
});




