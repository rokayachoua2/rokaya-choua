export default function Skills() {
    return (
        <section id="skills">
            <div className="container">
                <div className="section-head">
                    <div>
                        <div className="pill">Compétences</div>
                        <h3>Skills</h3>
                    </div>
                    {/* <p>Compétences personnelles, techniques et linguistiques mises en avant dans mon CV. Vous y trouverez un aperçu des outils et technologies que j'utilise ainsi que mes savoir-faire interpersonnels.</p> */}
                </div>

                <div className="grid">
                    <div className="card pad">
                        <h4 style={{ marginBottom: '12px' }}>Compétences personnelles</h4>
                        <ul style={{paddingLeft: '16px', marginBottom: '20px'}}>
                            <li>Esprit d'équipe</li>
                            <li>Gestion du stress</li>
                            <li>Sens de responsabilité</li>
                            <li>Adaptabilité</li>
                        </ul>
                    </div>
                    <div className="card pad">
                        <h4 style={{ marginBottom: '12px' }}>Langues</h4>
                        <ul style={{paddingLeft: '16px', marginBottom: '20px'}}>
                            <li>Arabe : Langue maternelle</li>
                            <li>Français : Intermédiaire</li>
                            <li>Anglais : Intermédiaire</li>
                            <li>Allemand : B1 (Orale et ecrit)</li>
                        </ul>
                    </div>
                    <div className="card pad">
                        <h4 style={{ marginBottom: '12px' }}>Technologies</h4>
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
                        <a className="btn" href="#projects">Voir projets liés</a>
                    </div>

                    <div className="card pad">
                        <h4 style={{ marginBottom: '12px' }}>Domaines d'expertise</h4>
                        <div className="skill-list" style={{ marginBottom: '20px' }}>
                            <div style={{ width: '100%' }}>
                                <strong
                                    style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--accent)' }}>Front-end</strong>
                                <span className="chip">HTML5</span>
                                <span className="chip">CSS3</span>
                                <span className="chip">JavaScript (ES6+)</span>
                                <span className="chip">Bootstrap</span>
                                <span className="chip">React</span>
                            </div>
                        </div>
                        <div className="skill-list" style={{ marginBottom: '20px' }}>
                            <div style={{ width: '100%' }}>
                                <strong style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--accent)' }}>Back-end & Base de données</strong>
                                <span className="chip">PHP 8</span>
                                <span className="chip">MySQL</span>
                                <span className="chip">Laravel</span>
                                <span className="chip">Architecture MVC</span>
                            </div>
                        </div>
                        <div className="skill-list">
                            <div style={{ width: '100%' }}>
                                <strong style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--accent)' }}>Outils & Méthodologies</strong>
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
