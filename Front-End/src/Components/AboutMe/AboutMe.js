import React from 'react'
import Constants from '../../resources/AboutMeConstants'

let AboutMe = (props) =>{
    /*let allCards = (
        Constants.map(Event,index)=>{
            return(

            );
        }
    );*/
    return(
        <div ref={props.AboutMeRef} className="aboutMe eventsTitle">
            <h1> About Me</h1>

            <ul>
                {
                    Constants.map((Event,index)=>{
                        return(
                            <li className="event" key={index}>
                                <img src={Event.picture} alt="eventLocation"/>
                                <div className="eventDescription">
                                    <p>
                                        {Event.description}
                                    </p>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}
export default AboutMe;