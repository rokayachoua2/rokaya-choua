import { useLanguage } from '../context/LanguageContext';

export default function Services() {
    const { t } = useLanguage();

    return (
        <section id="services">
            <div className="container">
                <div className="section-head">
                    <div>
                        <div className="pill">{t('services.pill')}</div>
                        <h3>{t('services.title')}</h3>
                    </div>
                </div>

                <div className="grid">
                    <div className="card pad service">
                        <div className="top">
                            <div>
                                <h4>{t('services.ui.title')}</h4>
                                <small style={{ color: 'rgba(255,255,255,.6)' }}>HTML • CSS • Bootstrap</small>
                            </div>
                            <div className="icon">UI</div>
                        </div>
                        <p>{t('services.ui.desc')}</p>
                    </div>

                    <div className="card pad service">
                        <div className="top">
                            <div>
                                <h4>{t('services.js.title')}</h4>
                                <small style={{ color: 'rgba(255,255,255,.6)' }}>JavaScript</small>
                            </div>
                            <div className="icon">JS</div>
                        </div>
                        <p>{t('services.js.desc')}</p>
                    </div>

                    <div className="card pad service">
                        <div className="top">
                            <div>
                                <h4>{t('services.be.title')}</h4>
                                <small style={{ color: 'rgba(255,255,255,.6)' }}>PHP • MySQL</small>
                            </div>
                            <div className="icon">BE</div>
                        </div>
                        <p>{t('services.be.desc')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
