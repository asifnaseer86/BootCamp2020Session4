import React from 'react'

function Day(props) {
    return(
        <h3>Good {props.isthisMorning? 'Morning':'Night'}</h3>
    );
}

export default Day;