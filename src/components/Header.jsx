import { useBurgerMenu } from '../hooks/useBurgerMenu';
import { useScrollSpy } from '../hooks/useScrollSpy';
import CV from '../pdf/CV.pdf';
const SECTIONS = ['home', 'services', 'skills', 'education', 'experience', 'projects', 'contact'];

export default function Header() {
    const { isOpen, toggleMenu, closeMenu } = useBurgerMenu();
    const activeSection = useScrollSpy(SECTIONS);

    return (
        <header>
            <a className="brand" href="#home" onClick={closeMenu}>Rokaya Choua</a>

            <nav id="nav" className={isOpen ? 'show' : ''}>
                <a
                    className={activeSection === 'home' || activeSection === '' ? 'active' : ''}
                    href="#home"
                    onClick={closeMenu}
                >
                    Home
                </a>
                <a
                    className={activeSection === 'services' ? 'active' : ''}
                    href="#services"
                    onClick={closeMenu}
                >
                    Services
                </a>
                <a
                    className={activeSection === 'skills' ? 'active' : ''}
                    href="#skills"
                    onClick={closeMenu}
                >
                    Skills
                </a>
                <a
                    className={activeSection === 'education' ? 'active' : ''}
                    href="#education"
                    onClick={closeMenu}
                >
                    Education
                </a>
                <a
                    className={activeSection === 'experience' ? 'active' : ''}
                    href="#experience"
                    onClick={closeMenu}
                >
                    Experience
                </a>
                <a
                    className={activeSection === 'projects' ? 'active' : ''}
                    href="#projects"
                    onClick={closeMenu}
                >
                    Projects
                </a>
                <a
                    className={activeSection === 'contact' ? 'active' : ''}
                    href="#contact"
                    onClick={closeMenu}
                >
                    Contact
                </a>
                <a className="nav-cta" href={CV} download onClick={closeMenu}>Télécharger CV</a>
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
