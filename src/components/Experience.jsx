export default function Experience() {
    return (
        <section id="experience">
            <div className="container">
                <div className="section-head">
                    <div>
                        <div className="pill">Expériences</div>
                        <h3>Experience</h3>
                    </div>
                    {/* <p>Un aperçu de mon parcours professionnel, de mes stages et des projets marquants réalisés en équipe ou en autonomie.</p> */}
                </div>

                <div className="timeline">
                    <div className="t-item">
                        <div className="t-date">Août 2025</div>
                        <div className="t-content">
                            <h4>Stage - Développement Web (Symfony)</h4>
                            <p>
                                <strong>Pixcod Agency</strong> &bull; Nador, Maroc<br /><br />
                                &bull; Développement d'une application e-commerce avec Symfony et Twig, intégrant une interface d'administration pour la gestion des produits et des catégories.<br /><br />
                                &bull; Contribution à l'amélioration du tableau de bord admin, rendant la gestion du contenu plus rapide et intuitive pour l'équipe.
                            </p>
                            <div className="t-tags">
                                <span className="tag">Symfony</span><span className="tag">Twig</span><span className="tag">PHP</span><span className="tag">e-commerce</span>
                            </div>
                        </div>
                    </div>

                    {/* <div className="t-item">
                        <div className="t-date">Mai 2025 - Juil 2025</div>
                        <div className="t-content">
                            <h4>Site e-commerce WM_Collection</h4>
                            <p>
                                <strong>OFPPT - CMC Oriental</strong> &bull; <a href="https://github.com/rokayachoua2/wm_collection" target="_blank" rel="noreferrer">github.com/rokayachoua2/wm_collection</a><br /><br />
                                &bull; Développement complet d’un site e-commerce intégrant une interface client (inscription, connexion, panier, commande) et un tableau de bord administrateur pour la gestion des produits.<br /><br />
                                &bull; Mise en place d’une base de données relationnelle optimisée (produits, utilisateurs, commandes) et d’un affichage dynamique du stock, améliorant la performance et la clarté du site.
                            </p>
                            <div className="t-tags">
                                <span className="tag">PHP</span><span className="tag">MySQL</span><span className="tag">HTML</span><span className="tag">CSS</span><span className="tag">JavaScript</span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}
