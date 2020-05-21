/* jshint esversion: 6 */
window.addEventListener('load', function () {


// === GSAP & ScrollMagic Variables ===
const Controller = new ScrollMagic.Controller();
const IntroTl = new TimelineMax({});
const ProbioticsTl = new TimelineMax({});
const FaqTl = new TimelineMax({});
const AboutUsTl = new TimelineMax({});
const EnquireTl = new TimelineMax({});


// === Intro Animation ===
IntroTl
.staggerFrom('.intro-text > *', 1, {
	opacity: 0,
	y: 20,
	stagger: 0.2
});

const IntroScene = new ScrollMagic.Scene({
	triggerElement: ".intro"
}).setTween(IntroTl).addTo(Controller);


// === Probiotics Animation ===
ProbioticsTl
.from('.probiotics-center', 1, {
	opacity: 0,
	y: 20
})
.from('.probiotics-left', 1, {
	opacity: 0,
	x: 20,
	y: 20
}, '-=0.5')
.from('.probiotics-right', 1, {
	opacity: 0,
	x: -20,
	y: 20
}, '-=1');

const ProbioticsScene = new ScrollMagic.Scene({
	triggerElement: ".probiotics"
}).setTween(ProbioticsTl).addTo(Controller);


// === Faq Animation ===
FaqTl
.staggerFrom('.faq-title h1', 1, {
	opacity: 0,
	y: 20,
	stagger: 0.2
})
.from('.faq-qa .txt-small', 1, {
	opacity: 0,
	y: -20
}, '-=0.5');

const FaqScene = new ScrollMagic.Scene({
	triggerElement: ".faq"
}).setTween(FaqTl).addTo(Controller);


// === About Us Animation ===
AboutUsTl
.staggerFrom('.aboutus-right > *', 1, {
	opacity: 0,
	y: 20,
	stagger: 0.2
});

const AboutUsScene = new ScrollMagic.Scene({
	triggerElement: ".aboutus"
}).setTween(AboutUsTl).addTo(Controller);


// === Enquire Animation ===
EnquireTl
.from('.enquire-left button', 1, {
	opacity: 0,
	scale: 0.8,
	y: 20
});

const EnquireScene = new ScrollMagic.Scene({
	triggerElement: ".enquire"
}).setTween(EnquireTl).addTo(Controller);


});