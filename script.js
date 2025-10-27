document.addEventListener('DOMContentLoaded', () => {
    const particlesContainer = document.querySelector('.floating-particles');
    const numberOfParticles = 150; // Poți ajusta numărul

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

        const size = Math.random() * 6 + 2; // Particule puțin mai mici (2px - 8px)
        const duration = Math.random() * 20 + 15; // Durată animație (15s - 35s)
        const delay = Math.random() * -duration; // Start cu delay negativ

        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const endX = startX + (Math.random() - 0.5) * 800;
        const endY = startY + (Math.random() - 0.5) * 800;

        const mid1X = startX + (Math.random() - 0.5) * 1000;
        const mid1Y = startY + (Math.random() - 0.5) * 1000;
        const mid2X = startX + (Math.random() - 0.5) * 1000;
        const mid2Y = startY + (Math.random() - 0.5) * 1000;
        const mid3X = startX + (Math.random() - 0.5) * 1000;
        const mid3Y = startY + (Math.random() - 0.5) * 1000;

        const scaleStart = Math.random() * 0.4 + 0.4; // Scală mai mică (0.4 - 0.8)
        const scaleMid = Math.random() * 0.5 + 0.6;  // Scală medie (0.6 - 1.1)

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
