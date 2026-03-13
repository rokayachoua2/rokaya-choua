import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const LINKEDIN_URL = "https://www.linkedin.com/in/rokaya";
const GITHUB_URL = "https://github.com/rokayachoua2";
const EMAIL = "rokaya.choua2@gmail.com";
const PHONE = "+212 763-109747";

export default function Contact() {
    const { t } = useLanguage();
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult(t('contact.form.sending'));

        const formData = new FormData(event.target);
        formData.append("access_key", "705d981a-b7bd-447d-8aeb-26f68942ebb6");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult(t('contact.form.success'));
                event.target.reset();
            } else {
                console.error("Erreur Web3Forms:", data);
                setResult(data.message || t('contact.form.error'));
            }
        } catch (error) {
            console.error("Erreur Fetch:", error);
            setResult(t('contact.form.error'));
        }
    };
    return (
        <section id="contact">
            <div className="container">
                <div className="section-head">
                    <div>
                        <div className="pill">{t('contact.pill')}</div>
                        <h3>{t('contact.title')}</h3>
                    </div>
                </div>

                <div className="grid">
                    <div className="card pad contact-info">
                        <h4>{t('contact.info.title')}</h4>
                        <p>{t('contact.info.desc')}</p>

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
                                <strong>{t('contact.city')}</strong>
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
                        <h4 style={{ marginBottom: '10px' }}>{t('contact.form.title')}</h4>
                        <form onSubmit={onSubmit}>
                            <input type="text" name="Nom" placeholder={t('contact.form.name')} required />
                            <input type="email" name="Email" placeholder={t('contact.form.email')} required />
                            <input type="text" name="Sujet" placeholder={t('contact.form.subject')} required />
                            <textarea name="Message" placeholder={t('contact.form.message')} required></textarea>
                            <button className="btn primary" type="submit" disabled={result === t('contact.form.sending')}>
                                {result === t('contact.form.sending') ? t('contact.form.sending') : t('contact.form.submit')}
                            </button>
                        </form>
                        {result && (
                            <p style={{ marginTop: '15px', color: result === t('contact.form.success') ? 'green' : (result === t('contact.form.sending') ? '#666' : 'red') }}>
                                {result}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
