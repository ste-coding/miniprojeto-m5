import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <header className="header">
            <div className="header-left">
                <a href="#about">Sobre</a>
                <a href="#collection-points">Pontos de Coleta</a>
                <a href="#contact">Contato</a>
            </div>
            <div className="header-right">
                <button className="btn-documentation" onClick={() => window.open('https://github.com/ste-coding/miniprojeto-m5', '_blank', 'noopener,noreferrer')}>
                    Documentação
                </button>
                <div className="menu-icon" onClick={toggleMenu}>
                    ☰
                </div>
            </div>
            {isMenuOpen && (
                <div className="mobile-menu">
                    <a href="#about" onClick={toggleMenu}>Sobre</a>
                    <a href="#collection-points" onClick={toggleMenu}>Pontos de Coleta</a>
                    <a href="#contact" onClick={toggleMenu}>Contato</a>
                    <button className="btn-documentation" onClick={() => window.location.href='#documentation'}>
                        Documentação
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
