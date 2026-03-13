import { useBurgerMenu } from '../hooks/useBurgerMenu';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useLanguage } from '../context/LanguageContext';
import CV from '../pdf/CV.pdf';
const SECTIONS = ['home', 'services', 'skills', 'education', 'experience', 'projects', 'contact'];

export default function Header() {
    const { isOpen, toggleMenu, closeMenu } = useBurgerMenu();
    const activeSection = useScrollSpy(SECTIONS);
    const { language, changeLanguage, t } = useLanguage();

    const handleLanguageChange = (e) => {
        changeLanguage(e.target.value);
    };

    return (
        <header>
            <a className="brand" href="#home" onClick={closeMenu}>Rokaya Choua</a>

            <nav id="nav" className={isOpen ? 'show' : ''}>
                <a
                    className={activeSection === 'home' || activeSection === '' ? 'active' : ''}
                    href="#home"
                    onClick={closeMenu}
                >
                    {t('nav.home')}
                </a>
                <a
                    className={activeSection === 'services' ? 'active' : ''}
                    href="#services"
                    onClick={closeMenu}
                >
                    {t('nav.services')}
                </a>
                <a
                    className={activeSection === 'skills' ? 'active' : ''}
                    href="#skills"
                    onClick={closeMenu}
                >
                    {t('nav.skills')}
                </a>
                <a
                    className={activeSection === 'education' ? 'active' : ''}
                    href="#education"
                    onClick={closeMenu}
                >
                    {t('nav.education')}
                </a>
                <a
                    className={activeSection === 'experience' ? 'active' : ''}
                    href="#experience"
                    onClick={closeMenu}
                >
                    {t('nav.experience')}
                </a>
                <a
                    className={activeSection === 'projects' ? 'active' : ''}
                    href="#projects"
                    onClick={closeMenu}
                >
                    {t('nav.projects')}
                </a>
                <a
                    className={activeSection === 'contact' ? 'active' : ''}
                    href="#contact"
                    onClick={closeMenu}
                >
                    {t('nav.contact')}
                </a>

                <select className="lang-select" value={language} onChange={handleLanguageChange}>
                    <option value="fr">FR</option>
                    <option value="en">EN</option>
                    <option value="de">DE</option>
                </select>

                <a className="nav-cta" href={CV} download onClick={closeMenu}>{t('nav.downloadCV')}</a>
            </nav>

            <button
                className="burger"
                id="burger"
                aria-label="Menu"
                onClick={toggleMenu}
            >
                <span></span>
            </button>
        </header>
    );
}
