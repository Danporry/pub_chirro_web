// scripts.js

// En este script podrías agregar futuras funcionalidades
// como cargar dinámicamente la clasificación o las jornadas.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
