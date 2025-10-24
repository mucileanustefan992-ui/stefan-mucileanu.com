document.addEventListener('DOMContentLoaded', () => {
    const sparkleContainer = document.createElement('div');
    sparkleContainer.classList.add('sparkle-container');
    document.querySelector('.main-content-area').appendChild(sparkleContainer);

    const numberOfSparkles = 30; // Câte scântei vrei pe ecran simultan

    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');

        const size = Math.random() * 8 + 4; // Dimensiune între 4px și 12px
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;

        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const endX = Math.random() * window.innerWidth;
        const endY = Math.random() * window.innerHeight;

        const duration = Math.random() * 5 + 5; // Durata animației între 5s și 10s
        const delay = Math.random() * 5; // Întârziere random pentru fiecare scânteie

        sparkle.style.setProperty('--x-start', `${startX}px`);
        sparkle.style.setProperty('--y-start', `${startY}px`);
        sparkle.style.setProperty('--x-end', `${endX}px`);
        sparkle.style.setProperty('--y-end', `${endY}px`);
        sparkle.style.animation = `moveSparkle ${duration}s ${delay}s infinite linear`;

        sparkleContainer.appendChild(sparkle);

        // Elimină scânteia după ce animația este gata și creează alta nouă
        sparkle.addEventListener('animationend', () => {
            sparkle.remove();
            createSparkle(); // Creează o nouă scânteie pentru a menține numărul constant
        });
    }

    // Creează numărul inițial de scântei
    for (let i = 0; i < numberOfSparkles; i++) {
        createSparkle();
    }
});
