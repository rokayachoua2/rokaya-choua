import { useLanguage } from '../context/LanguageContext';

export default function Education() {
    const { t } = useLanguage();

    return (
        <section id="education">
            <div className="container">
                <div className="section-head">
                    <div>
                        <div className="pill">{t('edu.pill')}</div>
                        <h3>{t('edu.title')}</h3>
                    </div>
                </div>

                <div className="timeline">
                    <div className="t-item">
                        <div className="t-date">{t('edu.ofppt.date')}</div>
                        <div className="t-content">
                            <h4>{t('edu.ofppt.title')}</h4>
                            <p>{t('edu.ofppt.desc')}</p>
                            <div className="t-tags">
                                <span className="tag">Web</span><span className="tag">PHP</span><span className="tag">MySQL</span><span className="tag">React</span><span className="tag">Laravel</span>
                            </div>
                        </div>
                    </div>

                    <div className="t-item">
                        <div className="t-date">{t('edu.bac.date')}</div>
                        <div className="t-content">
                            <h4>{t('edu.bac.title')}</h4>
                            <p>{t('edu.bac.desc')}</p>
                            <div className="t-tags">
                                <span className="tag">Physique</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
