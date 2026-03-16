document.addEventListener('DOMContentLoaded', () => {
    // Navigation scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = menuToggle.querySelector('i');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            menuIcon.classList.remove('bx-menu');
            menuIcon.classList.add('bx-x');
        } else {
            menuIcon.classList.remove('bx-x');
            menuIcon.classList.add('bx-menu');
        }
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuIcon.classList.remove('bx-x');
            menuIcon.classList.add('bx-menu');
        });
    });

    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Add a little offset for better UX
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // Intersection Observer for animations
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // CV Download Functionality
    const downloadButtons = [
        document.getElementById('download-cv-nav'),
        document.getElementById('download-cv-hero')
    ];

    const atsTemplate = document.getElementById('ats-template');

    function downloadCV() {
        // Show loading state if needed, or just trigger download
        const element = document.querySelector('.ats-cv');
        
        const opt = {
            margin: 0,
            filename: 'Dodhy_Kurnia_CV_ATS.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, letterRendering: true },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        // Temporarily show the template for capture if needed, 
        // but html2pdf handles hidden elements if specified or we can just pass the element
        atsTemplate.style.display = 'block';
        
        html2pdf().set(opt).from(element).save().then(() => {
            atsTemplate.style.display = 'none';
        });
    }

    downloadButtons.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                downloadCV();
            });
        }
    });

    // Theme Toggle Functionality
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const body = document.documentElement;

    // Check for saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeIcon.classList.replace('bx-moon', 'bx-sun');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            themeIcon.classList.replace('bx-moon', 'bx-sun');
            localStorage.setItem('theme', 'light');
        } else {
            themeIcon.classList.replace('bx-sun', 'bx-moon');
            localStorage.setItem('theme', 'dark');
        }
    });
});
