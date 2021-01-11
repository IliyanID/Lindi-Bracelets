import React, { PureComponent } from 'react';

import './App.css';

import logo from '../resources/images/cilcular-logo-white.png'

//import catalog from '../resources/images/bracelts.jpg';
import stand from '../resources/images/stand.jpg'
import sola from '../resources/images/sola.jpg'

import author from '../resources/images/profile_picture.png';

import etsy from '../resources/images/social-media/etsy.png';
import facebook from '../resources/images/social-media/facebook.png';
import instagram from '../resources/images/social-media/instagram.png';

const debug = true;

class App extends PureComponent {
  
  constructor(props)
  {
    super(props)
    this.mainC = React.createRef();
    this.Shop = React.createRef();
    this.Gallery = React.createRef();
    this.Events = React.createRef();
    this.AboutMe = React.createRef(); 
    this.ContactMe = React.createRef(); 
    this.getEtsyImages();
    this.getInstagramImages();
  }
  
  state = {
    navBarSelected:["","","","",""],
    shop:[{id:"",link:"",description:""}],
    gallery:[{id:"",link:"",description:""}]
  }

  getEtsyImages = async () => {
    let url = "http://lindibracelets.com/EtsyImages";
    let test = "http://192.168.0.122:80/EtsyImages"
    let response = undefined;
    if(debug)
       response = await fetch(test);
    else
        response = await fetch(url);
    const jsonData = await response.json();

    
    this.setState({shop:jsonData});
    console.log(jsonData)
  };

  getInstagramImages = async () => {
    let url = "http://lindibracelets.com/InstagramImages";
    let test = "http://localhost:80/InstagramImages"
    let response = undefined;
    if(debug)
       response = await fetch(test);
    else
        response = await fetch(url);

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
   let el = ref.current;
   let percentVisible = 40;
    let
    rect = el.getBoundingClientRect(),
    windowHeight = (window.innerHeight || document.documentElement.clientHeight);

  return !(
    Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100)) < percentVisible ||
    Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
  )
  }

  


  render () {
    

 
    let entireCatalog = this.state.shop.map((item) =>{
      return (
      <li key = {item.id} style={{backgroundImage: `url(${item.link})`}}>
        <div className="shopButton">
          <div className="shopButtonPackage">
            <p><a href={"https://www.etsy.com/shop/LinDiBracelets?ref=simple-shop-header-name&listing_id=584303931"} target="_blank" rel="noreferrer">Go To Store</a></p>
            <p><a href={item.page} target="_blank" rel="noreferrer">Product Details</a></p>
          </div>
        </div>
      </li>);
    })

    let entireGallery = this.state.gallery.map((item)=>{
      return(
      <li key={item.id}>
        <img src={item.link} alt="stand"/>
      </li>);
    })
      



    let events =[
      {id:0, pic:'https://secureservercdn.net/198.71.233.184/49c.223.myftpupload.com/wp-content/uploads/2015/09/06.22.2017_AuroraLifestyle_192-1024x682.jpg', location:"the LOCAL Southlands", date:"Now", link:"https://www.google.com/maps/dir//the+LOCAL+Southlands,+6205+S+Main+St,+Aurora,+CO+80016/@39.6043105,-104.711328,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x876c8c7ce8b12059:0xa92bdf99bdb169ca!2m2!1d-104.7091393!2d39.6043105!3e0"},
      {id:1, pic:"https://lh5.googleusercontent.com/p/AF1QipNTD1v6zNinsi0uqhHd0jaD7vzFsTrZnVXaD8LE=s1148-k-no", location:"the LOCAL Parker", date:"Now", link:"https://www.google.com/maps/place/the+LOCAL+Parker/@39.5185752,-104.7620033,17z/data=!3m1!4b1!4m5!3m4!1s0x876c91fb146edb0f:0x31e54245863d15c4!8m2!3d39.5185752!4d-104.7620033"},
      {id:2, pic:sola, location:"Sola Salons", date:"Now", link:"https://www.google.com/maps/dir//sola+salon/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x876c8c7cf1023691:0xf100f2b3f623dddf?sa=X&ved=2ahUKEwj2h66O0pTuAhWEVs0KHYFTAWsQ9RcwAHoECAoQBA"},
     
      
    ];
    let allEvents = events.map((event) =>{
      return(
      <li className="event"key={event.id}>
        <a href={event.link} target="_blank" rel="noreferrer"><img src={event.pic} alt="eventLocation"/></a>
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
      <div ref={this.mainC} id="main-container" onScroll={this.checkSelected}>
        <nav className="navBar">
            <ul className="navList">
                <li className="removeIcon"><a href={"https://www.instagram.com/lindibracelets/"} target="_blank" rel="noreferrer"><img className="navSocialMediaIcon"src={instagram} alt="InstagramLogo"/></a></li>
                <li className="removeIcon"><a href={"https://www.facebook.com/LinDiBracelets/"} target="_blank" rel="noreferrer"><img className="navSocialMediaIcon"src={facebook} alt="FacebookLogo"/></a></li>
                <li className="removeIcon"><a href={"https://www.etsy.com/shop/LinDiBracelets?ref=simple-shop-header-name&listing_id=584303931"} target="_blank" rel="noreferrer"><img className="navSocialMediaIcon"src={etsy} alt="EtsyLogo"/></a></li>
                
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
        
        <div ref={this.Shop} className="shop">
          <h1 >Shop</h1>
          <div className="catalogList">
          <ul>
           {entireCatalog}
          </ul>
          </div> 
        </div>

        <div ref={this.Gallery} className="gallery">
          <h1>Gallery</h1>
          <ul>
            {entireGallery}
          </ul>
        </div>

        <div ref={this.Events} className="eventsTitle">
          <h1>Events</h1>
          <ul>
            {allEvents}
          </ul>
        </div>

        <div ref={this.AboutMe} className="aboutMe">
          <h1> About Me</h1>
          <img src={'https://i.etsystatic.com/isa/d8132b/1911746164/isa_760xN.1911746164_8nx5.jpg?version=0'} alt="Author"/>
          <p>I learned how to crochet from my mom and grandma when I was little. The new high quality thin cotton strings in variety of colors in combination with the beads created new possiblity in front of me. I started making the bracelets in 2017.
          </p>

          <p>
          I love experimenting and incorporating different patterns with the sparkle of the beads and jam stones.

Some bracelets are inspired by the ancient Bulgarian embroidery patterns, and others are sparkling asymmetrically or challenging the color combinations.

Every bracelet I create is unique.
          </p>
        </div>

        <div ref={this.ContactMe} className="contactMe">
          <h1>Contact Me</h1>
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
