import { useEffect, useState } from "react";
import astaLogo from '/icon_transparent.png'
import serverSS from '../assets/background.png'
import './css/App.css'
import SpiralModsSection from "./subsections/scroll_animations/SpiralModSection.jsx";
import {BrowserRouter, useNavigate} from "react-router";
import {Routes, Route } from "react-router-dom";
import LorePage from "./Lore.jsx";
import Header from "./Header.jsx";
import FadeInWhenVisible from "./subsections/scroll_animations/FadeInWhenVisible.jsx";

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

function Home() {
    const [count, setCount] = useState(0)
    const navigate = useNavigate();

    return (
        <>
            {/*Main Content*/}
            <div className="page">
                <div className="App-content" id="app-content">
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
                                <button onClick={() => navigate("./lore")}>
                                    Learn the Lore
                                </button>
                            </div>
                        </div>
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
            </div>
        </>
    );
}

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route element={<Header/>}>
                  <Route path="aureum-asta.github.io/" element={<Home/>} />
                  <Route path="aureum-asta.github.io/lore" element={<LorePage/>} />
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
