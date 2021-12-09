const panel = document.getElementsByClassName('main_panel')[0];

var x = 10;
const orb_callback = function(mutations, observer) {
	observer.disconnect();
	const actions = document.getElementsByClassName('actions');
	for (const a of actions) {
		if (a.getElementsByClassName('orb').length > 0) continue;
		
		const links = a.getElementsByClassName('preview_link');
		for (const link of links) {
			a.insertBefore(hitMeUp('<button class="orb"></button>'), link);
		}
	}
	observer.observe(panel, {attributes: false, childList: true, subtree: true});
};

const obs = new MutationObserver(orb_callback);
obs.observe(panel, {attributes: false, childList: true, subtree: true});
