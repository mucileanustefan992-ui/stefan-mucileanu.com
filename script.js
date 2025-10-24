document.addEventListener('DOMContentLoaded', () => {

    function createParticles(){
        const container=document.createElement('div');
        container.className='floating-particles';
        document.body.appendChild(container);

        function createParticle(){
            const p=document.createElement('div');
            p.className='particle';
            p.style.left=Math.random()*100+'%';
            p.style.animationDelay=Math.random()*15+'s';
            p.style.animationDuration=(Math.random()*10+10)+'s';
            container.appendChild(p);
            setTimeout(()=>{p.remove()},20000);
        }

        setInterval(createParticle,800);
        for(let i=0;i<10;i++) setTimeout(createParticle,i*300);
    }

    createParticles();
});
