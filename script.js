document.addEventListener('DOMContentLoaded', () => {
    const particlesContainer = document.querySelector('.floating-particles');
    const numberOfParticles = 180; // numărul total de particule

    if (!particlesContainer) return;

    // Funcție care generează particulele
    function generateParticles() {
        // Golește containerul la reîncărcare/redimensionare
        particlesContainer.innerHTML = '';

        // Calculăm înălțimea totală a paginii (nu doar viewport)
        const totalHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight
        );

        for (let i = 0; i < numberOfParticles; i++) {
            createParticle(totalHeight);
        }
    }

    // Funcția care creează fiecare particulă individuală
    function createParticle(totalHeight) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particlesContainer.appendChild(particle);

        const size = Math.random() * 10 + 6; // 6px - 16px
        const duration = Math.random() * 25 + 20; // 20s - 45s
        const delay = Math.random() * -duration;

        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * totalHeight;
        const endX = startX + (Math.random() - 0.5) * 1000;
        const endY = startY + (Math.random() - 0.5) * 1000;

        const mid1X = startX + (Math.random() - 0.5) * 1200;
        const mid1Y = startY + (Math.random() - 0.5) * 1200;
        const mid2X = startX + (Math.random() - 0.5) * 1200;
        const mid2Y = startY + (Math.random() - 0.5) * 1200;
        const mid3X = startX + (Math.random() - 0.5) * 1200;
        const mid3Y = startY + (Math.random() - 0.5) * 1200;

        const scaleStart = Math.random() * 0.4 + 0.4;
        const scaleMid = Math.random() * 0.6 + 0.8;

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

    // Generează particulele inițial
    generateParticles();

    // Recalculează și regenerează particulele dacă se redimensionează fereastra
    window.addEventListener('resize', () => {
        clearTimeout(window._resizeTimeout);
        window._resizeTimeout = setTimeout(() => {
            generateParticles();
        }, 400);
    });
});
