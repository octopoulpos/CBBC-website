import React from 'react';
import axios from 'axios';

const CLIENT_ID = 'b99082ce-2a5a-4a52-95bb-6d1093983ccc';
const DURATION = '7'; // duration is the duration of the consent that you want (1, 7, 15 or 30 days)
const REDIRECT_URI = 'https://cb-bc.fr/cbbc-enedis';

const LoginButton = () => {
  const handleLogin = () => {
    // Generate state parameter with random string
    const state = (Math.random() + 1).toString(36).substring(7);

    // Add test client number (from 0 to 4) to the end of state (cf documentation)
    const testClientId = 0; // Replace with the test client number you want to use
    state = state + testClientId;

    // Redirect user to login page on Enedis
    const redirectUrl =
      'https://gw.hml.api.enedis.fr/group/espace-particuliers/consentement-linky/oauth2/authorize' +
      '?' +
      `client_id=${CLIENT_ID}` +
      `&state=${state}` +
      `&duration=${DURATION}` +
      '&response_type=code' +
      `&redirect_uri=${REDIRECT_URI}`;
    window.location.replace(redirectUrl);
  };

  /// ça semble marcher, manque mon site qui répond surement ...
//https://gw.hml.api.enedis.fr/group/espace-particuliers/consentement-linky/oauth2/authorize?client_id=b99082ce-2a5a-4a52-95bb-6d1093983ccc&response_type=d3b594fc-3253-4ed6-b471-d709bb88b23c&redirect_uri=https://cb-bc.fr&user_type=both

  return (
    <button onClick={handleLogin}>
      Login
    </button>
  );
};

const Callback = () => {
  React.useEffect(() => {
    // Check if state parameter matches the one stored in session
    const storedState = sessionStorage.getItem('state');
    if (storedState !== window.location.search.substring(6)) {
      console.error('Error: state does not match');
      return;
    }

    // Exchange authorization code for access and refresh tokens
    axios.post('https://gw.hml.api.enedis.fr/group/espace-particuliers/consentement-linky/oauth2/token', {
      grant_type: 'authorization_code',
      code: window.location.search.substring(6),
      client_id: CLIENT_ID,
      client_secret: 'PRM:11453290002823',
      redirect_uri: REDIRECT_URI
    })
      .then(response => {
        console.log(response.data);
        // Store access and refresh tokens in session
        sessionStorage.setItem('access_token', response.data.access_token);
        sessionStorage.setItem('refresh_token', response.data.refresh_token);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      Loading...
    </div>
  );
};


const AppEne = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('refresh_token');
    setIsLoggedIn(false);
  };

  let content;
  if (isLoggedIn) {
    content = (
      <div>
        <button onClick={handleLogout}>Logout</button>
        {/* Render protected content here */}
      </div>
    );
  } else if (window.location.pathname === '/callback') {
    content = <Callback />;
  } else {
    content = <LoginButton setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <div>
      {content}
    </div>
  );
};


export default Callback;






// import React, { useEffect, useState } from 'react';

// const API_URL = 'https://api.enedis.fr';
// const API_KEY = 'd3b594fc-3253-4ed6-b471-d709bb88b23c';
// const CLIENT_ID = 'PRM:11453290002823';

// function AppEne() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch(`${API_URL}/v1/data_connect/`, {
//         headers: {
//           'Authorization': `Bearer ${API_KEY}`,
//           'X-Client-Id': CLIENT_ID
//         }
//       });
//       const json = await response.json();
//       setData(json);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
//     </div>
//   );
// }

// export default AppEne;