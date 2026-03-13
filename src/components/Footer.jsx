import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="container foot">
                <span>© <span id="year">{currentYear}</span> Rokaya Choua — Portfolio</span>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <a href="#home">{t('nav.home')}</a>
                    <a href="#projects">{t('nav.projects')}</a>
                    <a href="#contact">{t('nav.contact')}</a>
                </div>
            </div>
        </footer>
    );
}
