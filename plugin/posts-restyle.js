const panel = document.getElementsByClassName('main_panel')[0];

const orb_callback = function(mutations, observer) {
	observer.disconnect();
	let actions = [...document.getElementsByClassName('actions'), ...document.getElementsByClassName('post_region_actions')];
	for (const a of actions) {
		if (a.getElementsByClassName('orb').length > 0) continue;
		let preview = a.parentElement.querySelector('.no-preview') == null;


		const links = a.getElementsByClassName('preview_link');
		for (const link of links) {
			let preview_span = document.createElement('SPAN');
			preview_span.innerHTML = 'Preview';
			preview_span.classList.add('orb-label');
			a.insertBefore(preview_span, link);
			link.classList.add('orb');
			if (preview) link.classList.add('on');
			link.addEventListener('click', () => {
				if (link.classList.contains('on')) {
					link.classList.remove('on');
				} else {
					link.classList.add('on');
				}
			})
		}
	}
	observer.observe(panel, {attributes: false, childList: true, subtree: true});
};

const obs = new MutationObserver(orb_callback);
obs.observe(panel, {attributes: false, childList: true, subtree: true});
