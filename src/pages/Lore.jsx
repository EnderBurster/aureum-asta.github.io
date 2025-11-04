import FadeInWhenVisible from "./subsections/scroll_animations/FadeInWhenVisible.jsx";
import "./css/Lore.css"
import Timeline from "./subsections/Timeline.jsx";
import serverSS from "../assets/background.png";

export default function LorePage() {
    return (
        <>
            <div className="page">
                <div className="App-content" id="app-content">
                        <div className="main-content">
                            <h1>Aureum Asta - Lore</h1>
                            <p>Let thy ambitions run wild.</p>
                        </div>
                </div>

                <Timeline/>

                <div className="App-content" id="app-content">
                    <div className="main-content">
                        <h1>Character</h1>
                        <p>Character description.</p>
                    </div>
                    <FadeInWhenVisible>
                        <div className="server-screenshot">
                            <img src={serverSS} className="server" alt="Server View" />
                        </div>
                    </FadeInWhenVisible>
                </div>

                <div className="App-content purple" id="app-middle">
                    <FadeInWhenVisible>
                        <div>
                            <p>Here will go the documentation of Aureum Asta Discs.</p>
                            <p>And here.</p>
                            <p>And finally, here.</p>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </div>
        </>
    );
}
