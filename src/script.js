document.addEventListener('DOMContentLoaded', function() {

    // ===== LÓGICA DE NAVEGAÇÃO (SCROLL E MENU HAMBÚRGUER) =====
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Efeito de scroll na navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Abrir/fechar menu hambúrguer
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });


    // ===== LÓGICA DE TRADUÇÃO =====

    // 1. Dicionário com todas as traduções
    const translations = {
        "pt-BR": {
            pageTitle: "Henrique Bressiani Bohrer - Desenvolvedor Web",
            navLogo: "Portfólio",
            navHome: "Início",
            navAbout: "Sobre",
            navSkills: "Habilidades",
            navExperience: "Experiência",
            navCertifications: "Certificações",
            navProjects: "Projetos",
            navContact: "Contato",
            heroTitle: "Olá, eu sou Henrique Bressiani Bohrer",
            heroSubtitle: "Desenvolvedor Web e futuro Analista de Dados, focado em criar experiências digitais incríveis.",
            heroButton: "Meus Projetos",
            aboutTitle: "Sobre Mim",
            aboutSubtitle: "Busco oportunidades em Dados e Tecnologia.",
            aboutDescription: "Meu objetivo é aprimorar continuamente minhas competências técnicas e analíticas. Tenho como principal foco a análise, visualização e interpretação de dados, buscando contribuir de forma estratégica para a tomada de decisões nas organizações.",
            aboutButton: "Download CV",
            skillsTitle: "Minhas Habilidades",
            experienceTitle: "Experiência e Educação",
            exp1Date: "Junho 2025 - Presente",
            exp1Title: "Estagiário de TI",
            exp1Description: "Auxílio no suporte técnico, manutenção de equipamentos e desenvolvimento de soluções internas.",
            exp2Date: "Abril 2024 - Maio 2025",
            exp2Title: "Auxiliar Administrativo",
            edu1Date: "Cursando (5º Período)",
            edu1Title: "Análise e Desenvolvimento de Sistemas",
            edu2Date: "Concluído em Julho 2025",
            edu2Title: "Curso de Analista de BI",
            certificationsTitle: "Certificações",
            cert1Title: "Analista de BI",
            certButton: "Ver Certificado",
            projectsTitle: "Meus Projetos",
            proj1Title: "Quiz de Programação",
            proj1Description: "Uma aplicação web interativa para testar conhecimentos em diversas áreas da programação.",
            projButtonLive: "Ver ao Vivo",
            proj2Title: "Hackathon PUC (2024) - Dekor AI",
            proj2Description: "Projeto para a Kapazi com o objetivo de criar um site que utiliza IA para gerar imagens realistas de pisos vinílicos.",
            contactTitle: "Entre em Contato",
            contactSubtitle: "Estou aberto a novas oportunidades e colaborações. Sinta-se à vontade para me contatar!"
        },
        "en-US": {
            pageTitle: "Henrique Bressiani Bohrer - Web Developer",
            navLogo: "Portfolio",
            navHome: "Home",
            navAbout: "About",
            navSkills: "Skills",
            navExperience: "Experience",
            navCertifications: "Certifications",
            navProjects: "Projects",
            navContact: "Contact",
            heroTitle: "Hello, I'm Henrique Bressiani Bohrer",
            heroSubtitle: "Web Developer and future Data Analyst, focused on creating incredible digital experiences.",
            heroButton: "My Projects",
            aboutTitle: "About Me",
            aboutSubtitle: "Seeking opportunities in Data and Technology.",
            aboutDescription: "My goal is to continuously improve my technical and analytical skills. My main focus is on the analysis, visualization, and interpretation of data, aiming to contribute strategically to decision-making in organizations.",
            aboutButton: "Download CV",
            skillsTitle: "My Skills",
            experienceTitle: "Experience and Education",
            exp1Date: "June 2025 - Present",
            exp1Title: "IT Intern",
            exp1Description: "Assisting with technical support, equipment maintenance, and internal solutions development.",
            exp2Date: "April 2024 - May 2025",
            exp2Title: "Administrative Assistant",
            edu1Date: "Studying (5th Term)",
            edu1Title: "Analysis and Systems Development",
            edu2Date: "Completed in July 2025",
            edu2Title: "BI Analyst Course",
            certificationsTitle: "Certifications",
            cert1Title: "BI Analyst",
            certButton: "View Certificate",
            projectsTitle: "My Projects",
            proj1Title: "Programming Quiz",
            proj1Description: "An interactive web application to test knowledge in various programming areas.",
            projButtonLive: "View Live",
            proj2Title: "PUC Hackathon (2024) - Dekor AI",
            proj2Description: "Project for Kapazi aimed at creating a website that uses AI to generate realistic images of vinyl flooring.",
            contactTitle: "Get in Touch",
            contactSubtitle: "I am open to new opportunities and collaborations. Feel free to contact me!"
        }
    };

    // 2. Elementos do seletor de idiomas
    const langButton = document.querySelector('.lang-button');
    const langDropdown = document.querySelector('.lang-dropdown');
    const currentLangSpan = document.getElementById('current-lang');
    const langLinks = langDropdown.querySelectorAll('a');

    // 3. Função para aplicar as traduções
    const setLanguage = (lang) => {
        // Altera o atributo lang do HTML
        document.documentElement.lang = lang;

        // Atualiza todos os textos com o atributo data-lang-key
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.dataset.langKey;
            if (translations[lang] && translations[lang][key]) {
                element.innerText = translations[lang][key];
            }
        });

        // Atualiza o texto do botão principal
        currentLangSpan.innerText = lang.toUpperCase();

        // Armazena a preferência de idioma do usuário
        localStorage.setItem('portfolioLanguage', lang);
    };

    // 4. Event listeners para o dropdown
    langButton.addEventListener('click', () => {
        langDropdown.classList.toggle('show');
        langButton.classList.toggle('active');
        langButton.setAttribute('aria-expanded', langDropdown.classList.contains('show'));
    });

    langLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedLang = link.dataset.lang;
            setLanguage(selectedLang);
            langDropdown.classList.remove('show');
            langButton.classList.remove('active');
            langButton.setAttribute('aria-expanded', 'false');
        });
    });

    // Fechar o dropdown se clicar fora dele
    document.addEventListener('click', (event) => {
        if (!langButton.contains(event.target) && !langDropdown.contains(event.target)) {
            langDropdown.classList.remove('show');
            langButton.classList.remove('active');
            langButton.setAttribute('aria-expanded', 'false');
        }
    });

    // 5. Define o idioma inicial ao carregar a página
    const preferredLanguage = localStorage.getItem('portfolioLanguage') || 'pt-BR';
    setLanguage(preferredLanguage);

});