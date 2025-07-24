document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DE TRADUÇÃO ---
    const translations = {
        'pt-BR': {
            pageTitle: "Henrique Bressiani Bohrer - Desenvolvedor & Analista de Dados",
            navAbout: "Sobre",
            navExperience: "Jornada",
            navProjects: "Projetos",
            navResume: "Currículo",
            navContact: "Contato",
            heroIntro: "Oi, meu nome é",
            heroSubtitle: "Transformo ideias em web e dados em insights.",
            heroDescription: "Atuo como desenvolvedor e aspirante a analista de dados, combinando a paixão por criar interfaces elegantes com a curiosidade de encontrar histórias nos números.",
            heroButton: "Conheça meus trabalhos",
            aboutTitle: "Sobre Mim",
            aboutParagraph1: "Desde o início da minha jornada na tecnologia, sou movido pela curiosidade. Gosto de entender como as coisas funcionam e, mais importante, como posso fazê-las funcionar melhor. Hoje, meu foco se divide entre duas grandes paixões: o desenvolvimento de aplicações web que as pessoas gostem de usar e a análise de dados para descobrir padrões e guiar decisões inteligentes.",
            aboutParagraph2: "Estas são algumas das ferramentas que uso no meu dia a dia:",
            experienceTitle: "Minha Jornada",
            exp1Date: "Julho 2025 - Presente",
            exp1Title: "Estagiário de TI",
            exp1Description: "Desenvolvo relatórios com a ferramenta do Power BI apresentando vendas diárias, semanais e mensais da empresa. Facilitando o controle de meta dos funcionários e uma visão geral da empresa.",
            edu1Date: "Cursando - 5º Período",
            edu1Title: "Análise e Desenvolvimento de Sistemas",
            edu1Description: "Aplicando conceitos de engenharia de software em projetos práticos e aprofundando conhecimentos em PHP, Python, JavaScript e MySQL.",
            edu2Date: "Concluído",
            edu2Title: "Curso de Analista de BI",
            edu2Description: "Capacitação focada em transformar dados brutos em dashboards interativos para suportar decisões de negócio.",
            exp2Title: "Atendimento ao Cliente",
            exp2Description: "Desenvolvi habilidades de comunicação e resolução de problemas no atendimento direto ao cliente.",
            projectsTitle: "Projetos que Tive Orgulho de Construir",
            proj1Title: "Hackathon - Dekor AI",
            proj1Description: "Durante um Hackathon, colaborei na criação de um site-conceito que usaria IA para visualizar pisos vinílicos em um ambiente real através da câmera do usuário.",
            proj2Title: "Quiz de Programação",
            proj2Description: "Desenvolvi um quiz interativo para ajudar outros entusiastas da programação a testar e aprimorar seus conhecimentos de forma divertida.",
            resumeTitle: "Meu Currículo",
            resumeDescription: "Quer todos os detalhes da minha trajetória em um formato mais tradicional? Meu currículo completo está a um clique de distância.",
            resumeButton: "Baixar Currículo",
            contactTitle: "E agora?",
            contactDescription: "Atualmente estou buscando novas oportunidades e adoraria ouvir sobre projetos interessantes. Se você tem uma ideia, uma pergunta ou apenas quer dizer um 'oi', meu inbox está sempre aberto!",
            contactButton: "Mande uma mensagem",
            footerText: "Projetado e desenvolvido por Henrique Bressiani Bohrer"
        },
        'en-US': {
            pageTitle: "Henrique Bressiani Bohrer - Developer & Data Analyst",
            navAbout: "About",
            navExperience: "Journey",
            navProjects: "Projects",
            navResume: "Resume",
            navContact: "Contact",
            heroIntro: "Hi, my name is",
            heroSubtitle: "I turn ideas into web and data into insights.",
            heroDescription: "I work as a developer and aspiring data analyst, combining a passion for creating elegant interfaces with a curiosity for finding stories in the numbers.",
            heroButton: "Check out my work",
            aboutTitle: "About Me",
            aboutParagraph1: "Since the beginning of my journey in technology, I've been driven by curiosity. I like to understand how things work and, more importantly, how I can make them work better. Today, my focus is divided between two great passions: developing web applications that people enjoy using and analyzing data to discover patterns and guide intelligent decisions.",
            aboutParagraph2: "Here are some of the technologies I work with recently:",
            experienceTitle: "My Journey",
            exp1Date: "July 2025 - Present",
            exp1Title: "IT Intern",
            exp1Description: "I develop reports with Power BI, presenting the company's daily, weekly, and monthly sales. This facilitates employee goal tracking and provides a general overview of the company.",
            edu1Date: "Studying - 5th Term",
            edu1Title: "Systems Analysis and Development",
            edu1Description: "Applying software engineering concepts in practical projects and deepening my knowledge in PHP, Python, JavaScript, and MySQL.",
            edu2Date: "Completed",
            edu2Title: "BI Analyst Course",
            edu2Description: "Training focused on transforming raw data into interactive dashboards and reports to support business decisions.",
            exp2Title: "Customer Service",
            exp2Description: "Developed communication and problem-solving skills in direct customer service.",
            projectsTitle: "Some Projects I've Built",
            proj1Title: "Hackathon - Dekor AI",
            proj1Description: "During a Hackathon, I collaborated on creating a proof-of-concept website that would use AI to visualize vinyl flooring in a real environment through the user's camera.",
            proj2Title: "Programming Quiz",
            proj2Description: "I developed an interactive quiz to help other programming enthusiasts test and improve their knowledge in a fun way.",
            resumeTitle: "My Resume",
            resumeDescription: "Want all the details of my career in a more traditional format? My complete resume is just a click away.",
            resumeButton: "Download Resume",
            contactTitle: "What's Next?",
            contactDescription: "I'm currently seeking new opportunities and would love to hear about interesting projects. If you have an idea, a question, or just want to say 'hi', my inbox is always open!",
            contactButton: "Send a message",
            footerText: "Designed and developed by Henrique Bressiani Bohrer"
        }
    };

    const languageToggle = document.getElementById('language-toggle');
    let currentLang = localStorage.getItem('portfolioLanguage') || 'pt-BR';

    const setLanguage = (lang) => {
        document.documentElement.lang = lang.slice(0, 2);
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.dataset.langKey;
            if (translations[lang][key]) {
                element.innerText = translations[lang][key];
            }
        });
        currentLang = lang;
        localStorage.setItem('portfolioLanguage', lang);
        languageToggle.innerText = lang === 'pt-BR' ? 'English' : 'Português';
    };

    languageToggle.addEventListener('click', () => {
        const newLang = currentLang === 'pt-BR' ? 'en-US' : 'pt-BR';
        setLanguage(newLang);
    });

    // Seta o idioma inicial
    setLanguage(currentLang);

    // --- O RESTANTE DO SEU CÓDIGO JS CONTINUA AQUI ---
    // (Animação de Scroll, Lógica do Header, Efeito de Glow, etc.)

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

    document.body.addEventListener('mousemove', (e) => {
        document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
        document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
    });

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

    const menuToggle = document.getElementById('menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinksContainer.classList.toggle('active');
        });
    }
});