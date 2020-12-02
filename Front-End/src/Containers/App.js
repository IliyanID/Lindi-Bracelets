import React, { PureComponent } from 'react';
import axios from "axios";
import './App.css';

import logo from '../resources/images/cilcular-logo-white.png'

import catalog from '../resources/images/bracelts.jpg';
import stand from '../resources/images/stand.jpg'

import author from '../resources/images/profile_picture.png';

import etsy from '../resources/images/social-media/etsy.png';
import facebook from '../resources/images/social-media/facebook.png';
import instagram from '../resources/images/social-media/instagram.png';

class App extends PureComponent {
  constructor(props)
  {
    super(props)
    this.Shop = React.createRef();
    this.Gallery = React.createRef();
    this.Events = React.createRef();
    this.AboutMe = React.createRef(); 
    this.ContactMe = React.createRef(); 
    this.getGiHubUserWithAxios();
  }
  
  state = {
    navBarSelected:["","","","",""],
    gallery:[{id:"",link:"",description:""}]
  }

  getGiHubUserWithAxios = async () => {
    let url = window.location.href+"/EtsyImages";
    let test = "http://10.0.0.108:8080/EtsyImages"
    const response = await fetch(test);
    const jsonData = await response.json();

    
    this.setState({gallery:jsonData});
    console.log(jsonData)
  };

  scrollTo(ref){
    ref.current.scrollIntoView(true);
    document.getElementById("main-container").scrollBy(0,-80);
  }

  checkSelected = () =>{
    if(this.inViewPort(this.Shop)){
      this.setState({navBarSelected:["navListSelected","","","",""]})
    }
    else if(this.inViewPort(this.Gallery)){
      this.setState({navBarSelected:["","navListSelected","","",""]})
    }
   else if(this.inViewPort(this.Events)){
     this.setState({navBarSelected:["","","navListSelected","",""]})
   }
   else if(this.inViewPort(this.AboutMe)){
     this.setState({navBarSelected:["","","","navListSelected",""]})
   }
   else if(this.inViewPort(this.ContactMe)){
     this.setState({navBarSelected:["","","","","navListSelected"]})
   }
   else{
    this.setState({navBarSelected:["","","",""]})
   }
  }

  inViewPort = (ref) =>{

    // Get it's position in the viewport
    var bounding = ref.current.getBoundingClientRect();

    if (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
      return true;
    } else {
      return false;
    }
  }

  


