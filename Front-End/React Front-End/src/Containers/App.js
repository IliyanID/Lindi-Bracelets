import React, { PureComponent } from 'react';
import './App.css';
//import { Link } from 'react-scroll';

import catalog from '../resources/images/bracelts.jpg';
import stand from '../resources/images/stand.jpg'

import author from '../resources/images/profile_picture.png';

import etsy from '../resources/images/social-media/etsy.png';
import facebook from '../resources/images/social-media/facebook.png';
import instagram from '../resources/images/social-media/instagram.png';

//smoothscroll.polyfill();

class App extends PureComponent {
  constructor(props)
  {
    super(props)
    this.Events = React.createRef();
    this.AboutMe = React.createRef(); 
    this.ContactMe = React.createRef(); 
  }
  
  state = {
    temp:""
  }



  scrollTo(ref){
    ref.current.scrollIntoView(true);
    document.getElementById("main-container").scrollBy(0,-20);
  }

  inViewPort = () =>{


    // Get it's position in the viewport
    var bounding = this.ContactMe.current.getBoundingClientRect();

    if (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
      console.log('In the viewport!');
    } else {
      console.log('Not in the viewport... whomp whomp');
    }
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
      {id:0, pic:"", location:"The Local Parker,CO", date:"Now", link:"https://www.google.com/maps/place/the+LOCAL+Parker/@39.5185752,-104.7620033,17z/data=!3m1!4b1!4m5!3m4!1s0x876c91fb146edb0f:0x31e54245863d15c4!8m2!3d39.5185752!4d-104.7620033"},
      {id:1, pic:"", location:"The Local Parker,CO", date:"Now", link:"https://www.google.com/maps/place/the+LOCAL+Parker/@39.5185752,-104.7620033,17z/data=!3m1!4b1!4m5!3m4!1s0x876c91fb146edb0f:0x31e54245863d15c4!8m2!3d39.5185752!4d-104.7620033"},
      {id:2, pic:"", location:"The Local Parker,CO", date:"Now", link:"https://www.google.com/maps/place/the+LOCAL+Parker/@39.5185752,-104.7620033,17z/data=!3m1!4b1!4m5!3m4!1s0x876c91fb146edb0f:0x31e54245863d15c4!8m2!3d39.5185752!4d-104.7620033"},
      {id:3, pic:"", location:"The Local Parker,CO", date:"Now", link:"https://www.google.com/maps/place/the+LOCAL+Parker/@39.5185752,-104.7620033,17z/data=!3m1!4b1!4m5!3m4!1s0x876c91fb146edb0f:0x31e54245863d15c4!8m2!3d39.5185752!4d-104.7620033"},
      {id:4, pic:"", location:"The Local Parker,CO", date:"Now", link:"https://www.google.com/maps/place/the+LOCAL+Parker/@39.5185752,-104.7620033,17z/data=!3m1!4b1!4m5!3m4!1s0x876c91fb146edb0f:0x31e54245863d15c4!8m2!3d39.5185752!4d-104.7620033"},
      {id:5, pic:"", location:"The Local Parker,CO", date:"Now", link:"https://www.google.com/maps/place/the+LOCAL+Parker/@39.5185752,-104.7620033,17z/data=!3m1!4b1!4m5!3m4!1s0x876c91fb146edb0f:0x31e54245863d15c4!8m2!3d39.5185752!4d-104.7620033"},
      {id:6, pic:"", location:"The Local Parker,CO", date:"Now", link:"https://www.google.com/maps/place/the+LOCAL+Parker/@39.5185752,-104.7620033,17z/data=!3m1!4b1!4m5!3m4!1s0x876c91fb146edb0f:0x31e54245863d15c4!8m2!3d39.5185752!4d-104.7620033"},
      {id:7, pic:"", location:"The Local Parker,CO", date:"Now", link:"https://www.google.com/maps/place/the+LOCAL+Parker/@39.5185752,-104.7620033,17z/data=!3m1!4b1!4m5!3m4!1s0x876c91fb146edb0f:0x31e54245863d15c4!8m2!3d39.5185752!4d-104.7620033"},
      {id:8, pic:"", location:"The Local Parker,CO", date:"Now", link:"https://www.google.com/maps/place/the+LOCAL+Parker/@39.5185752,-104.7620033,17z/data=!3m1!4b1!4m5!3m4!1s0x876c91fb146edb0f:0x31e54245863d15c4!8m2!3d39.5185752!4d-104.7620033"},
      {id:9, pic:"", location:"The Local Parker,CO", date:"Now", link:"https://www.google.com/maps/place/the+LOCAL+Parker/@39.5185752,-104.7620033,17z/data=!3m1!4b1!4m5!3m4!1s0x876c91fb146edb0f:0x31e54245863d15c4!8m2!3d39.5185752!4d-104.7620033"},
      
    ];
    let allEvents = events.map((event) =>{
      return(
      <li className="event"key={event.id}>
        <a href={event.link} target="_blank" rel="noreferrer"><img src={stand} alt="eventLocation"/></a>
        <p>
          Where: <a href={event.link} target="_blank" rel="noreferrer">{event.location}</a>
        </p>
        
        <p>
          When: {event.date}
        </p>
      </li>);
    })


