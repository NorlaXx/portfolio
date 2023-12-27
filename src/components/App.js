import "../assets/styles/app.scss";

import Navigation from "./Navigation";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navigation />
            </header>
            <main className="App-main">
                <About />
                <Skills />
                <Projects />
            </main>
        </div>
    );
}
