import React from 'react'
import Constants from '../../resources/EventsConstants'


let Events = (props) =>{

      let allEvents = Constants.map((event,index) =>{
        return(
        <li className="event"key={index}>
          <a href={event.link} target="_blank" rel="noreferrer"><img src={event.picture} alt="eventLocation"/></a>
          <div className="eventDescription">
            <p>
              Where: <a href={event.link} target="_blank" rel="noreferrer">{event.location}</a>
            </p>
            
            <p>
              When: {event.date}
            </p>
          </div>
        </li>);
      })
    return(
        <div ref={props.EventsRef} className="eventsTitle">
            <h1>Events</h1>
            <ul>
                {allEvents}
            </ul>
        </div>
    )
}
export default Events;