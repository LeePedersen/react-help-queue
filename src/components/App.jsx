import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";

var styled = {
  backgroundColor: "lightblue"
}

function App(){
  return (
    <div style={styled}>
      <Header/>
      <TicketList/>
    </div>
  );
}

export default App;
