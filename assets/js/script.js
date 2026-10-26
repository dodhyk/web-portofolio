/**
 * Dodhy Kurnia Rahmantyo - CV ATS & Portofolio
 * Multilingual (ID / EN), Theme Switching, Printing & PDF Generation Logic
 */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // Translation Dictionaries (Bahasa Indonesia & English)
    // =========================================================================
    const translations = {
        id: {
            doc_title: "Dodhy Kurnia Rahmantyo - CV ATS & Portofolio",
            brand_badge: "CV ATS",
            btn_articles: "Artikel",
            btn_projects: "Proyek",
            btn_print: "Cetak",
            btn_download: "Download CV",
            header_role: "Full Stack Developer & Data Scientist",
            contact_location: "Jember, Jawa Timur, Indonesia",

            // Profil
            sec_profile_title: "Profil",
            sec_profile_text: "Full Stack Developer dan Data Scientist lulusan D4 Teknik Informatika Politeknik Negeri Jember dengan rekam jejak dalam pengembangan aplikasi web enterprise, arsitektur backend, serta pemrosesan data analitik dan pemodelan prediktif. Berpengalaman membangun RESTful API performa tinggi menggunakan Java dan Spring Boot, mengintegrasikan alur ETL data warehouse dengan Talend Data Studio, serta merancang visualisasi data interaktif dengan Power BI, Apache Superset, dan Tableau. Terbiasa bekerja secara sistematis, adaptif terhadap inovasi teknologi, serta memiliki komitmen kuat dalam menciptakan solusi komputasi yang efisien dan andal.",

            // Kemampuan Utama
            sec_skills_title: "Kemampuan Utama",
            skill_1: "Java, Spring Boot & NestJS (Node.js)",
            skill_2: "RESTful API Architecture & Integration",
            skill_3: "WaveMaker Studios & ZKoss Framework",
            skill_4: "Frontend (HTML5, CSS3, JavaScript)",
            skill_5: "Database PostgreSQL & Optimasi Query",
            skill_6: "Pipeline ETL & IBM Cloud Pak for Data",
            skill_7: "Data Science & Machine Learning (Python, R, Haskell)",
            skill_8: "Pemodelan Prediktif & Analisis Statistik",
            skill_9: "Tableau Public & Dashboard Interaktif",
            skill_10: "Visualisasi Power BI & Apache Superset",
            skill_11: "Problem Solving & Prinsip Clean Code",
            skill_12: "Agile Development & Scrum Framework",

            // Portofolio
            sec_projects_title: "Portofolio & Proyek",
            projects_hint: "Setiap judul proyek di bawah ini dapat diklik langsung untuk menuju ke tautan portofolio / live dashboard terkait.",
            role_fullstack: "Full Stack Developer",
            role_support: "Support Developer",
            role_author: "Penulis / Author",
            role_collab: "Kolaborator Riset",
            role_data_eng: "Data Engineer",
            role_creator: "Kreator & Lead Researcher",
            cup_subtitle: "Kompetisi Analytics Cup 2 • Kolaborasi dengan dkruma",
            proj_cup_desc: "Proyek analitik sepak bola tingkat lanjut yang meneliti rantai respons defensif dari momen tekanan awal lawan menggunakan pemodelan data spasial dan tracking event.",
            link_view_all_projects: "Lihat Seluruh Koleksi Proyek & Portofolio Lengkap (projects.html) &rarr;",

            proj_dw_1: "Mengembangkan arsitektur data warehouse terpusat untuk pelaporan bisnis terintegrasi dan konsolidasi data multi-sistem.",
            proj_dw_2: "Membangun alur ETL dan data warehouse yang memungkinkan pelaporan real-time serta dashboard analitik eksekutif.",

            proj_mkbd_1: "Merancang dan merekayasa sistem pelaporan berkala Modal Kerja Bersih Disesuaikan (MKBD) untuk monitoring rasio finansial secara akurat.",
            proj_mkbd_2: "Mengoptimalkan pemrosesan kalkulasi formula keuangan kompleks guna menjamin kepatuhan ketat terhadap standar regulasi pasar modal.",

            proj_screen_1: "Mendukung proses rekayasa ulang (re-engineering) modul entri data akuisisi pelanggan untuk memangkas waktu verifikasi dan meminimalkan galat input manual.",
            proj_screen_2: "Berkontribusi pada sinkronisasi komponen antarmuka pengguna serta integrasi validasi data backend.",

            proj_member_1: "Membantu pembangunan sistem manajemen keanggotaan terstruktur khusus segmen pasar keuangan.",
            proj_member_2: "Mengimplementasikan modul administrasi peran pengguna, audit log aktivitas transaksi, serta alur otorisasi berjenjang.",

            tab_sub_daily: "Visualisasi Data Interaktif",
            tab_desc_daily: "Dashboard analitik interaktif yang memetakan tren indikator harian dan parameter demografis utama di Indonesia secara visual dan informatif.",

            tab_sub_covid: "Visualisasi Data Epidemiologi",
            tab_desc_covid: "Visualisasi data multidimensi yang melacak laju sebaran infeksi, rasio kesembuhan, dan tren kurva statistik pandemi Covid-19.",

            tab_sub_games: "Visualisasi Analisis Pasar",
            tab_desc_games: "Eksplorasi visual performa komersial judul game PlayStation dunia berdasarkan genre, distribusi penjualan regional, dan generasi konsol.",

            tab_sub_mu: "Visualisasi Analitik Olahraga",
            tab_desc_mu: "Analisis statistik komparatif performa pemain, persebaran atribut fisik dan teknis, serta evaluasi metrik formasi skuad.",

            art_title: "Publikasi & Artikel Data Science & Machine Learning",
            art_desc: "Menulis 5+ artikel teknis mengenai implementasi machine learning klasifikasi gagal jantung, analisis tren streaming lagu Spotify Indonesia, serta model regresi logistik prediksi Titanic survival di Kaggle.",

            // Pengalaman Kerja
            sec_exp_title: "Pengalaman Kerja",
            role_ds: "Data Scientist",
            role_intern: "Engineer Intern",
            exp_sole_date: "Okt 2022 – Sekarang",
            exp_sole_0a: "Memimpin pengembangan backend & full-stack sistem ISS EV Charging serta sistem monitoring BBM armada alat berat (ISS Fuel) menggunakan NestJS dan Node.js.",
            exp_sole_0b: "Bertindak sebagai Data Engineer dalam proyek Medco Data Management untuk tata kelola data terpadu menggunakan ekosistem IBM Cloud Pak for Data.",
            exp_sole_1: "Mengembangkan layanan RESTful API tangguh dan terstandarisasi menggunakan Java dan framework Spring Boot guna menyokong kebutuhan backend perusahaan.",
            exp_sole_2: "Membangun serta memelihara antarmuka pengguna berbasis web modern menggunakan WaveMaker Studios dan ZKoss framework untuk pengalaman pengguna optimal.",
            exp_sole_3: "Merancang, menguji, dan mengeksekusi pipeline ETL (Extract, Transform, Load) menggunakan Talend Data Studio untuk mengintegrasikan aliran data bisnis berskala besar.",
            exp_sole_4: "Membuat laporan analitik dinamis dan dashboard interaktif menggunakan Power BI untuk mendukung pengambilan keputusan berbasis data.",

            exp_lab_date: "Jun 2022 – Sep 2022",
            exp_lab_1: "Menganalisis dataset statistik dan historis berskala besar untuk kebutuhan predictive modeling dan evaluasi performa kuantitatif.",
            exp_lab_2: "Mengembangkan model prediksi statistik menggunakan Python dan R guna memproyeksikan metrik dan estimasi probabilitas hasil.",
            exp_lab_3: "Berkolaborasi aktif merancang teknik pembersihan data, feature engineering, serta optimasi pipeline pelatihan model machine learning.",
            exp_lab_4: "Melakukan validasi data secara berkala dan mempresentasikan actionable insights kepada jajaran pemangku kepentingan (stakeholders).",

            exp_datains_date: "Sep 2021 – Jan 2022",
            exp_datains_1: "Mengonfigurasi dan mengoperasikan platform Apache Superset untuk perancangan visualisasi data eksploratif.",
            exp_datains_2: "Merancang skema relasional, memelihara integritas, dan mengoptimalkan performa kueri basis data PostgreSQL.",
            exp_datains_3: "Berkontribusi dalam riset penyesuaian fungsional dan kustomisasi kode pada ekosistem open-source Apache Superset.",

            // Pendidikan
            sec_edu_title: "Pendidikan",
            edu_degree: "D4 Teknik Informatika - Politeknik Negeri Jember",
            edu_grad: "Lulus 2022",
            edu_sub: "Sarjana Terapan Komputer (S.Tr.Kom) • 2018 – 2022",
            edu_meta: "<strong>Mata Kuliah Relevan:</strong> Rekayasa Perangkat Lunak, Struktur Data & Algoritma, Basis Data Relasional, Machine Learning, Data Analytics, Pemrograman Berorientasi Objek.",

            // Sertifikat
            sec_cert_title: "Sertifikat",
            cert_1: "Project Data Analysis for Retail: Sales Performance Report - DQLab",
            cert_2: "Agile Development using Scrum Framework",
            cert_3: "Python - Data Science Certification",

            // Footer
            footer_text: "&copy; 2026 Dodhy Kurnia Rahmantyo • CV ATS & Portofolio",

            // Articles Page
            art_doc_title: "Publikasi & Artikel - Dodhy Kurnia Rahmantyo",
            nav_back: "Kembali ke CV",
            nav_cv: "CV ATS",
            nav_articles: "Artikel",
            nav_projects: "Proyek",
            art_page_title: "Publikasi & Artikel Teknis",
            art_page_desc: "Kumpulan eksplorasi data, pemodelan prediktif machine learning, dan tutorial yang dipublikasikan di Medium.",
            art_read_btn: "Baca di Medium",
            footer_art_text: "&copy; 2026 Dodhy Kurnia Rahmantyo • Built with passion",
            art_1_title: "Analisis Faktor Jumlah Kunjungan Pariwisata DKI Jakarta",
            art_1_desc: "Menganalisis berbagai elemen pariwisata yang mempengaruhi jumlah kunjungan ke ibukota.",
            art_2_title: "Analisis Data Streaming Lagu Spotify Indonesia",
            art_2_desc: "Eksplorasi data musik populer Indonesia dan perilaku pendengar di Spotify.",
            art_3_title: "Memprediksi Gagal Jantung dengan ML (Part 2)",
            art_3_desc: "Lanjutan proses machine learning dan pemodelan prediktif untuk data klinis pasien gagal jantung.",
            art_4_title: "Memprediksi Gagal Jantung dengan ML (Part 1)",
            art_4_desc: "Pendahuluan: Membaca dataset dan persiapan preprocessing data sebelum pelatihan model prediksi.",
            art_5_title: "Prediksi “Titanic Survival” Dataset [Kaggle]",
            art_5_desc: "Sebuah tutorial praktis memodelkan Logistic Regression untuk tantangan legendaris dari Kaggle.",

            // Projects Page (projects.html)
            proj_doc_title: "Proyek & Portofolio - Dodhy Kurnia Rahmantyo",
            proj_page_heading: "Koleksi Proyek & Portofolio",
            proj_page_subheading: "Eksplorasi mendalam proyek enterprise aktif, riset data science & machine learning independen, proyek kompetisi, dan visualisasi data.",
            cat_enterprise_title: "Proyek Kantor & Enterprise (Solecode)",
            cat_enterprise_desc: "Pengembangan solusi backend berskala besar, sistem pemantauan IoT, dan arsitektur data enterprise.",
            cat_personal_title: "Proyek Pribadi & Riset R&D",
            cat_personal_desc: "Eksplorasi independen di bidang functional programming, pengujian pipeline data sintesis, dan ekosistem analitik esports.",
            cat_competition_title: "Proyek Kompetisi & Kolaborasi Riset",
            cat_competition_desc: "Analisis sains data olahraga kompetitif berbasis pelacakan spasial dan pergerakan taktis.",
            cat_tableau_title: "Visualisasi Data Interaktif (Tableau Public)",
            cat_tableau_desc: "Kumpulan dashboard analitik interaktif yang menyajikan data epidemiologi, demografi, olahraga, dan komersial.",
            badge_ongoing: "Sedang Berjalan",
            badge_completed: "Selesai",
            btn_view_portfolio: "Lihat Detail Portofolio",
            btn_view_github: "Lihat di GitHub",
            btn_view_tableau: "Buka di Tableau",
            proj_ev_desc: "Membangun sistem aplikasi backend dan antarmuka terintegrasi untuk manajemen ekosistem stasiun pengisian daya kendaraan listrik (Electric Vehicle Charging), otorisasi sesi pengisian, dan monitoring konsumsi daya secara real-time.",
            proj_fuel_desc: "Mengembangkan aplikasi pemantauan dan pengelolaan distribusi bahan bakar armada kendaraan berat industri guna mencegah anomali konsumsi BBM, audit penggunaan harian, dan kalkulasi efisiensi operasional.",
            proj_medco_desc: "Mengimplementasikan tata kelola data (data governance), integrasi multi-sumber data, dan otomatisasi alur pipeline data enterprise menggunakan ekosistem IBM Cloud Pak for Data untuk menghasilkan sumber data terpadu yang siap analitik.",
            proj_dw_desc: "Merancang arsitektur data warehouse enterprise untuk konsolidasi data multi-cabang, otomatisasi proses ETL harian, serta visualisasi indikator kinerja utama bisnis secara terpusat.",
            proj_mkbd_desc: "Pengembangan sistem kalkulasi dan pelaporan kepatuhan Modal Kerja Bersih Disesuaikan (MKBD) dengan validasi formula keuangan ketat sesuai standar regulasi pasar modal.",
            proj_screen_desc: "Rekayasa ulang antarmuka formulir data entry dan alur verifikasi data pelanggan untuk mengoptimalkan kecepatan akuisisi dan validasi data pengguna baru.",
            scrimmate_intro: "Ekosistem analitik dan persiapan tim esports komprehensif yang dirancang untuk mendukung pengambilan keputusan drafting berbasis data statistik dan kecerdasan buatan. Terbagi menjadi 5 fase terencana:",
            phase_1_desc: "Aplikasi drafting tim esports interaktif untuk simulasi skenario pick & ban (selesai di lingkungan lokal).",
            phase_2_desc: "Pipeline pengumpulan dan ingestion data historis draft pertandingan turnamen secara terstruktur.",
            phase_3_desc: "Ekstraksi otomatis statistik skor dan detail pertandingan dari tangkapan layar (screenshot end-game).",
            phase_4_desc: "Model machine learning prediksi probabilitas kemenangan tim per game dengan fitur murni hero draft.",
            phase_5_desc: "Riset variabel performa per role, perancangan matriks evaluasi, validasi data, dan aplikasi talent scouting.",
            proj_haskell_desc: "Eksplorasi penjaminan kualitas dan validasi integritas dataset memanfaatkan paradigma functional programming yang murni, matematis, dan type-safe di Haskell.",
            proj_dirty_desc: "Generator data sintesis yang menyuntikkan berbagai anomali realistis (missing values, typo, inkonsistensi tipe data, outlier) untuk stress-testing pipeline pembersihan data dan model ML."
        },

        en: {
            doc_title: "Dodhy Kurnia Rahmantyo - ATS CV & Portfolio",
            brand_badge: "ATS CV",
            btn_articles: "Articles",
            btn_projects: "Projects",
            btn_print: "Print",
            btn_download: "Download CV",
            header_role: "Full Stack Developer & Data Scientist",
            contact_location: "Jember, East Java, Indonesia",

            // Profile
            sec_profile_title: "Profile",
            sec_profile_text: "Full Stack Developer and Data Scientist with a Bachelor of Applied Science in Informatics Engineering from Politeknik Negeri Jember. Proven track record in enterprise web application development, backend architecture, data engineering pipelines, and predictive machine learning models. Experienced in engineering high-performance RESTful APIs with Java and Spring Boot, integrating automated data warehouse ETL pipelines using Talend Data Studio, and designing interactive executive dashboards with Power BI, Apache Superset, and Tableau. Dedicated to clean code practices, rapidly adaptable to emerging technologies, and committed to delivering efficient and reliable computational solutions.",

            // Core Skills
            sec_skills_title: "Core Skills",
            skill_1: "Java, Spring Boot & NestJS (Node.js)",
            skill_2: "RESTful API Architecture & Integration",
            skill_3: "WaveMaker Studios & ZKoss Framework",
            skill_4: "Frontend (HTML5, CSS3, JavaScript)",
            skill_5: "PostgreSQL Database & Query Optimization",
            skill_6: "ETL Pipelines & IBM Cloud Pak for Data",
            skill_7: "Data Science & Machine Learning (Python, R, Haskell)",
            skill_8: "Predictive Modeling & Statistical Analysis",
            skill_9: "Tableau Public & Interactive Dashboards",
            skill_10: "Power BI & Apache Superset Visualization",
            skill_11: "Problem Solving & Clean Code Principles",
            skill_12: "Agile Development & Scrum Framework",

            // Portfolio & Projects
            sec_projects_title: "Portfolio & Projects",
            projects_hint: "Click on any project title below to open the interactive portfolio / live dashboard in a new tab.",
            role_fullstack: "Full Stack Developer",
            role_support: "Support Developer",
            role_author: "Author",
            role_collab: "Research Collaborator",
            role_data_eng: "Data Engineer",
            role_creator: "Creator & Lead Researcher",
            cup_subtitle: "Analytics Cup 2 Competition • Collaboration with dkruma",
            proj_cup_desc: "Advanced sports analytics project modeling how initial pressure triggers defensive response chains in football using tracking event data.",
            link_view_all_projects: "View Full Interactive Projects & Portfolio Showcase (projects.html) &rarr;",

            proj_dw_1: "Architected a centralized data warehouse for enterprise-wide consolidated reporting and cross-system data integration.",
            proj_dw_2: "Engineered automated ETL workflows and data warehousing enabling real-time analytics and executive dashboards.",

            proj_mkbd_1: "Designed and engineered an Adjusted Net Working Capital (MKBD) periodic compliance reporting system for precise financial ratio monitoring.",
            proj_mkbd_2: "Optimized complex financial calculation algorithms to ensure strict compliance with capital market regulatory standards.",

            proj_screen_1: "Assisted in the re-engineering of the customer acquisition data entry module to streamline verification workflows and minimize manual input errors.",
            proj_screen_2: "Contributed to UI component synchronization and backend validation logic integration.",

            proj_member_1: "Contributed to developing a structured membership management system tailored for the financial market sector.",
            proj_member_2: "Implemented user role administration modules, transaction audit logs, and tiered authorization workflows.",

            tab_sub_daily: "Interactive Data Visualization",
            tab_desc_daily: "Interactive analytics dashboard mapping daily key indicators and demographic metrics across Indonesia in an intuitive visual format.",

            tab_sub_covid: "Epidemiological Data Visualization",
            tab_desc_covid: "Multidimensional data visualization tracking transmission rates, recovery ratios, and epidemiological statistical curves of Covid-19.",

            tab_sub_games: "Market Research Visualization",
            tab_desc_games: "Visual exploration of global PlayStation game sales performance categorized by genre, regional distribution, and console generations.",

            tab_sub_mu: "Sports Analytics Visualization",
            tab_desc_mu: "Comparative statistical analysis of player performance attributes, physical metrics distribution, and team tactical squad evaluations.",

            art_title: "Data Science & Machine Learning Technical Articles",
            art_desc: "Authored 5+ technical articles on machine learning for heart failure clinical classification, Spotify Indonesia music streaming analytics, and Logistic Regression on Kaggle's Titanic dataset.",

            // Work Experience
            sec_exp_title: "Professional Experience",
            role_ds: "Data Scientist",
            role_intern: "Engineer Intern",
            exp_sole_date: "Oct 2022 – Present",
            exp_sole_0a: "Leading backend and full-stack architecture for ISS EV Charging and Heavy Equipment Fuel Monitoring systems utilizing NestJS and Node.js.",
            exp_sole_0b: "Serving as Data Engineer on the Medco Data Management project for enterprise data governance using IBM Cloud Pak for Data.",
            exp_sole_1: "Engineered standardized, resilient RESTful API services using Java and Spring Boot framework to support enterprise backend systems.",
            exp_sole_2: "Built and maintained modern web interfaces utilizing WaveMaker Studios and ZKoss framework for optimized UX/UI performance.",
            exp_sole_3: "Designed, tested, and automated robust ETL pipelines using Talend Data Studio for large-scale enterprise data consolidation.",
            exp_sole_4: "Created dynamic analytics reports and interactive executive dashboards in Power BI to facilitate data-driven decisions.",

            exp_lab_date: "Jun 2022 – Sep 2022",
            exp_lab_1: "Analyzed extensive historical and statistical datasets for predictive modeling and quantitative performance benchmarking.",
            exp_lab_2: "Developed statistical predictive models using Python and R to project outcome metrics and probability estimations.",
            exp_lab_3: "Collaborated actively in refining data cleaning protocols, feature engineering, and optimizing ML model training pipelines.",
            exp_lab_4: "Conducted rigorous data validation and presented structured actionable insights to senior stakeholders.",

            exp_datains_date: "Sep 2021 – Jan 2022",
            exp_datains_1: "Configured and operated the Apache Superset platform for advanced exploratory data visualization.",
            exp_datains_2: "Designed relational database schemas, maintained integrity, and optimized query execution on PostgreSQL databases.",
            exp_datains_3: "Contributed to functional customization research and code modifications within the open-source Apache Superset ecosystem.",

            // Education
            sec_edu_title: "Education",
            edu_degree: "Bachelor of Applied Science in Informatics Engineering - Politeknik Negeri Jember",
            edu_grad: "Graduated 2022",
            edu_sub: "Bachelor of Applied Science (S.Tr.Kom) • 2018 – 2022",
            edu_meta: "<strong>Relevant Coursework:</strong> Software Engineering, Data Structures & Algorithms, Relational Databases, Machine Learning, Data Analytics, Object-Oriented Programming.",

            // Certifications
            sec_cert_title: "Certifications",
            cert_1: "Project Data Analysis for Retail: Sales Performance Report - DQLab",
            cert_2: "Agile Development using Scrum Framework",
            cert_3: "Python - Data Science Certification",

            // Footer
            footer_text: "&copy; 2026 Dodhy Kurnia Rahmantyo • ATS CV & Portfolio",

            // Articles Page
            art_doc_title: "Publications & Articles - Dodhy Kurnia Rahmantyo",
            nav_back: "Back to CV",
            nav_cv: "ATS CV",
            nav_articles: "Articles",
            nav_projects: "Projects",
            art_page_title: "Technical Publications & Articles",
            art_page_desc: "A collection of data explorations, predictive machine learning models, and tutorials published on Medium.",
            art_read_btn: "Read on Medium",
            footer_art_text: "&copy; 2026 Dodhy Kurnia Rahmantyo • Built with passion",
            art_1_title: "Factors Analysis of Tourism Visit Rates in DKI Jakarta",
            art_1_desc: "Analyzing various tourism factors influencing visitor influx to the capital city.",
            art_2_title: "Spotify Indonesia Song Streaming Data Analytics",
            art_2_desc: "Exploration of popular Indonesian music data and listener behavior patterns on Spotify.",
            art_3_title: "Predicting Heart Failure with Machine Learning (Part 2)",
            art_3_desc: "Continuation of the ML pipeline and predictive modeling for clinical heart failure patient datasets.",
            art_4_title: "Predicting Heart Failure with Machine Learning (Part 1)",
            art_4_desc: "Introduction: Dataset exploration and preprocessing prior to training prediction models.",
            art_5_title: "Titanic Survival Dataset Prediction [Kaggle]",
            art_5_desc: "A practical hands-on tutorial modeling Logistic Regression for Kaggle's classic dataset.",

            // Projects Page (projects.html)
            proj_doc_title: "Projects & Portfolio - Dodhy Kurnia Rahmantyo",
            proj_page_heading: "Projects & Portfolio Showcase",
            proj_page_subheading: "In-depth showcase of active enterprise solutions, independent data science & machine learning research, competition analytics, and dashboards.",
            cat_enterprise_title: "Enterprise & Office Projects (Solecode)",
            cat_enterprise_desc: "Large-scale backend engineering, IoT monitoring systems, and enterprise data architecture.",
            cat_personal_title: "Personal Projects & R&D Research",
            cat_personal_desc: "Independent exploration in functional programming, synthetic data pipeline benchmarking, and esports analytics.",
            cat_competition_title: "Competition Projects & Collaborative Research",
            cat_competition_desc: "Competitive sports data science modeling based on spatial tracking and tactical formations.",
            cat_tableau_title: "Interactive Data Visualizations (Tableau Public)",
            cat_tableau_desc: "Interactive dashboards exploring epidemiology, demographics, sports, and commercial statistics.",
            badge_ongoing: "Ongoing",
            badge_completed: "Completed",
            btn_view_portfolio: "View Portfolio Details",
            btn_view_github: "View on GitHub",
            btn_view_tableau: "Open in Tableau",
            proj_ev_desc: "Engineered backend and integrated interface systems for managing the EV Charging station ecosystem, session authorization, and real-time power consumption monitoring.",
            proj_fuel_desc: "Developed an industrial heavy equipment fuel monitoring and management application to detect fuel consumption anomalies, perform daily audits, and analyze fleet efficiency.",
            proj_medco_desc: "Implemented enterprise data governance, multi-source integration, and automated pipeline workflows using IBM Cloud Pak for Data to deliver centralized analytics-ready data.",
            proj_dw_desc: "Architected an enterprise data warehouse for multi-branch data consolidation, automated daily ETL processing, and centralized key performance indicator visualization.",
            proj_mkbd_desc: "Engineered calculation and reporting systems for Adjusted Net Working Capital (MKBD) compliance with rigorous financial formula verification conforming to capital market regulations.",
            proj_screen_desc: "Re-engineered user form interfaces and customer acquisition data verification pipelines to accelerate onboarding and validate incoming applicant records.",
            scrimmate_intro: "Comprehensive esports team preparation and analytics suite designed to support data-driven drafting decisions via statistical modeling and AI. Structured into 5 planned phases:",
            phase_1_desc: "Interactive esports team drafting application for simulating pick & ban scenarios (completed in local development).",
            phase_2_desc: "Automated pipeline for collecting and structuring historical tournament match draft data.",
            phase_3_desc: "Automated OCR extraction pipeline for parsing scoreboards and match details from post-game screenshots.",
            phase_4_desc: "Machine learning predictive model projecting game win probabilities purely using hero draft picks.",
            phase_5_desc: "In-depth research on role-specific performance variables, evaluation matrix design, validation, and talent scouting app.",
            proj_haskell_desc: "Exploration of dataset quality assurance and integrity validation leveraging Haskell's pure, mathematical, and type-safe functional programming paradigm.",
            proj_dirty_desc: "Synthetic data generator injecting realistic anomalies (missing values, typos, schema inconsistencies, outliers) for stress-testing data cleaning pipelines and ML models."
        }
    };

    // =========================================================================
    // Bilingual Switcher Logic
    // =========================================================================
    const btnLangId = document.getElementById('btn-lang-id');
    const btnLangEn = document.getElementById('btn-lang-en');
    let currentLang = localStorage.getItem('ats_cv_lang') || 'id';

    function setLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;
        document.documentElement.lang = lang;
        localStorage.setItem('ats_cv_lang', lang);

        // Update button active state
        if (btnLangId && btnLangEn) {
            if (lang === 'id') {
                btnLangId.classList.add('active');
                btnLangEn.classList.remove('active');
            } else {
                btnLangEn.classList.add('active');
                btnLangId.classList.remove('active');
            }
        }

        // Update all data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key] !== undefined) {
                if (el.tagName === 'TITLE') {
                    document.title = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });
    }

    if (btnLangId) {
        btnLangId.addEventListener('click', () => setLanguage('id'));
    }
    if (btnLangEn) {
        btnLangEn.addEventListener('click', () => setLanguage('en'));
    }

    // Initialize with saved language
    setLanguage(currentLang);

    // =========================================================================
    // Theme Toggle Functionality (Light mode default for authentic ATS paper)
    // =========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;
    const rootElement = document.documentElement;

    const savedTheme = localStorage.getItem('ats_cv_theme') || 'light';
    if (savedTheme === 'dark') {
        rootElement.classList.add('dark-mode');
        if (themeIcon) {
            themeIcon.classList.replace('bx-moon', 'bx-sun');
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            rootElement.classList.toggle('dark-mode');
            const isDark = rootElement.classList.contains('dark-mode');

            if (themeIcon) {
                if (isDark) {
                    themeIcon.classList.replace('bx-moon', 'bx-sun');
                    localStorage.setItem('ats_cv_theme', 'dark');
                } else {
                    themeIcon.classList.replace('bx-sun', 'bx-moon');
                    localStorage.setItem('ats_cv_theme', 'light');
                }
            }
        });
    }

    // =========================================================================
    // Print CV Button
    // =========================================================================
    const printBtn = document.getElementById('print-cv-btn');
    if (printBtn) {
        printBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.print();
        });
    }

    // =========================================================================
    // Download ATS CV as PDF using html2pdf.js
    // =========================================================================
    const downloadBtn = document.getElementById('download-cv-btn');

    function generatePDF() {
        const cvElement = document.getElementById('cv-content');
        if (!cvElement) return;

        const originalBtnContent = downloadBtn.innerHTML;
        const loadingText = currentLang === 'en' ? 'Processing...' : 'Memproses...';
        downloadBtn.innerHTML = `<i class='bx bx-loader-alt bx-spin'></i> <span>${loadingText}</span>`;
        downloadBtn.disabled = true;

        const filename = currentLang === 'en'
            ? 'Dodhy_Kurnia_Rahmantyo_CV_ATS_EN.pdf'
            : 'Dodhy_Kurnia_Rahmantyo_CV_ATS_ID.pdf';

        // 1. Temporarily remove dark mode for pure white paper PDF export
        const isDarkMode = rootElement.classList.contains('dark-mode');
        if (isDarkMode) {
            rootElement.classList.remove('dark-mode');
        }

        // 2. Scroll to top to ensure html2canvas captures entire document without offset
        window.scrollTo(0, 0);

        // Add exporting class for PDF styling
        cvElement.classList.add('exporting-pdf');

        // 3. Show phone number on the CV during export
        const phoneEl = cvElement.querySelector('.ats-phone-pdf-only');
        if (phoneEl) {
            phoneEl.style.setProperty('display', 'inline-flex', 'important');
        }

        // 4. Temporarily remove hyperlinks from the portfolio section for pure ATS plain text
        const projectLinks = cvElement.querySelectorAll('#portofolio-section a');
        const originalProjectHrefs = [];
        projectLinks.forEach((a, i) => {
            originalProjectHrefs[i] = a.getAttribute('href');
            a.removeAttribute('href');
            a.style.textDecoration = 'none';
            a.style.color = '#000000';
            a.style.border = 'none';
        });

        // 5. Temporarily remove link styling from contact bar
        const contactLinks = cvElement.querySelectorAll('.ats-contact-bar a');
        const originalContactHrefs = [];
        contactLinks.forEach((a, i) => {
            originalContactHrefs[i] = a.getAttribute('href');
            a.removeAttribute('href');
            a.style.textDecoration = 'none';
            a.style.color = '#000000';
        });

        const opt = {
            margin: [8, 8, 8, 8],
            filename: filename,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                letterRendering: true,
                scrollX: 0,
                scrollY: 0
            },
            jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: 'portrait'
            },
            pagebreak: { mode: 'css' }
        };

        function restoreOriginalState() {
            cvElement.classList.remove('exporting-pdf');

            // Restore phone number visibility
            if (phoneEl) {
                phoneEl.style.display = '';
            }
            // Restore portfolio links
            projectLinks.forEach((a, i) => {
                if (originalProjectHrefs[i]) {
                    a.setAttribute('href', originalProjectHrefs[i]);
                }
                a.style.textDecoration = '';
                a.style.color = '';
                a.style.border = '';
            });
            // Restore contact links
            contactLinks.forEach((a, i) => {
                if (originalContactHrefs[i]) {
                    a.setAttribute('href', originalContactHrefs[i]);
                }
                a.style.textDecoration = '';
                a.style.color = '';
            });
            // Restore dark mode
            if (isDarkMode) {
                rootElement.classList.add('dark-mode');
            }
            downloadBtn.innerHTML = originalBtnContent;
            downloadBtn.disabled = false;
        }

        html2pdf()
            .set(opt)
            .from(cvElement)
            .save()
            .then(() => {
                restoreOriginalState();
            })
            .catch((err) => {
                console.error('PDF export error:', err);
                restoreOriginalState();
                const errMsg = currentLang === 'en'
                    ? 'Error generating PDF. You can also print the page and choose "Save as PDF".'
                    : 'Terjadi kesalahan saat mengunduh PDF. Anda juga dapat mencetak halaman dan pilih "Save as PDF".';
                alert(errMsg);
            });
    }

    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            generatePDF();
        });
    }
});
