import { useEffect, useState } from "react";
import astaLogo from '/icon_transparent.png'
import serverSS from './assets/background.png'
import './App.css'
import { motion } from "framer-motion";
import SpiralModsSection from "./scroll_animations/SpiralModSection.jsx";

function FadeInWhenVisible({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
}

function ObfuscatedText({ text, interval = 50 }) {
    const [displayed, setDisplayed] = useState(text);

    useEffect(() => {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789§";
        let running = true;

        const id = setInterval(() => {
            if (!running) return;

            setDisplayed((prev) => {
                return prev
                    .split("")
                    .map((c) => (c === " " ? " " : chars[Math.floor(Math.random() * chars.length)]))
                    .join("");
            });
        }, interval);

        return () => {
            running = false;
            clearInterval(id);
        };
    }, [text, interval]);

    return <span className="obfuscated">{displayed}</span>;
}

function App() {

    const [count, setCount] = useState(0)
    const [menuOpen, setMenuOpen] = useState(false);

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
                          <button onClick={() => scrollToSection("app-content")}>Top</button>
                          <button onClick={() => scrollToSection("app-middle")}>Middle</button>
                          <button onClick={() => scrollToSection("app-bottom")}>Bottom</button>
                      </div>
                  )}
              </div>
          </header>

          {/*Main Content*/}
          <div className="page">
              <div className="App-content" id="app-content">
                  <FadeInWhenVisible>
                      <div className="main-content">
                          <div>
                              <a href="https://github.com/EnderBurster/Aureum-Asta-Discs" target="_blank">
                                  <img src={astaLogo} className="logo" alt="Aureum Asta Logo" />
                              </a>
                          </div>
                          <h1>Aureum Asta</h1>
                          <p>Let thy ambitions run wild.</p>
                          <div className="card">
                              <button onClick={() => setCount((count) => count + 1)}>
                                  Join the Server
                              </button>
                              <button onClick={() => setCount((count) => count + 1)}>
                                  View the Mods
                              </button>
                              <button onClick={() => setCount((count) => count + 1)}>
                                  Learn the Lore
                              </button>
                          </div>
                      </div>
                  </FadeInWhenVisible>

                  <FadeInWhenVisible>
                      <div className="server-screenshot">
                          <img src={serverSS} className="server" alt="Server View" />
                      </div>
                  </FadeInWhenVisible>
              </div>

              <SpiralModsSection/>
              {/*<ScrollAnimationSection/>*/}

              <div className="App-content purple" id="app-middle">
                  <FadeInWhenVisible>
                  <div>
                      <p>Here will go the documentation of Aureum Asta Discs.</p>
                      <p>And here.</p>
                      <p><ObfuscatedText text="Some random text."/></p>
                      <p>And finally, here.</p>
                  </div>
                  </FadeInWhenVisible>
              </div>

              <div className="App-content">
                  <FadeInWhenVisible>
                      <div>
                          <a href="https://github.com/EnderBurster/Aureum-Asta-Discs" target="_blank">
                              <img src={astaLogo} className="logo" alt="Aureum Asta Logo" />
                          </a>
                      </div>
                  </FadeInWhenVisible>

                  <FadeInWhenVisible>
                      <h1>Aureum Asta</h1>
                      <p className="read-the-docs">
                          Click on the Aureum Asta logo to be transported to the github.
                      </p>

                      <div className="card">
                          <button onClick={() => setCount((count) => count + 1)}>
                              Count is {count}
                          </button>
                      </div>
                  </FadeInWhenVisible>
              </div>

              <div className="App-content purple" id="app-bottom">
                  <FadeInWhenVisible>
                      <div>
                          <p>Map of spawn (if it's not loading, the server is offline)</p>
                          <iframe src="http://aureum-asta.serveminecraft.net:8100" height="1000" width="1400" title="map"></iframe>
                      </div>
                  </FadeInWhenVisible>
              </div>
          </div>
    </>
  )
}

export default App