  render () {
    

    let catalogItem =[
      {id:0, link:"https://www.etsy.com/listing/714558154/crochet-pattern-pdf-crochet-beaded?ref=shop_home_active_12", descrption:""},
      {id:1, link:"https://www.etsy.com/listing/714558154/crochet-pattern-pdf-crochet-beaded?ref=shop_home_active_12", descrption:""},
      {id:2, link:"https://www.etsy.com/listing/714558154/crochet-pattern-pdf-crochet-beaded?ref=shop_home_active_12", descrption:""},
      {id:3, link:"https://www.etsy.com/listing/714558154/crochet-pattern-pdf-crochet-beaded?ref=shop_home_active_12", descrption:""},
      {id:4, link:"https://www.etsy.com/listing/714558154/crochet-pattern-pdf-crochet-beaded?ref=shop_home_active_12", descrption:""},
      {id:5, link:"https://www.etsy.com/listing/714558154/crochet-pattern-pdf-crochet-beaded?ref=shop_home_active_12", descrption:""},
      {id:6, link:"https://www.etsy.com/listing/714558154/crochet-pattern-pdf-crochet-beaded?ref=shop_home_active_12", descrption:""},
      {id:7, link:"https://www.etsy.com/listing/714558154/crochet-pattern-pdf-crochet-beaded?ref=shop_home_active_12", descrption:""}
    ];
    let entireCatalog = catalogItem.map((item) =>{
      return (
      <li key = {item.id} style={{backgroundImage: `url(${catalog})`}}>
        <div className="shopButton">
          <div className="shopButtonPackage">
            <p><a href={"https://www.etsy.com/shop/LinDiBracelets?ref=simple-shop-header-name&listing_id=584303931"} target="_blank" rel="noreferrer">Go To Store</a></p>
            <p><a href={item.link} target="_blank" rel="noreferrer">Product Details</a></p>
          </div>
        </div>
      </li>);
    })

    let galleryItem =[
      {id:0, link:"", descrption:""},
      {id:1, link:"", descrption:""},
      {id:2, link:"", descrption:""},
      {id:3, link:"", descrption:""},
      {id:4, link:"", descrption:""},
      {id:5, link:"", descrption:""},
      {id:6, link:"", descrption:""},
      {id:7, link:"", descrption:""},
      {id:8, link:"", descrption:""},
      {id:9, link:"", descrption:""},
      {id:10, link:"", descrption:""},
      {id:11, link:"", descrption:""},
      {id:12, link:"", descrption:""},
      {id:13, link:"", descrption:""},
      {id:14, link:"", descrption:""},
      {id:15, link:"", descrption:""},
      {id:16, link:"", descrption:""},
      {id:17, link:"", descrption:""},
      {id:18, link:"", descrption:""},
      {id:19, link:"", descrption:""},
      {id:20, link:"", descrption:""},
    ];
    let entireGallery = this.state.gallery.map((item)=>{
      return(
      <li key={item.id}>
        <img src={item.link} alt="stand"/>
      </li>);
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


    return (
      <div id="main-container" onScroll={this.checkSelected}>
        <nav className="navBar">
            <ul className="navList">
                <li><a href={"https://www.instagram.com/lindibracelets/"} target="_blank" rel="noreferrer"><img className="navSocialMediaIcon"src={instagram} alt="InstagramLogo"/></a></li>
                <li><a href={"https://www.facebook.com/LinDiBracelets/"} target="_blank" rel="noreferrer"><img className="navSocialMediaIcon"src={facebook} alt="FacebookLogo"/></a></li>
                <li><a href={"https://www.etsy.com/shop/LinDiBracelets?ref=simple-shop-header-name&listing_id=584303931"} target="_blank" rel="noreferrer"><img className="navSocialMediaIcon"src={etsy} alt="EtsyLogo"/></a></li>
                
                <li className={this.state.navBarSelected[4]} onClick={()=>{this.scrollTo(this.ContactMe)}}>Contact Me</li>
                <li className={this.state.navBarSelected[3]} onClick={()=>{this.scrollTo(this.AboutMe)}}>About Me</li>
                <li className={this.state.navBarSelected[2]} onClick={()=>{this.scrollTo(this.Events)}}>Events</li>
                <li className={this.state.navBarSelected[1]} onClick={()=>{this.scrollTo(this.Gallery)}}>Gallery</li>
                <li className={this.state.navBarSelected[0]} onClick={()=>{this.scrollTo(this.Shop)}}>Shop</li>
            </ul>
            <img className="logo"src={logo} alt="logo" onClick={()=>{document.getElementById("main-container").scrollTo(0,0);}}/>
        </nav>        
      
        
        <div className="headerText">
            <h2 className="lindiName">Lindi Bracelets</h2>
            <h2 className ="headerBold">Love</h2>
            <h2 className ="headerReg">what you wear. be</h2>
            <h2 className ="headerBold">Unique</h2>
        </div>
        
        <div className="shop">
          <h1 ref={this.Shop}>Shop</h1>
          <ul>
           {entireCatalog}
          </ul> 
        </div>

        <div className="gallery">
          <h1 ref={this.Gallery}>Gallery</h1>
          <ul>
            {entireGallery}
          </ul>
        </div>

        <div className="eventsTitle">
          <h1 ref={this.Events}>Events</h1>
          <ul>
            {allEvents}
          </ul>
        </div>

        <div  className="aboutMe">
          <h1 ref={this.AboutMe}> About Me</h1>
          <img src={author} alt="Author"/>
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

        <div className="contactMe">
          <h1 ref={this.ContactMe}>Contact Me</h1>
          <p>Got something different in mind? Send me an email and we can make it a realty</p>
          <form className="contactMeForm">
            <input type="text" placeholder="Email"></input>
            <input type="text" placeholder="Subject"></input>
            <textarea  className="formContent"></textarea >
            <button className="button" type="submit">Submit</button>
          </form>
        </div>


        <div className="socialMedia">
          <p>All rights reserved</p>
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
