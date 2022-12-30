import React from "react";
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';
import Header from "./Header";
import Footer from "./Footer";
// import Note from "./Note";
import MovingDiv from "./MovingDiv";
import Card from "./Card";
import contacts from "../contacts";

// import Callback from "./Enedis1";




function createCard(contact) {
    return (
        <Card
            id={contact.id} // répétition car "key" est une variable spéciale pas réutilisable (card.jsx, pas possible props.key)
            key={contact.id}
            name={contact.name}
            img={contact.imgURL}
            tel={contact.phone}
            email={contact.email}
        />
    );
}



function App() {

    return (
        <div>
            <Header />

            <div className="body-div">

                {contacts.map(createCard)}

                <MovingDiv />

                <Footer />
            </div>
        </div>
    );

}

export default App;