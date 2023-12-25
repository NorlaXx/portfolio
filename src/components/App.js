import "../assets/styles/app.scss";

import Navigation from "./Navigation";
import About from "./About";

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navigation />
            </header>
            <main className="App-main">
                <About />
            </main>
        </div>
    );
}
