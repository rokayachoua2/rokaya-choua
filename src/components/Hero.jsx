import { useTypingEffect } from '../hooks/useTypingEffect';
import imgPlaceholder from '../assets/img.png';

const ROLES = [
    "Développement web Full stack",
    "Front-end (HTML, CSS, JS)",
    "Back-end (PHP, MySQL)",
    "Disponible pour stage PFE"
];

const GITHUB_URL = "https://github.com/rokaya";
const LINKEDIN_URL = "https://www.linkedin.com/in/rokaya";

export default function Hero() {
    const typedText = useTypingEffect(ROLES);

    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <div className="badge" aria-label="Statut">Disponible pour opportunités en développement web / collaboration</div>
                <h1>Hi, je suis <span className="highlight">Rokaya</span></h1>

                <div className="role" aria-live="polite">
                    <span className="typing" id="typing">{typedText}</span>
                    <span className="caret" aria-hidden="true">|</span>
                </div>

                <p className="desc">
                    Technicienne spécialisée en développement digital, en cours de formation, je suis à la recherche d'un stage de fin d'études (PFE). Passionnée par le développement web, motivée et dotée d’une réelle volonté d’apprentissage, je souhaite intégrer un environnement professionnel stimulant afin de consolider mes compétences et enrichir mon expérience pratique.
                </p>

                <div className="actions">
                    <a className="btn primary" href="#projects">Voir mes projets</a>
                    <a className="btn" href="#contact">Me contacter</a>
                </div>

                <div className="social">
                    <a href="https://www.linkedin.com/in/rokaya-choua-0a9ab6359/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
                    <a href="https://github.com/rokayachoua2" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
                </div>
            </div>

            <div className="hero-card">
                <div className="hero-card-top">
                    <div className="photo-wrap">
                        <img src={imgPlaceholder} alt="Portrait de Rokaya" fetchPriority="high" decoding="async" />
                    </div>
                </div>
                <div className="mini">
                    <div className="item"><strong>+10</strong><span>Projets</span></div>
                    <div className="item"><strong>Frontend</strong><span>HTML/CSS/JS/React</span></div>
                    <div className="item"><strong>Backend</strong><span>PHP/MySQL/Laravel</span></div>
                </div>
            </div>
        </section>
    );
}
