import React, { PureComponent } from 'react';
import './App.css';
import catalog from '../resources/images/bracelts.jpg';
import stand from '../resources/images/stand.jpg'

import etsy from '../resources/images/social-media/etsy.png';
import facebook from '../resources/images/social-media/facebook.png';
import instagram from '../resources/images/social-media/instagram.png';


class App extends PureComponent {
  state = {
    temp:""
  }

  render () {
    let catalogItem =[
      {id:0, link:"", descrption:""},
      {id:1, link:"", descrption:""},
      {id:2, link:"", descrption:""},
      {id:3, link:"", descrption:""},
      {id:4, link:"", descrption:""},
      {id:5, link:"", descrption:""},
      {id:6, link:"", descrption:""},
      {id:7, link:"", descrption:""}
    ];

    let entireCatalog = catalogItem.map((item) =>{
      return (<li key = {item.id} style={{backgroundImage: `url(${catalog})`}}></li>);
    })


    let events =[
      {id:0, pic:"", location:"Parker Local Store", date:"Now", link:"https://www.google.com/maps/dir//the+LOCAL+Parker,+19565+Mainstreet,+Parker,+CO+80138/@39.5185752,-104.7620033,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x876c91fb146edb0f:0x31e54245863d15c4!2m2!1d-104.7620033!2d39.5185752!3e0"},
      {id:1, pic:"", location:"Parker Local Store", date:"Now", link:"https://www.google.com/maps/dir//the+LOCAL+Parker,+19565+Mainstreet,+Parker,+CO+80138/@39.5185752,-104.7620033,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x876c91fb146edb0f:0x31e54245863d15c4!2m2!1d-104.7620033!2d39.5185752!3e0"},
      {id:2, pic:"", location:"Parker Local Store", date:"Now", link:"https://www.google.com/maps/dir//the+LOCAL+Parker,+19565+Mainstreet,+Parker,+CO+80138/@39.5185752,-104.7620033,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x876c91fb146edb0f:0x31e54245863d15c4!2m2!1d-104.7620033!2d39.5185752!3e0"},
      {id:3, pic:"", location:"Parker Local Store", date:"Now", link:"https://www.google.com/maps/dir//the+LOCAL+Parker,+19565+Mainstreet,+Parker,+CO+80138/@39.5185752,-104.7620033,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x876c91fb146edb0f:0x31e54245863d15c4!2m2!1d-104.7620033!2d39.5185752!3e0"},
      {id:4, pic:"", location:"Parker Local Store", date:"Now", link:"https://www.google.com/maps/dir//the+LOCAL+Parker,+19565+Mainstreet,+Parker,+CO+80138/@39.5185752,-104.7620033,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x876c91fb146edb0f:0x31e54245863d15c4!2m2!1d-104.7620033!2d39.5185752!3e0"}
    ];
    let allEvents = events.map((event) =>{
      return(
      <li className="event"key={event.id}>
        <a href={event.link} target="_blank"><img src={stand} alt="eventLocation"/></a>
        <p>
          Where: <a href={event.link} target="_blank">{event.location}</a>
        </p>
        
        <p>
          When: {event.date}
        </p>
      </li>);
    })


    return (
      <div id="main-container">
        <nav className="navBar">
            <ul className="navList socialMedia">
                <li><a href={"https://www.instagram.com/lindibracelets/"} target="_blank"><img className="navSocialMediaIcon"src={instagram}/></a></li>
                <li><a href={"https://www.facebook.com/LinDiBracelets/"} target="_blank"><img className="navSocialMediaIcon"src={facebook}/></a></li>
                <li><a href={"https://www.etsy.com/shop/LinDiBracelets?ref=simple-shop-header-name&listing_id=584303931"} target="_blank"><img className="navSocialMediaIcon"src={etsy}/></a></li>
         

                
                
                
                <li><a href="./">Contact Us</a></li>
                <li><a href="./">About Me</a></li>
                <li><a href="./">Events</a></li>
                <li><a href="./">Shop</a></li>
            </ul>
        </nav>        
      
        
        <div className="headerText nomobile">
            <h1 className ="lindi"> Lindi Bracelts</h1>
            <h1 className ="headerBold">Love</h1>
            <h1 className ="headerReg">what you wear. be</h1>
            <h1 className ="headerBold">Unique</h1>
        </div>
        
        <div className="shop">
          <ul>
           {entireCatalog}
          </ul> 
        </div>

        <div className="eventsTitle">
          <h1>Events</h1>
          <ul>
            {allEvents}
          </ul>
        </div>

        <div className="contactMe">
          <h1>Contact Me</h1>
          <form className="contactMeForm">
            <input type="text" Placeholder="Subject"></input>
            <input type="text" Placeholder="Email"></input>
            <textarea  className="formContent"></textarea >
            <button className="button" type="submit">Submit</button>
          </form>
        </div>

        <div>
          <ul className="socialMedia">
            <li><a href={"https://www.instagram.com/lindibracelets/"} target="_blank"><img className="socialMediaIcon"src={instagram}/></a></li>
            <li><a href={"https://www.facebook.com/LinDiBracelets/"} target="_blank"><img className="socialMediaIcon"src={facebook}/></a></li>
            <li><a href={"https://www.etsy.com/shop/LinDiBracelets?ref=simple-shop-header-name&listing_id=584303931"} target="_blank"><img className="socialMediaIcon"src={etsy}/></a></li>
          </ul>
        </div>

      </div>
    );
  }
}

export default App;
