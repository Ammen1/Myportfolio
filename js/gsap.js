// Header animations
window.addEventListener('load', () => {
    const timelineHeader = gsap.timeline()
    timelineHeader
        .to('.showcase-title', {
            duration: 1,
            opacity: 1,
            y: "0",
            ease: "bounce"
        })
        .to('.showcase-inner-text', {
            duration: 1,
            opacity: 1,
            y: "0",
            ease: 'bounce',
        })
        .from('.highlight', {
            duration: 1.5,
            color: 'white'
        })
})

// About me animations
gsap.registerPlugin(ScrollTrigger)
gsap.from('.about-me .section-title', {
    scrollTrigger: '.about-me .section-title',
    duration: 1,
    y: '50px',
    ease: 'power',
    opacity: 0,
    stagger: 0.2
})
gsap.from('.aboutme-text p', {
    scrollTrigger: '.aboutme-text',
    duration: 1,
    delay: 0.5,
    y: '50px',
    ease: 'power',
    opacity: 0,
    stagger: 0.2
})
gsap.from('.icon-label', {
    scrollTrigger: '.skills.icons',
    y: '50px',
    ease: 'power',
    delay: 1.5,
    opacity: 0,
    stagger: 0.2
})

// Projects animation
gsap.from('.portfolio .section-title', {
    scrollTrigger: '.portfolio .section-title',
    duration: 1,
    delay: 0,
    y: '50px',
    ease: 'power',
    opacity: 0,
    stagger: 0.2
})
gsap.from('.project', {
    scrollTrigger: '.projects',
    y: '50px',
    ease: 'power',
    delay: 0.5,
    opacity: 0,
    stagger: 0.2
})
gsap.from('.project-description', {
    scrollTrigger: '.projects',
    y: '50px',
    ease: 'power',
    delay: 1,
    opacity: 0,
    stagger: 0.2
})
// Contact me animations
gsap.from('.contact-me .section-title', {
    scrollTrigger: '.contact-me .section-title',
    duration: 1,
    y: '50px',
    ease: 'power',
    opacity: 0,
    stagger: 0.2
})
gsap.from('.contact-method', {
    scrollTrigger: '.contact-me .section-title',
    duration: 1,
    delay: 1,
    y: "50px",
    ease: 'power2',
    opacity: 0,
})
gsap.from('.social a', {
    scrollTrigger: '.contact-me .section-title',
    delay: 1,
    duration: 1,
    y: "50px",
    ease: 'power2',
    opacity: 0,
})