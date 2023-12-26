import "../assets/styles/app.scss";

import Navigation from "./Navigation";
import About from "./About";
import Skills from "./Skills";

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navigation />
            </header>
            <main className="App-main">
                <About />
                <Skills />
            </main>
        </div>
    );
}
