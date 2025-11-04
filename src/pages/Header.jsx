import {useState} from "react";
import './css/Header.css'
import astaLogo from '/icon_transparent.png'
import {Outlet, useNavigate} from "react-router";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
        }
    };

    return (
        <>
            {/*Header*/}
            <header className="App-header">
                <div className="header-name-logo">
                    <img src={astaLogo} className="logo header" alt="Aureum Asta Logo" /> Aureum Asta
                </div>
                <div className="hamburger-menu">
                    <button
                        className={`hamburger ${menuOpen ? "open" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {menuOpen && (
                        <div className="menu-dropdown">
                            <button onClick={() => navigate("aureum-asta.github.io/")}>Home</button>
                            <button onClick={() => navigate("aureum-asta.github.io/lore")}>Lore</button>
                            <button onClick={() => scrollToSection("app-bottom")}>Mods</button>
                        </div>
                    )}
                </div>
            </header>

            <Outlet/>

            {/* Footer */}
            <footer className="App-footer">
                <div className="App-footer-div">
                    <p>2025 Aureum Asta, all rights reserved</p>
                    <p>Test</p>
                </div>
            </footer>
        </>
    );
}
