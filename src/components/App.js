import "../assets/styles/app.scss";

import Navigation from "./Navigation";
import NavigationMobile from "./NavigationMobile";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import Career from "./Career";

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navigation />
                <NavigationMobile />
            </header>
            <main className="App-main">
                <About />
                <Career />
                <Skills />
                <Projects />
            </main>
            <footer className="App-footer">
                <Footer />
            </footer>
        </div>
    );
}
