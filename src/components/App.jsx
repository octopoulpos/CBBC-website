import React from "react";
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';
import Header from "./Header";
import Footer from "./Footer";
// import Note from "./Note";
import MovingDiv from "./MovingDiv";
import Card from "./Card";
import contacts from "../contacts";
// import AppEne from "./Enedis1";


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

                {/* <Card
                    name="Bob"
                    img="https://picsum.photos/200"
                    tel="+33 6 23 23 23 23"
                    email="B@b.com"
                />
                <Card
                    name="George"
                    img="https://picsum.photos/200"
                    tel="+33 6667773"
                    email="Georges@bruno.com"
                />
                <Card
                    name={contacts[0].name}
                    img={contacts[0].imgURL}
                    tel={contacts[0].phone}
                    email={contacts[0].email}
                />
                <Card
                    name={contacts[1].name}
                    img={contacts[1].imgURL}
                    tel={contacts[1].phone}
                    email={contacts[1].email}
                />
                <Card
                    name={contacts[2].name}
                    img={contacts[2].imgURL}
                    tel={contacts[2].phone}
                    email={contacts[2].email}
                /> */}
                <MovingDiv />
                <Footer />
            </div>
        </div>
    );
}

export default App;