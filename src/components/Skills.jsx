import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
    const { t } = useLanguage();

    return (
        <section id="skills">
            <div className="container">
                <div className="section-head">
                    <div>
                        <div className="pill">{t('skills.pill')}</div>
                        <h3>{t('skills.title')}</h3>
                    </div>
                </div>

                <div className="grid">
                    <div className="card pad">
                        <h4 style={{ marginBottom: '12px' }}>{t('skills.personal.title')}</h4>
                        <ul style={{paddingLeft: '16px', marginBottom: '20px'}}>
                            <li>{t('skills.personal.1')}</li>
                            <li>{t('skills.personal.2')}</li>
                            <li>{t('skills.personal.3')}</li>
                            <li>{t('skills.personal.4')}</li>
                        </ul>
                    </div>
                    <div className="card pad">
                        <h4 style={{ marginBottom: '12px' }}>{t('skills.langs.title')}</h4>
                        <ul style={{paddingLeft: '16px', marginBottom: '20px'}}>
                            <li>{t('skills.langs.1')}</li>
                            <li>{t('skills.langs.2')}</li>
                            <li>{t('skills.langs.3')}</li>
                            <li>{t('skills.langs.4')}</li>
                        </ul>
                    </div>
                    <div className="card pad">
                        <h4 style={{ marginBottom: '12px' }}>{t('skills.tech')}</h4>
                        <div className="skill-list">
                            <span className="chip">HTML5</span>
                            <span className="chip">CSS3</span>
                            <span className="chip">Bootstrap</span>
                            <span className="chip">JavaScript</span>
                            <span className="chip">PHP</span>
                            <span className="chip">MySQL</span>
                            <span className="chip">NoSQL</span>
                            <span className="chip">Git / GitHub</span>
                            <span className="chip">UML</span>
                            <span className="chip">Agile / Scrum</span>
                            <span className="chip">React / Laravel</span>
                        </div>
                        <div style={{ height: '14px' }}></div>
                        <a className="btn" href="#projects">{t('skills.btn.projects')}</a>
                    </div>

                    <div className="card pad">
                        <h4 style={{ marginBottom: '12px' }}>{t('skills.expertise')}</h4>
                        <div className="skill-list" style={{ marginBottom: '20px' }}>
                            <div style={{ width: '100%' }}>
                                <strong
                                    style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--accent)' }}>{t('skills.frontend')}</strong>
                                <span className="chip">HTML5</span>
                                <span className="chip">CSS3</span>
                                <span className="chip">JavaScript (ES6+)</span>
                                <span className="chip">Bootstrap</span>
                                <span className="chip">React</span>
                            </div>
                        </div>
                        <div className="skill-list" style={{ marginBottom: '20px' }}>
                            <div style={{ width: '100%' }}>
                                <strong style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--accent)' }}>{t('skills.backend')}</strong>
                                <span className="chip">PHP 8</span>
                                <span className="chip">MySQL</span>
                                <span className="chip">Laravel</span>
                                <span className="chip">Architecture MVC</span>
                            </div>
                        </div>
                        <div className="skill-list">
                            <div style={{ width: '100%' }}>
                                <strong style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--accent)' }}>{t('skills.tools')}</strong>
                                <span className="chip">Git / GitHub</span>
                                <span className="chip">Méthode Agile Scrum</span>
                                <span className="chip">UML</span>
                                <span className="chip">Figma</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
