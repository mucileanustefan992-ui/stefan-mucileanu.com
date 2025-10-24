document.addEventListener('DOMContentLoaded', () => {
    const beamsContainer = document.querySelector('.background-beams');
    const numberOfBeams = 10;

    for (let i = 0; i < numberOfBeams; i++) {
        const beam = document.createElement('div');
        beam.classList.add('beam');
        
        beam.style.width = `${Math.random() * 200 + 100}px`;
        beam.style.height = `${Math.random() * 400 + 200}px`;
        beam.style.left = `${Math.random() * 100}vw`;
        beam.style.top = `${Math.random() * 100}vh`;
        
        beam.style.animationDelay = `${i * (10 / numberOfBeams)}s`; 

        beamsContainer.appendChild(beam);
    }
});
