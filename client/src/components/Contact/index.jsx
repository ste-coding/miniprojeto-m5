import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <footer className="footer">
                <div className="footer-content">
                    <div className="social-icons">
                        <a href="https://github.com/ste-coding" target="_blank" rel="noopener noreferrer" aria-label="Github">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/stephanie-candido/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:stephanie.candido42@gmail.com" aria-label="Email">
                            <FaEnvelope />
                        </a>
                    </div>

                    <div className="footer-right">
                        <h1 className="ent-name">e-Waste</h1>
                        <p className="secondary-text">
                            Miniprojeto realizado para o M5 - Programadores do Amanhã
                        </p>
                        <p className="secondary-text">
                        &nbsp;&nbsp; 2024 • Stéphanie Cândido • made with ☕ and ❤️
                        </p>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Contact;
