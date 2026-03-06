import portfolio from '../assets/portfolio.png';
import wmcollection from '../assets/wmcollection.png';
import mondebijoux from '../assets/mondebijoux.png';
export default function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <div className="section-head">
                    <div>
                        <div className="pill">Portfolio</div>
                        <h3>Projects</h3>
                    </div>
                    {/* <p>Découvrez une sélection de mes récents travaux. J'aime concevoir des applications performantes, esthétiques et faciles à utiliser.</p> */}
                </div>

                <div className="grid">
                    <div className="card pad project">
                        <div className="thumb">
                         <img src={wmcollection} alt="wm_collection" fetchPriority="high" decoding="async" />

                        </div>
                        <h4>wm_collection (PHP)</h4>
                        <p>Site e-commerce avec panier, commandes et dashboard admin.</p>
                        <div className="t-tags" style={{ marginBottom: '12px' }}>
                            <span className="tag">PHP</span><span className="tag">MySQL</span><span className="tag">HTML</span><span className="tag">CSS</span><span className="tag">JS</span>
                        </div>
                        <div className="actions2">
                            <a className="btn primary" href="https://github.com/rokayachoua2/wm_collection" target="_blank" rel="noreferrer">GitHub</a>
                        </div>
                    </div>

                    <div className="card pad project">
                        <div className="thumb">
                         <img src={mondebijoux} alt="MondeBijoux" fetchPriority="high" decoding="async" />

                        </div>
                        <h4>MondeBijoux (Symfony)</h4>
                        <p>Admin dashboard, CRUD produits & catégories, validation formulaires, authentification & rôles utilisateurs.</p>
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
                        <p>Portfolio moderne avec sections, animations et responsive.</p>
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
