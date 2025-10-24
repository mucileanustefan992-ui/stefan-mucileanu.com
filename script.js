document.addEventListener('DOMContentLoaded', () => {

    function createParticles(){
        const container=document.createElement('div');
        container.className='floating-particles';
        document.body.appendChild(container);

        const numberOfParticles = 150;

        function createParticle(){
            const p=document.createElement('div');
            p.className='particle';
            
            const size = Math.random() * 8 + 4;
            p.style.setProperty('--size', `${size}px`);

            const startX = Math.random() * window.innerWidth;
            const startY = Math.random() * window.innerHeight;
            const endX = Math.random() * window.innerWidth;
            const endY = Math.random() * window.innerHeight;

            const midX1 = Math.random() * window.innerWidth;
            const midY1 = Math.random() * window.innerHeight;
            const midX2 = Math.random() * window.innerWidth;
            const midY2 = Math.random() * window.innerHeight;
            const midX3 = Math.random() * window.innerWidth;
            const midY3 = Math.random() * window.innerHeight;

            const duration = Math.random() * 20 + 15;
            const delay = Math.random() * 15;

            p.style.setProperty('--x-start', `${startX}px`);
            p.style.setProperty('--y-start', `${startY}px`);
            p.style.setProperty('--x-end', `${endX}px`);
            p.style.setProperty('--y-end', `${endY}px`);

            p.style.setProperty('--x-mid1', `${midX1}px`);
            p.style.setProperty('--y-mid1', `${midY1}px`);
            p.style.setProperty('--x-mid2', `${midX2}px`);
            p.style.setProperty('--y-mid2', `${midY2}px`);
            p.style.setProperty('--x-mid3', `${midX3}px`);
            p.style.setProperty('--y-mid3', `${midY3}px`);

            p.style.setProperty('--scale-start', `${Math.random() * 0.5 + 0.5}`);
            p.style.setProperty('--scale-mid', `${Math.random() * 0.5 + 0.7}`);

            p.style.animation = `floatAround ${duration}s ${delay}s infinite linear`;

            container.appendChild(p);
        }

        for(let i=0; i < numberOfParticles; i++) {
            createParticle();
        }
    }

    createParticles();
});
