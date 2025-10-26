document.addEventListener('DOMContentLoaded', () => {
    const particlesContainer = document.querySelector('.floating-particles');
    const numberOfParticles = 50; // Adjust as needed

    if (particlesContainer) {
        for (let i = 0; i < numberOfParticles; i++) {
            createParticle();
        }
    } else {
        console.warn("Element with class 'floating-particles' not found. Particles will not be generated.");
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particlesContainer.appendChild(particle);

        const size = Math.random() * 8 + 4; // Particle size between 4px and 12px
        const duration = Math.random() * 15 + 10; // Animation duration between 10s and 25s
        const delay = Math.random() * -duration; // Random start delay

        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;

        const endX = startX + (Math.random() - 0.5) * 600; // Move +/- 300px horizontally
        const endY = startY + (Math.random() - 0.5) * 600; // Move +/- 300px vertically

        // Generate more intermediate points for a "floating" effect
        const mid1X = startX + (Math.random() - 0.5) * 800;
        const mid1Y = startY + (Math.random() - 0.5) * 800;
        const mid2X = startX + (Math.random() - 0.5) * 800;
        const mid2Y = startY + (Math.random() - 0.5) * 800;
        const mid3X = startX + (Math.random() - 0.5) * 800;
        const mid3Y = startY + (Math.random() - 0.5) * 800;

        const scaleStart = Math.random() * 0.5 + 0.5; // Scale between 0.5 and 1
        const scaleMid = Math.random() * 0.5 + 0.8; // Slightly larger mid-scale

        particle.style.setProperty('--size', `${size}px`);
        particle.style.animation = `floatAround ${duration}s linear ${delay}s infinite`;
        particle.style.setProperty('--x-start', `${startX}px`);
        particle.style.setProperty('--y-start', `${startY}px`);
        particle.style.setProperty('--x-mid1', `${mid1X}px`);
        particle.style.setProperty('--y-mid1', `${mid1Y}px`);
        particle.style.setProperty('--x-mid2', `${mid2X}px`);
        particle.style.setProperty('--y-mid2', `${mid2Y}px`);
        particle.style.setProperty('--x-mid3', `${mid3X}px`);
        particle.style.setProperty('--y-mid3', `${mid3Y}px`);
        particle.style.setProperty('--x-end', `${endX}px`);
        particle.style.setProperty('--y-end', `${endY}px`);
        particle.style.setProperty('--scale-start', scaleStart);
        particle.style.setProperty('--scale-mid', scaleMid);
    }
});
