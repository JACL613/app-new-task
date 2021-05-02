import React from "react";

import iconProfile from '../assets/profit.png';
const App = ({title}) => {
  return (
    <div>
      <img width="100" src={iconProfile} alt="Profile" />
      <h2>App component! {title}</h2>
    </div>
  );
};

export default App;