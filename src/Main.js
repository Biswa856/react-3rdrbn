import React from "react";
import Contact from'./Contact.js'
import Landing from'./Landing.js'
export default  function Main({name}) {
  

  return (
    <div>
      main
      <Contact/>
      <Landing name={name}/>
    </div>
  );
}