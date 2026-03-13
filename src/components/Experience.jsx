import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
    const { t } = useLanguage();

    return (
        <section id="experience">
            <div className="container">
                <div className="section-head">
                    <div>
                        <div className="pill">{t('exp.pill')}</div>
                        <h3>{t('exp.title')}</h3>
                    </div>
                </div>

                <div className="timeline">
                    <div className="t-item">
                        <div className="t-date">{t('exp.liberty.date')}</div>
                        <div className="t-content">
                            <h4>{t('exp.liberty.title')}</h4>
                            <p>
                                <strong>LibertyPay</strong> <br />
                                &bull; {t('exp.liberty.p1')}
                                <br />
                                &bull; {t('exp.liberty.p2')}
                                <br />
                                &bull; {t('exp.liberty.p3')}
                                <br />
                                &bull; {t('exp.liberty.p4')}
                                <br />
                                &bull; {t('exp.liberty.p5')}
                            </p>
                            <div className="t-tags">
                                <span className="tag">QA Testing</span><span className="tag">UAT Testing</span><span className="tag">Bug Tracking</span><span className="tag">Web Application Testing</span><span className="tag">Quality Assurance (QA)</span>
                            </div>
                        </div>
                    </div>                    
                    <div className="t-item">
                        <div className="t-date">{t('exp.pixcod.date')}</div>
                        <div className="t-content">
                            <h4>{t('exp.pixcod.title')}</h4>
                            <p>
                                <strong>Pixcod Agency</strong> &bull; {t('exp.pixcod.location')}<br />
                                &bull; {t('exp.pixcod.p1')}<br />
                                &bull; {t('exp.pixcod.p2')}
                            </p>
                            <div className="t-tags">
                                <span className="tag">Symfony</span><span className="tag">Twig</span><span className="tag">PHP</span><span className="tag">e-commerce</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
