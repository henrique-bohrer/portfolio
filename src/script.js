document.addEventListener('DOMContentLoaded', () => {

    // --- Animação de Scroll para as seções aparecerem ---
    const sections = document.querySelectorAll('.section');
    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    sections.forEach(section => { fadeInObserver.observe(section); });

    // --- Lógica do Header (Esconder/Mostrar e Sombra) ---
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (lastScrollY < window.scrollY && window.scrollY > 100) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        lastScrollY = window.scrollY;

        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Efeito de glow no fundo que segue o mouse ---
    document.body.addEventListener('mousemove', (e) => {
        document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
        document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
    });

    // --- Navegação Inteligente (Active Highlighting) ---
    const navLinks = document.querySelectorAll('.nav-links a');
    const contentSections = document.querySelectorAll('main .section');
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                const correspondingLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }, { rootMargin: '-50% 0px -50% 0px' });
    contentSections.forEach(section => { navObserver.observe(section); });

    // --- Lógica do Menu Hambúrguer (Mobile) ---
    const menuToggle = document.getElementById('menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinksContainer.classList.toggle('active');
        });
    }
});