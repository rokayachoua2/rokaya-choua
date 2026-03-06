const LINKEDIN_URL = "https://www.linkedin.com/in/rokaya";
const GITHUB_URL = "https://github.com/rokayachoua2";
const EMAIL = "rokaya.choua2@gmail.com";
const PHONE = "+212 763-109747";

export default function Contact() {
    return (
        <section id="contact">
            <div className="container">
                <div className="section-head">
                    <div>
                        <div className="pill">Contact</div>
                        <h3>Travaillons ensemble</h3>
                    </div>
                    {/* <p>Vous avez un projet en tête ou une opportunité de stage ? Remplissez ce formulaire et je vous répondrai
                        dans les plus brefs délais.</p> */}
                </div>

                <div className="grid">
                    <div className="card pad contact-info">
                        <h4>Infos</h4>
                        <p>Je suis ouverte à un stage PFE / pré-embauche. N’hésite pas à me contacter.</p>

                        <div className="contact-box">
                            <div className="c-row">
                                <strong>Email</strong>
                                <span>{EMAIL}</span>
                            </div>
                            <div className="c-row">
                                <strong>Téléphone</strong>
                                <span>{PHONE}</span>
                            </div>
                            <div className="c-row">
                                <strong>Ville</strong>
                                <span>Nador, Maroc</span>
                            </div>
                            <div className="c-row">
                                <strong>LinkedIn</strong>
                                <span>linkedin.com/in/rokaya</span>
                            </div>
                            <div className="c-row">
                                <strong>GitHub</strong>
                                <span>github.com/rokayachoua2</span>
                            </div>
                        </div>

                        <div style={{ height: '14px' }}></div>
                        <div className="social">
                            <a href="https://www.linkedin.com/in/rokaya-choua-0a9ab6359/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
                            <a href="https://github.com/rokayachoua2" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
                        </div>
                    </div>

                    <div className="card pad">
                        <h4 style={{ marginBottom: '10px' }}>Envoyer un message</h4>
                        {/* Connect this form using Formspree (https://formspree.io) by changing action="#" to your form URL */}
                        <form action={`mailto:${EMAIL}`} method="post" encType="text/plain">
                            <input type="text" name="Nom" placeholder="Votre nom" required />
                            <input type="email" name="Email" placeholder="Votre email" required />
                            <input type="text" name="Sujet" placeholder="Sujet" required />
                            <textarea name="Message" placeholder="Votre message..." required></textarea>
                            <button className="btn primary" type="submit">Envoyer via Email</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
