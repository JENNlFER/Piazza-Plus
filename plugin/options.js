let toggle_donation = document.getElementById("toggle_donation");
let restore_history = document.getElementById("restore_history");

toggle_donation.addEventListener("click", async () => {
	chrome.storage.local.set({donation: toggle_donation.checked}, function() {}); 

	if (toggle_donation.checked) {
		let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	  chrome.scripting.executeScript({
	    target: { tabId: tab.id },
	    function: click_close,
	  });
	}
});

restore_history.addEventListener("click", async () => {
	chrome.storage.local.set({history: restore_history.checked}, function() {});

	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	if (restore_history.checked) {
		chrome.scripting.executeScript({
		  target: { tabId: tab.id },
		  function: mark_visible,
		});
	} else {
		chrome.scripting.executeScript({
		  target: { tabId: tab.id },
		  function: mark_hidden,
		});
	}
})

chrome.storage.local.get(['donation'], function(data) {
	toggle_donation.checked = data.donation;
});

chrome.storage.local.get(['history'], function(data) {
	restore_history.checked = data.history;
});

function click_close() {
  let close_btn = document.getElementById('close_donation');
  if (close_btn != null) close_btn.click();
}

function mark_hidden() {
	document.getElementsByClassName('main_panel')[0].setAttribute('data-visible', false);
	document.getElementById('history_slider_wrapper').setAttribute('data-visible', false);
	document.getElementById('popular_tags_bar').setAttribute('data-visible', false);
}

function mark_visible() {
	document.getElementsByClassName('main_panel')[0].setAttribute('data-visible', true);
	document.getElementById('history_slider_wrapper').setAttribute('data-visible', true);
	document.getElementById('popular_tags_bar').setAttribute('data-visible', true);
}