document.addEventListener("DOMContentLoaded", () => {

    // 1. Selectează toate elementele care vrei să apară la scroll
    const hiddenElements = document.querySelectorAll('.hidden-on-load');

    // 2. Creează un "observer" (un paznic)
    const observer = new IntersectionObserver((entries) => {
        // 3. Această funcție se execută când un element intrat sau iese din ecran
        entries.forEach((entry) => {
            // Verifică dacă elementul este acum vizibil ("intersectează" ecranul)
            if (entry.isIntersecting) {
                // Adaugă clasa '.show' pentru a-l face vizibil
                entry.target.classList.add('show');
                
                // Oprește observarea după ce a apărut o dată
                observer.unobserve(entry.target); 
            } 
        });
    }, {
        threshold: 0.1 // Animația pornește când 10% din element este vizibil
    });

    hiddenElements.forEach((el) => observer.observe(el));
});