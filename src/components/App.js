import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";

// pass this data down as props to the child component(s) that need it!

function App() {
 // console.log({user});
  return (
    <div>
      <NavBar />
      <Home name={user.name} color={user.color} city={user.city} />
      <About bio={user.bio} links={user.links} />      
    </div>
  );
}

export default App;
