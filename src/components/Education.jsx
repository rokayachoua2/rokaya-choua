export default function Education() {
    return (
        <section id="education">
            <div className="container">
                <div className="section-head">
                    <div>
                        <div className="pill">Parcours</div>
                        <h3>Education</h3>
                    </div>
                    {/* <p>Mon parcours académique et les certifications qui valident mes compétences techniques.</p> */}
                </div>

                <div className="timeline">
                    <div className="t-item">
                        <div className="t-date">2024 – 2026</div>
                        <div className="t-content">
                            <h4>OFPPT – Développement Digital (Web Full-Stack)</h4>
                            <p>Modules: HTML/CSS/JS, PHP/MySQL, UML, React, Laravel.</p>
                            <div className="t-tags">
                                <span className="tag">Web</span><span className="tag">PHP</span><span className="tag">MySQL</span><span className="tag">React</span><span className="tag">Laravel</span>
                            </div>
                        </div>
                    </div>

                    <div className="t-item">
                        <div className="t-date">2024</div>
                        <div className="t-content">
                            <h4>Baccalauréat – Option science Physique</h4>
                            <p>Lycée Nador. Option science Physique avec mention Bien .</p>
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
