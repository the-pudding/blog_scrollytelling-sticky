// D3 is included by globally by default
import graphicSide from './graphic-side';
import graphicOverlay from './graphic-overlay';

function init() {
	// kick off graphic code
	graphicSide.init();
	graphicOverlay.init();
}

init();