    return (
      <div id="main-container" onScroll={this.inViewPort}>
        <nav className="navBar">
            <ul className="navList socialMedia">
                <li><a href={"https://www.instagram.com/lindibracelets/"} target="_blank" rel="noreferrer"><img className="navSocialMediaIcon"src={instagram} alt="InstagramLogo"/></a></li>
                <li><a href={"https://www.facebook.com/LinDiBracelets/"} target="_blank" rel="noreferrer"><img className="navSocialMediaIcon"src={facebook} alt="FacebookLogo"/></a></li>
                <li><a href={"https://www.etsy.com/shop/LinDiBracelets?ref=simple-shop-header-name&listing_id=584303931"} target="_blank" rel="noreferrer"><img className="navSocialMediaIcon"src={etsy} alt="EtsyLogo"/></a></li>
                
                <li onClick={()=>{this.scrollTo(this.ContactMe)}}>Contact Me</li>
                <li onClick={()=>{this.scrollTo(this.AboutMe)}}>About Me</li>
                <li onClick={()=>{this.scrollTo(this.Events)}}>Events</li>
                <li>Shop</li>
            </ul>
        </nav>        
      
        
        <div className="headerText nomobile">
            <h1 className ="lindiName"> Lindi Bracelts</h1>
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
          <h1 ref={this.Events}>Events</h1>
          <ul>
            {allEvents}
          </ul>
        </div>

        <div ref={this.AboutMe} className="aboutMe">
          <h1>About Me</h1>
          <img src={author} alt="Author Photo"/>
          <p>I started croqueing a long time ago. It is my passion
            it is the best thing in the world. Filler text to put here
            Filler text to put here Filler text to put here Filler text to put here 
            Filler text to put here Filler text to put here Filler text to put here 
            Filler text to put here Filler text to put here Filler text to put here 
            Filler text to put here Filler text to put here Filler text to put here 
            Filler text to put here Filler text to put here Filler text to put here 
            Filler text to put here Filler text to put here Filler text to put here 
          </p>
        </div>

        <div  className="contactMe">
          <h1 ref={this.ContactMe}>Contact Me</h1>
          <form className="contactMeForm">
            <input type="text" placeholder="Subject"></input>
            <input type="text" placeholder="Email"></input>
            <textarea  className="formContent"></textarea >
            <button className="button" type="submit">Submit</button>
          </form>
        </div>

        <div className="socialMedia">
          <ul>
            <li><a href={"https://www.instagram.com/lindibracelets/"} target="_blank" rel="noreferrer"><img className="socialMediaIcon"src={instagram} alt="FacebookLogo"/></a></li>
            <li><a href={"https://www.facebook.com/LinDiBracelets/"} target="_blank" rel="noreferrer"><img className="socialMediaIcon"src={facebook} alt="InstagramLogo"/></a></li>
            <li><a href={"https://www.etsy.com/shop/LinDiBracelets?ref=simple-shop-header-name&listing_id=584303931"} target="_blank" rel="noreferrer"><img className="socialMediaIcon"src={etsy} alt="EtsyLogo"/></a></li>
          </ul>
        </div>

      </div>
    );
  }
}

export default App;
