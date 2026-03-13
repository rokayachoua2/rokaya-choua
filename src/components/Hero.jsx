import { useTypingEffect } from '../hooks/useTypingEffect';
import { useLanguage } from '../context/LanguageContext';
import imgPlaceholder from '../assets/img.png';

const GITHUB_URL = "https://github.com/rokaya";
const LINKEDIN_URL = "https://www.linkedin.com/in/rokaya";

export default function Hero() {
    const { t } = useLanguage();

    const ROLES = [
        t('hero.role.1'),
        t('hero.role.2'),
        t('hero.role.3'),
        t('hero.role.4')
    ];

    const typedText = useTypingEffect(ROLES);

    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <div className="badge" aria-label="Statut">{t('hero.badge')}</div>
                <h1>{t('hero.greeting')}<span className="highlight">Rokaya</span></h1>

                <div className="role" aria-live="polite">
                    <span className="typing" id="typing">{typedText}</span>
                    <span className="caret" aria-hidden="true">|</span>
                </div>

                <p className="desc">
                    {t('hero.desc')}
                </p>

                <div className="actions">
                    <a className="btn primary" href="#projects">{t('hero.btn.projects')}</a>
                    <a className="btn" href="#contact">{t('hero.btn.contact')}</a>
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
                    <div className="item"><strong>+10</strong><span>{t('hero.stats.projects')}</span></div>
                    <div className="item"><strong>Frontend</strong><span>HTML/CSS/JS/React</span></div>
                    <div className="item"><strong>Backend</strong><span>PHP/MySQL/Laravel</span></div>
                </div>
            </div>
        </section>
    );
}
