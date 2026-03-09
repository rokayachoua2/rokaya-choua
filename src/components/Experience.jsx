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
                                <strong>Pixcod Agency</strong> &bull; Nador, Maroc<br />
                                &bull; Développement d'une application e-commerce avec Symfony et Twig, intégrant une interface d'administration pour la gestion des produits et des catégories.<br />
                                &bull; Contribution à l'amélioration du tableau de bord admin, rendant la gestion du contenu plus rapide et intuitive pour l'équipe.
                            </p>
                            <div className="t-tags">
                                <span className="tag">Symfony</span><span className="tag">Twig</span><span className="tag">PHP</span><span className="tag">e-commerce</span>
                            </div>
                        </div>
                    </div>

                    <div className="t-item">
                        <div className="t-date">fevrier 2025 - aujourd'hui</div>
                        <div className="t-content">
                            <h4>QA Testing intern</h4>
                            <p>
                                <strong>LibertyPay</strong> <br />
                                &bull; Worked on testing a financial web and mobile application related to salary advance services.
                                <br />
                                &bull; Executed functional and user flow tests (employee creation, approval workflow, salary advance requests, transactions and reports).
                                <br />
                                &bull; Identified and reported defects in the UAT defect tracking sheet.
                                <br />
                                &bull; Verified application behaviour using browser developer tools.
                                <br />
                                &bull; Collaborated with developers to reproduce and track bugs.
                            </p>
                            <div className="t-tags">
                                <span className="tag">QA Testing</span><span className="tag">UAT Testing</span><span className="tag">Bug Tracking</span><span className="tag">Web Application Testing</span><span className="tag">Quality Assurance (QA)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
