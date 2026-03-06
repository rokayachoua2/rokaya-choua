export default function Services() {
    return (
        <section id="services">
            <div className="container">
                <div className="section-head">
                    <div>
                        <div className="pill">Ce que je peux faire</div>
                        <h3>Services</h3>
                    </div>
                    {/* <p>
                        Je réalise des interfaces modernes, des sites dynamiques et des fonctionnalités back-end.
                        Objectif: un rendu propre, rapide et responsive.
                    </p> */}
                </div>

                <div className="grid">
                    <div className="card pad service">
                        <div className="top">
                            <div>
                                <h4>UI / Intégration</h4>
                                <small style={{ color: 'rgba(255,255,255,.6)' }}>HTML • CSS • Bootstrap</small>
                            </div>
                            <div className="icon">UI</div>
                        </div>
                        <p>Pages responsive, sections portfolio, landing pages, animations simples et design propre.</p>
                    </div>

                    <div className="card pad service">
                        <div className="top">
                            <div>
                                <h4>Web dynamique</h4>
                                <small style={{ color: 'rgba(255,255,255,.6)' }}>JavaScript</small>
                            </div>
                            <div className="icon">JS</div>
                        </div>
                        <p>Interactions (menu, modal, sliders), validation de formulaires, fetch API, composants UI.</p>
                    </div>

                    <div className="card pad service">
                        <div className="top">
                            <div>
                                <h4>Back-end & Base de données</h4>
                                <small style={{ color: 'rgba(255,255,255,.6)' }}>PHP • MySQL</small>
                            </div>
                            <div className="icon">BE</div>
                        </div>
                        <p>CRUD, authentification, gestion produits/commandes, dashboards admin, relations DB.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
