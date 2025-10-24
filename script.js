document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('.main-content-area');
    if (mainContent) {
        const sparkleContainer = document.createElement('div');
        sparkleContainer.classList.add('sparkle-container');
        mainContent.appendChild(sparkleContainer);

        const numberOfSparkles = 100;

        function createSparkle() {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');

            const size = Math.random() * 3 + 1;
            sparkle.style.width = `${size}px`;
            sparkle.style.height = `${size}px`;

            const startX = Math.random() * window.innerWidth;
            const startY = Math.random() * window.innerHeight;
            const endX = Math.random() * window.innerWidth;
            const endY = Math.random() * window.innerHeight;

            const duration = Math.random() * 10 + 10;
            const delay = Math.random() * 10;

            sparkle.style.setProperty('--x-start', `${startX}px`);
            sparkle.style.setProperty('--y-start', `${startY}px`);
            sparkle.style.setProperty('--x-end', `${endX}px`);
            sparkle.style.setProperty('--y-end', `${endY}px`);
            sparkle.style.animation = `moveSparkle ${duration}s ${delay}s infinite linear`;

            sparkleContainer.appendChild(sparkle);
        }

        for (let i = 0; i < numberOfSparkles; i++) {
            createSparkle();
        }
    }
});
