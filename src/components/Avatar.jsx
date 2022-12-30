import React from "react";

function Avatar(props) {
    return (
        <img className="circle-img"
            src={props.img}
            alt="avatar_img"
        />
    );
}

export default Avatar;


// Pour rediriger l'utilisateur vers une autre page lorsqu'il clique sur l'image, vous pouvez utiliser le composant Link de la bibliothèque react-router-dom. Ce composant permet de créer des liens qui gèrent la navigation entre les différentes pages de votre application.

// Voici comment vous pourriez mettre à jour votre composant Avatar pour ajouter une fonction de redirection lorsque l'utilisateur clique sur l'image :

// import React from "react";
// import { Link } from "react-router-dom";

// function Avatar(props) {
//     return (
//         <Link to="/redirection-page">
//             <img className="circle-img"
//                 src={props.img}
//                 alt="avatar_img"
//             />
//         </Link>
//     );
// }

// export default Avatar;

// Dans cet exemple, lorsque l'utilisateur clique sur l'image, il sera redirigé vers la page /redirection-page. Vous pouvez remplacer cette URL par l'URL de la page vers laquelle vous souhaitez rediriger l'utilisateur.

// Pour que cette redirection fonctionne correctement, vous devez également configurer votre application pour gérer les routes. Si vous utilisez la bibliothèque react-router-dom, vous pouvez utiliser le composant Router pour définir les différentes routes de votre application et le composant Route pour spécifier les composants à afficher pour chaque route.

// Voici un exemple de configuration de routes pour votre application :

// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import HomePage from "./HomePage";
// import RedirectionPage from "./RedirectionPage";

// function App() {
//   return (
//     <Router>
//       <Route exact path="/" component={HomePage} />
//       <Route path="/redirection-page" component={RedirectionPage} />
//     </Router>
//   );
// }

// export default App;

// Dans cet exemple, la route / affichera le composant HomePage et la route /redirection-page affichera le composant RedirectionPage. Lorsque l'utilisateur clique sur l'image dans le composant Avatar, il sera redirigé vers la page /redirection-page et le composant RedirectionPage sera affiché.