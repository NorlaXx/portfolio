import { useState } from "react";

import "../assets/styles/navigation.scss";
import NavigationLink from "./NavigationLink";

export default function NavigationMobile() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {!isOpen ? (
                <div
                    className="burger"
                    onClick={() => setIsOpen(!isOpen)}
                ></div>
            ) : (
                <nav className="portfolio-navigation-mobile">
                    <div
                        className="cross"
                        onClick={() => setIsOpen(!isOpen)}
                    ></div>
                    <NavigationLink />
                </nav>
            )}
        </div>
    );
}
