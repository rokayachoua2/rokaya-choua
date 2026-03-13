import React, { createContext, useState, useContext, useEffect } from 'react';

const translations = {
  fr: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'nav.downloadCV': 'Télécharger CV',

    // Hero
    'hero.badge': 'Disponible pour opportunités en développement web / collaboration',
    'hero.greeting': 'Hi, je suis ',
    'hero.role.1': 'Développement web Full stack',
    'hero.role.2': 'Front-end (HTML, CSS, JS)',
    'hero.role.3': 'Back-end (PHP, MySQL)',
    'hero.role.4': 'Disponible pour stage pre-embauche',
    'hero.desc': "Technicienne spécialisée en développement digital. Passionnée par le développement web, motivée et dotée d’une réelle volonté d’apprentissage, je souhaite intégrer un environnement professionnel stimulant afin de consolider mes compétences et enrichir mon expérience pratique.",
    'hero.btn.projects': 'Voir mes projets',
    'hero.btn.contact': 'Me contacter',
    'hero.stats.projects': 'Projets',

    // Services
    'services.pill': 'Ce que je peux faire',
    'services.title': 'Services',
    'services.ui.title': 'UI / Intégration',
    'services.ui.desc': 'Pages responsive, sections portfolio, landing pages, animations simples et design propre.',
    'services.js.title': 'Web dynamique',
    'services.js.desc': 'Interactions (menu, modal, sliders), validation de formulaires, fetch API, composants UI.',
    'services.be.title': 'Back-end & Base de données',
    'services.be.desc': 'CRUD, authentification, gestion produits/commandes, dashboards admin, relations DB.',

    // Skills
    'skills.pill': 'Compétences',
    'skills.title': 'Skills',
    'skills.personal.title': 'Compétences personnelles',
    'skills.personal.1': "Esprit d'équipe",
    'skills.personal.2': 'Gestion du stress',
    'skills.personal.3': 'Sens de responsabilité',
    'skills.personal.4': 'Adaptabilité',
    'skills.langs.title': 'Langues',
    'skills.langs.1': 'Arabe : Langue maternelle',
    'skills.langs.2': 'Français : Intermédiaire',
    'skills.langs.3': 'Anglais : Intermédiaire',
    'skills.langs.4': 'Allemand : B1 (Orale et ecrit)',
    'skills.tech': 'Technologies',
    'skills.btn.projects': 'Voir projets liés',
    'skills.expertise': "Domaines d'expertise",
    'skills.frontend': 'Front-end',
    'skills.backend': 'Back-end & Base de données',
    'skills.tools': 'Outils & Méthodologies',

    // Experience
    'exp.pill': 'Expériences',
    'exp.title': 'Experience',
    'exp.liberty.date': "fevrier 2025 - aujourd'hui",
    'exp.liberty.title': 'QA Testing intern',
    'exp.liberty.p1': 'Worked on testing a financial web and mobile application related to salary advance services.',
    'exp.liberty.p2': 'Executed functional and user flow tests (employee creation, approval workflow, salary advance requests, transactions and reports).',
    'exp.liberty.p3': 'Identified and reported defects in the UAT defect tracking sheet.',
    'exp.liberty.p4': 'Verified application behaviour using browser developer tools.',
    'exp.liberty.p5': 'Collaborated with developers to reproduce and track bugs.',
    'exp.pixcod.date': 'Août 2025',
    'exp.pixcod.title': 'Stage - Développement Web (Symfony)',
    'exp.pixcod.location': 'Nador, Maroc',
    'exp.pixcod.p1': "Développement d'une application e-commerce avec Symfony et Twig, intégrant une interface d'administration pour la gestion des produits et des catégories.",
    'exp.pixcod.p2': "Contribution à l'amélioration du tableau de bord admin, rendant la gestion du contenu plus rapide et intuitive pour l'équipe.",
    
    // Education
    'edu.pill': 'Parcours',
    'edu.title': 'Education',
    'edu.ofppt.date': '2024 – 2026',
    'edu.ofppt.title': 'OFPPT – Développement Digital (Web Full-Stack)',
    'edu.ofppt.desc': 'Modules: HTML/CSS/JS, PHP/MySQL, UML, React, Laravel.',
    'edu.bac.date': '2024',
    'edu.bac.title': 'Baccalauréat – Option science Physique',
    'edu.bac.desc': 'Lycée Nador. Option science Physique avec mention Bien .',

    // Projects
    'proj.pill': 'Portfolio',
    'proj.title': 'Projects',
    'proj.wm.desc': 'Site e-commerce avec panier, commandes et dashboard admin.',
    'proj.monde.desc': 'Admin dashboard, CRUD produits & catégories, validation formulaires, authentification & rôles utilisateurs.',
    'proj.port.desc': 'Portfolio moderne avec sections, animations et responsive.',

    // Contact
    'contact.pill': 'Contact',
    'contact.title': 'Travaillons ensemble',
    'contact.info.title': 'Infos',
    'contact.info.desc': 'Je suis ouverte à un stage PFE / pré-embauche. N’hésite pas à me contacter.',
    'contact.city': 'Ville',
    'contact.form.title': 'Envoyer un message',
    'contact.form.name': 'Votre nom',
    'contact.form.email': 'Votre email',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Votre message...',
    'contact.form.submit': 'Envoyer le message',
    'contact.form.sending': 'Envoi en cours...',
    'contact.form.success': 'Message envoyé avec succès !',
    'contact.form.error': "Une erreur est survenue lors de l'envoi."
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.downloadCV': 'Download CV',

    // Hero
    'hero.badge': 'Available for web development opportunities / collaboration',
    'hero.greeting': "Hi, I'm ",
    'hero.role.1': 'Full Stack Web Development',
    'hero.role.2': 'Front-end (HTML, CSS, JS)',
    'hero.role.3': 'Back-end (PHP, MySQL)',
    'hero.role.4': 'Available for pre-employment internship',
    'hero.desc': "Specialized technician in digital development. Passionate about web development, motivated, and possessing a genuine desire to learn, I wish to join a stimulating professional environment to consolidate my skills and enrich my practical experience.",
    'hero.btn.projects': 'View my projects',
    'hero.btn.contact': 'Contact me',
    'hero.stats.projects': 'Projects',

    // Services
    'services.pill': 'What I can do',
    'services.title': 'Services',
    'services.ui.title': 'UI / Integration',
    'services.ui.desc': 'Responsive pages, portfolio sections, landing pages, simple animations, and clean design.',
    'services.js.title': 'Dynamic Web',
    'services.js.desc': 'Interactions (menu, modal, sliders), form validation, API fetch, UI components.',
    'services.be.title': 'Back-end & Database',
    'services.be.desc': 'CRUD, authentication, product/order management, admin dashboards, DB relations.',

    // Skills
    'skills.pill': 'Skills',
    'skills.title': 'Skills',
    'skills.personal.title': 'Personal Skills',
    'skills.personal.1': 'Team spirit',
    'skills.personal.2': 'Stress management',
    'skills.personal.3': 'Sense of responsibility',
    'skills.personal.4': 'Adaptability',
    'skills.langs.title': 'Languages',
    'skills.langs.1': 'Arabic: Native language',
    'skills.langs.2': 'French: Intermediate',
    'skills.langs.3': 'English: Intermediate',
    'skills.langs.4': 'German: B1 (Oral and written)',
    'skills.tech': 'Technologies',
    'skills.btn.projects': 'View related projects',
    'skills.expertise': 'Areas of Expertise',
    'skills.frontend': 'Front-end',
    'skills.backend': 'Back-end & Database',
    'skills.tools': 'Tools & Methodologies',

    // Experience
    'exp.pill': 'Experiences',
    'exp.title': 'Experience',
    'exp.liberty.date': 'Feb 2025 - Present',
    'exp.liberty.title': 'QA Testing intern',
    'exp.liberty.p1': 'Worked on testing a financial web and mobile application related to salary advance services.',
    'exp.liberty.p2': 'Executed functional and user flow tests (employee creation, approval workflow, salary advance requests, transactions and reports).',
    'exp.liberty.p3': 'Identified and reported defects in the UAT defect tracking sheet.',
    'exp.liberty.p4': 'Verified application behaviour using browser developer tools.',
    'exp.liberty.p5': 'Collaborated with developers to reproduce and track bugs.',
    'exp.pixcod.date': 'August 2025',
    'exp.pixcod.title': 'Internship - Web Development (Symfony)',
    'exp.pixcod.location': 'Nador, Morocco',
    'exp.pixcod.p1': 'Developed an e-commerce application with Symfony and Twig, integrating an administration interface for product and category management.',
    'exp.pixcod.p2': 'Contributed to improving the admin dashboard, making content management faster and more intuitive for the team.',
    
    // Education
    'edu.pill': 'Background',
    'edu.title': 'Education',
    'edu.ofppt.date': '2024 – 2026',
    'edu.ofppt.title': 'OFPPT – Digital Development (Full-Stack Web)',
    'edu.ofppt.desc': 'Modules: HTML/CSS/JS, PHP/MySQL, UML, React, Laravel.',
    'edu.bac.date': '2024',
    'edu.bac.title': 'Baccalaureate – Physical Sciences Option',
    'edu.bac.desc': 'Lycée Nador. Physical Sciences option with honors.',

    // Projects
    'proj.pill': 'Portfolio',
    'proj.title': 'Projects',
    'proj.wm.desc': 'E-commerce site with cart, orders, and admin dashboard.',
    'proj.monde.desc': 'Admin dashboard, product & category CRUD, form validation, authentication & user roles.',
    'proj.port.desc': 'Modern portfolio with sections, animations, and responsiveness.',

    // Contact
    'contact.pill': 'Contact',
    'contact.title': "Let's work together",
    'contact.info.title': 'Info',
    'contact.info.desc': 'I am open to a PFE internship / pre-employment. Feel free to contact me.',
    'contact.city': 'City',
    'contact.form.title': 'Send a message',
    'contact.form.name': 'Your name',
    'contact.form.email': 'Your email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Your message...',
    'contact.form.submit': 'Send message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.error': 'An error occurred while sending.'
  },
  de: {
    // Header
    'nav.home': 'Startseite',
    'nav.services': 'Dienste',
    'nav.skills': 'Fähigkeiten',
    'nav.education': 'Bildung',
    'nav.experience': 'Erfahrung',
    'nav.projects': 'Projekte',
    'nav.contact': 'Kontakt',
    'nav.downloadCV': 'Lebenslauf herunterladen',

    // Hero
    'hero.badge': 'Verfügbar für Webentwicklungschancen / Zusammenarbeit',
    'hero.greeting': 'Hallo, ich bin ',
    'hero.role.1': 'Full-Stack Webentwicklung',
    'hero.role.2': 'Frontend (HTML, CSS, JS)',
    'hero.role.3': 'Backend (PHP, MySQL)',
    'hero.role.4': 'Verfügbar für Webentwicklungschancen',
    'hero.desc': "Spezialisierte Technikerin für digitale Entwicklung. Mit Leidenschaft für Webentwicklung, motiviert und mit dem aufrichtigen Wunsch zu lernen, möchte ich in ein anregendes professionelles Umfeld eintreten, um meine Fähigkeiten zu festigen und meine praktische Erfahrung zu bereichern.",
    'hero.btn.projects': 'Meine Projekte ansehen',
    'hero.btn.contact': 'Kontaktiere mich',
    'hero.stats.projects': 'Projekte',

    // Services
    'services.pill': 'Was ich tun kann',
    'services.title': 'Dienstleistungen',
    'services.ui.title': 'UI / Integration',
    'services.ui.desc': 'Responsive Seiten, Portfolio-Bereiche, Landing-Pages, einfache Animationen und sauberes Design.',
    'services.js.title': 'Dynamisches Web',
    'services.js.desc': 'Interaktionen (Menü, Modal, Slider), Formularvalidierung, API-Fetch, UI-Komponenten.',
    'services.be.title': 'Backend & Datenbank',
    'services.be.desc': 'CRUD, Authentifizierung, Produkt-/Bestellverwaltung, Admin-Dashboards, DB-Beziehungen.',

    // Skills
    'skills.pill': 'Kompetenzen',
    'skills.title': 'Fähigkeiten',
    'skills.personal.title': 'Persönliche Fähigkeiten',
    'skills.personal.1': 'Teamgeist',
    'skills.personal.2': 'Stressbewältigung',
    'skills.personal.3': 'Verantwortungsbewusstsein',
    'skills.personal.4': 'Anpassungsfähigkeit',
    'skills.langs.title': 'Sprachen',
    'skills.langs.1': 'Arabisch: Muttersprache',
    'skills.langs.2': 'Französisch: Mittelstufe',
    'skills.langs.3': 'Englisch: Mittelstufe',
    'skills.langs.4': 'Deutsch: B1 (Mündlich und schriftlich)',
    'skills.tech': 'Technologien',
    'skills.btn.projects': 'Zugehörige Projekte ansehen',
    'skills.expertise': 'Fachgebiete',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend & Datenbank',
    'skills.tools': 'Werkzeuge & Methoden',

    // Experience
    'exp.pill': 'Erfahrungen',
    'exp.title': 'Erfahrung',
    'exp.liberty.date': 'Februar 2025 - Heute',
    'exp.liberty.title': 'QA-Testing Praktikantin',
    'exp.liberty.p1': 'Arbeitete an der Qualitätssicherung einer Finanz-Web- und Mobile-Anwendung im Bereich Gehaltsvorschüsse.',
    'exp.liberty.p2': 'Führte funktionale und User-Flow-Tests durch (Mitarbeiteranlage, Freigabe-Workflow, Gehaltsvorschussanfragen, Transaktionen und Berichte).',
    'exp.liberty.p3': 'Identifizierte und meldete Fehler in der UAT-Fehlerverfolgungsliste.',
    'exp.liberty.p4': 'Überprüfte das Anwendungsverhalten mit Browser-Entwicklertools.',
    'exp.liberty.p5': 'Arbeitete mit Entwicklern zusammen, um Bugs zu reproduzieren und zu verfolgen.',
    'exp.pixcod.date': 'August 2025',
    'exp.pixcod.title': 'Praktikum - Webentwicklung (Symfony)',
    'exp.pixcod.location': 'Nador, Marokko',
    'exp.pixcod.p1': 'Entwickelte eine E-Commerce-Anwendung mit Symfony und Twig, einschließlich einer Administrationsoberfläche für Produkt- und Kategorienverwaltung.',
    'exp.pixcod.p2': 'Trug zur Verbesserung des Admin-Dashboards bei und machte die Inhaltsverwaltung für das Team schneller und intuitiver.',
    
    // Education
    'edu.pill': 'Werdegang',
    'edu.title': 'Bildung',
    'edu.ofppt.date': '2024 – 2026',
    'edu.ofppt.title': 'OFPPT – Digitale Entwicklung (Full-Stack Web)',
    'edu.ofppt.desc': 'Module: HTML/CSS/JS, PHP/MySQL, UML, React, Laravel.',
    'edu.bac.date': '2024',
    'edu.bac.title': 'Abitur – Option Physikalische Wissenschaften',
    'edu.bac.desc': 'Lycée Nador. Option Physikalische Wissenschaften mit Auszeichnung.',

    // Projects
    'proj.pill': 'Portfolio',
    'proj.title': 'Projekte',
    'proj.wm.desc': 'E-Commerce-Website mit Warenkorb, Bestellungen und Admin-Dashboard.',
    'proj.monde.desc': 'Admin-Dashboard, CRUD für Produkte & Kategorien, Formularvalidierung, Authentifizierung & Benutzerrollen.',
    'proj.port.desc': 'Modernes Portfolio mit Abschnitten, Animationen und Responsive-Design.',

    // Contact
    'contact.pill': 'Kontakt',
    'contact.title': 'Lass uns zusammenarbeiten',
    'contact.info.title': 'Infos',
    'contact.info.desc': 'Ich bin offen für ein PFE-Praktikum / eine Vorbeschäftigung. Zögere nicht, mich zu kontaktieren.',
    'contact.city': 'Stadt',
    'contact.form.title': 'Eine Nachricht senden',
    'contact.form.name': 'Dein Name',
    'contact.form.email': 'Deine E-Mail',
    'contact.form.subject': 'Betreff',
    'contact.form.message': 'Deine Nachricht...',
    'contact.form.submit': 'Nachricht senden',
    'contact.form.sending': 'Senden...',
    'contact.form.success': 'Nachricht erfolgreich gesendet!',
    'contact.form.error': 'Beim Senden ist ein Fehler aufgetreten.'
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr'); // Default to French as requested

  // Automatically load language from localStorage if available
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
