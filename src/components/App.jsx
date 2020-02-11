import React from 'react';
import Header from './Header';
import TicketList from './TicketList';

var wholeThing = {
  backgroundImage: 'linear-gradient(yellow, green)',
  backgroundSize: 'cover',
  height: '100vh',
  padding: '0px'
};

function App(){
  return (
    <div style={wholeThing}>
      <Header/>
      <TicketList/>
    </div>
  );
}

export default App;
