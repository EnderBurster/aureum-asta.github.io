import { useState } from 'react'
import astaLogo from '/icon_transparent.png'
import './App.css'
import { motion } from "framer-motion";

function FadeInWhenVisible({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
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
          <div className="App-content" id="app-content">
              <FadeInWhenVisible>
              <div>
                  <a href="https://github.com/EnderBurster/Aureum-Asta-Discs" target="_blank">
                      <img src={astaLogo} className="logo" alt="Aureum Asta Logo" />
                  </a>
              </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible>
              <h1>Aureum Asta</h1>
              <div className="card">
                  <button onClick={() => setCount((count) => count + 1)}>
                      count is {count}
                  </button>
                  <p>
                      Edit <code>src/App.jsx</code> and save to test HMR
                  </p>
              </div>
              <p className="read-the-docs">
                  Click on the Aureum Asta logo to be transported to the github.
              </p>
              </FadeInWhenVisible>
          </div>


          <div className="App-content purple" id="app-middle">
              <FadeInWhenVisible>
              <div className="App-content">
                  <p>Here will go the documentation of Aureum Asta Discs.</p>
                  <p>And here.</p>
                  <p>And here.</p>
                  <p>And finally, here.</p>
              </div>
              </FadeInWhenVisible>
          </div>

          <div className="App-content" id="app-content">
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
              </FadeInWhenVisible>
          </div>


          <div className="App-content purple" id="app-middle">
              <FadeInWhenVisible>
                  <div className="App-content">
                      <p>Here will go the documentation of Aureum Asta Discs.</p>
                      <p>And here.</p>
                      <p>And here.</p>
                      <p>And finally, here.</p>
                  </div>
              </FadeInWhenVisible>
          </div>
    </>
  )
}

export default App
