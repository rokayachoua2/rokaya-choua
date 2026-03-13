import { useLanguage } from '../context/LanguageContext';
import portfolio from '../assets/portfolio.png';
import wmcollection from '../assets/wmcollection.png';
import mondbijoux from '../assets/mondbijoux.png';

export default function Projects() {
    const { t } = useLanguage();

    return (
        <section id="projects">
            <div className="container">
                <div className="section-head">
                    <div>
                        <div className="pill">{t('proj.pill')}</div>
                        <h3>{t('proj.title')}</h3>
                    </div>
                </div>

                <div className="grid">
                    <div className="card pad project">
                        <div className="thumb">
                         <img src={wmcollection} alt="wm_collection" fetchPriority="high" decoding="async" />

                        </div>
                        <h4>wm_collection (PHP)</h4>
                        <p>{t('proj.wm.desc')}</p>
                        <div className="t-tags" style={{ marginBottom: '12px' }}>
                            <span className="tag">PHP</span><span className="tag">MySQL</span><span className="tag">HTML</span><span className="tag">CSS</span><span className="tag">JS</span>
                        </div>
                        <div className="actions2">
                            <a className="btn primary" href="https://github.com/rokayachoua2/wm_collection" target="_blank" rel="noreferrer">GitHub</a>
                        </div>
                    </div>

                    <div className="card pad project">
                        <div className="thumb">
                         <img src={mondbijoux} alt="MondeBijoux" fetchPriority="high" decoding="async" />

                        </div>
                        <h4>MondeBijoux (Symfony)</h4>
                        <p>{t('proj.monde.desc')}</p>
                        <div className="t-tags" style={{ marginBottom: '12px' }}>
                            <span className="tag">Symfony</span>
                        </div>
                        <div className="actions2">
                            <a className="btn primary" href="https://github.com/rokayachoua2/MondeBijoux" target="_blank" rel="noreferrer">GitHub</a>
                        </div>
                    </div>

                    <div className="card pad project">
                        <div className="thumb">
                         <img src={portfolio} alt="Portrait de Rokaya" fetchPriority="high" decoding="async" />
                            
                        </div>
                        <h4>Portfolio  </h4>
                        <p>{t('proj.port.desc')}</p>
                        <div className="t-tags" style={{ marginBottom: '12px' }}>
                            <span className="tag">HTML</span><span className="tag">CSS</span><span className="tag">JS</span>
                        </div>
                        <div className="actions2">
                            <a className="btn primary" href="https://github.com/rokayachoua2/portfolio" target="_blank" rel="noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
