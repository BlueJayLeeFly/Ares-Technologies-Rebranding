// DOM
const menuButton = document.getElementById('menu-btn');

// Boolean variables
let isMenuOpen = false;

// Set up animation
let menuAnimation = gsap.fromTo(
	'nav',
	{ opacity: 0 },
	{ duration: 0.7, ease: 'power1', display: 'flex', opacity: 1 }
);
menuAnimation.pause();

// Menu button event handling
menuButton.addEventListener('click', () => {
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
