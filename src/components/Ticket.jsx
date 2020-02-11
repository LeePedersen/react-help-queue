import React from 'react';
import PropTypes from 'prop-types';

var ticketStyle = {
  color: 'green',
  fontSize:'16px',
  fontWeight:'600'
}

function Ticket(props){
  return(
    <div>
      <h3 style={ticketStyle}>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
