import React from 'react'

function Day(props) {
    return(
        <h3>Daytime ={props.isthisMorning? 'Morning':'Night'}</h3>
    );
}

export default Day;