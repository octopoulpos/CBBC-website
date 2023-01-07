import React from "react";
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';
import Header from "./Header";
import Footer from "./Footer";
// import Note from "./Note";
import Login from "./Login";
import MovingDiv from "./MovingDiv";
import Card from "./Card";
import cards from "../cards";

// import Callback from "./Enedis1";





function createCard(cards) {
    return (
        <Card
            id={cards.id} // répétition car "key" est une variable spéciale pas réutilisable (card.jsx, pas possible props.key)
            key={cards.id}
            name={cards.name}
            img={cards.imgURL}
            description={cards.description}
        />
    );
}



function App() {



    return (
        <div>
 
            <Header />
            <div className="main">
                {cards.map(createCard)}

            </div>

            <div className="main">
                {cards.map(createCard)}
            </div>
            <Footer />
        </div>
    );

}

export default App;