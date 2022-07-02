// Set up animation
let menuAnimation = gsap.fromTo(
	'nav',
	{ opacity: 0 },
	{
		duration: 0.7,
		ease: 'power1',
		display: 'flex',
		opacity: 1,
		paused: true,
	}
);

export { menuAnimation };
