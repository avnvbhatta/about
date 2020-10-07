import { TimelineLite, Power3, gsap,  } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

let tl = new TimelineLite();
tl
.fromTo(".breathe", {opacity: 0, ease: Power3.easeInOut},  {opacity: 1, ease: Power3.easeInOut, duration: 2, scale: 3 }, )
.fromTo(".breathe", {opacity: 1, ease: Power3.easeInOut, scale: 3},  {opacity: 0, ease: Power3.easeInOut, duration: 2, scale: 10 }, )
.fromTo('#triangle', {opacity: 0, ease: Power3.easeInOut},  {opacity: 1, ease: Power3.easeInOut, duration: 4 }, "-=2")
.fromTo('#main_ray', {opacity: 0, ease: Power3.easeInOut, x: '-100vw', y: '30vh'},  {opacity: 1, ease: Power3.easeInOut, x: 0, y:0, duration: 5}, "-=5")
.fromTo('#inside_ray', {opacity: 0, ease: Power3.easeInOut},  {opacity: 1, duration: 2}, "-=1")
.fromTo('#ray1', {opacity: 0, ease: Power3.easeInOut},  {opacity: 1, duration:4}, "-=1")
.fromTo('#ray2', {opacity: 0, ease: Power3.easeInOut},  {opacity: 1, duration:4}, "-=4")
.fromTo('#ray3', {opacity: 0, ease: Power3.easeInOut},  {opacity: 1, duration:4}, "-=4")
.fromTo('#ray4', {opacity: 0, ease: Power3.easeInOut},  {opacity: 1, duration:4}, "-=4")
.fromTo('#ray5', {opacity: 0, ease: Power3.easeInOut},  {opacity: 1, duration:4}, "-=4")
.fromTo('#ray6', {opacity: 0, ease: Power3.easeInOut},  {opacity: 1, duration:4}, "-=4")




let animeTl = new TimelineLite();

animeTl
.to(".anime", {scrollTrigger: {
    trigger: "#body",
    markers: true,
    start: "top 1000px",
    scrub: true,
}, backgroundColor: 'red', ease:Power3.easeInOut, duration: 5})
.to("#eyes",  {scrollTrigger: {
    trigger: "#eyes",
    markers: true,
    start: "top 1000px",
    scrub: true,
}, opacity: 1, ease: Power3.easeInOut, duration: 4})
.to("[id^=birdr]",  {scrollTrigger: {
    trigger: "#eyes",
    markers: true,
    scrub: true,
}, opacity: 1, ease: Power3.easeInOut, x: "20", stagger: true, duration: 4})
.to("[id^=birdl]",  {scrollTrigger: {
    trigger: "#eyes",
    markers: true,
    scrub: true,
}, opacity: 1, ease: Power3.easeInOut, x: "-20", stagger: true, duration: 4})





