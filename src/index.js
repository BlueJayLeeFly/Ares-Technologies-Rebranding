import { menuAnimation } from './animation.js';

// DOM
const menuButton = document.getElementById('menu-btn');

// Boolean variables
let isMenuOpen = false;

// Menu button event handling
menuButton.addEventListener('click', () => {
	console.log('click');
	if (!isMenuOpen) {
		menuAnimation.play();
		gsap.fromTo(
			'nav ul li',
			{
				x: 'random(-300, 300)',
				y: 'random(-300, 300)',
			},
			{ duration: 0.7, ease: 'power1', x: 0, y: 0 }
		);
		isMenuOpen = !isMenuOpen;
	} else {
		menuAnimation.reverse();
		isMenuOpen = !isMenuOpen;
	}
});
