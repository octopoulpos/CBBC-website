
import React from 'react';
import Logo from "./Logo";

const Header = () => {
    return (
        <header>
            <h1>BLANCHISSERIE INDUSTRIELLE</h1>
            <h2>OUTILS ET SERVICES </h2>
            <nav className="menu">
                {/* <a href="#">Accueil</a>
                <a href="#">À propos</a>
                <a href="#">Contact</a> */}
            </nav>

            <div className="logo"><Logo /></div>
        </header>
    );
};

export default Header;



// import React from "react";

// function Header() {
//     return <header>
//         <h1>BLANCHISSERIE INDUSTRIELLE</h1>
//         <h2>OUTILS ET SERVICES </h2>
//     </header>
// }

// export default Header;