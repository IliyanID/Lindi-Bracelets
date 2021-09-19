import React, { PureComponent } from 'react';

import './App.css';

import logo from '../resources/images/cilcular-logo-white.png'
import etsy from '../resources/images/social-media/etsy.png';
import facebook from '../resources/images/social-media/facebook.png';
import instagram from '../resources/images/social-media/instagram.png';

import SplashPage from '../Components/SplashPage/SplashPage'
import Shop from '../Components/Shop/Shop'
import Gallery from '../Components/Gallery/Gallery'
import Events from '../Components/Events/Events'
import AboutMe from '../Components/AboutMe/AboutMe'
import ContactMe from '../Components/ContactMe/ContactMe'
import SocialMedia from '../Components/SocialMedia/SocialMedia'


class App extends PureComponent {
  
  constructor(props)
  {
    super(props)
    this.mainC = React.createRef();
    this.ShopRef = React.createRef();
    this.GalleryRef = React.createRef();
    this.EventsRef = React.createRef();
    this.AboutMeRef = React.createRef(); 
    this.ContactMeRef = React.createRef(); 

    this.Request("EtsyImages");
    this.Request("InstagramImages");

  }

  Request = async (request)=>{
    let url = "https://www.lindibracelets.com/" + request;
    if(window.location.hostname === "localhost")
       url = "https://localhost:443/" + request

    let response = await fetch(url);
    const jsonData = await response.json();
    
    let tempState = {...this.state}
    tempState[request] = jsonData;

    this.setState( tempState);
}
  
  state = {
    navBarSelected:["","","","",""],
    EtsyImages:[{id:"",link:"",description:""}],
    InstagramImages:[{id:"",link:"",description:""}]
  }

  scrollTo(ref){
    ref.current.scrollIntoView(true);
    document.getElementById("main-container").scrollBy(0,-80);
  }

  checkSelected = () =>{
    if(this.inViewPort(this.ShopRef)){
      this.setState({navBarSelected:["navListSelected","","","",""]})
    }
    else if(this.inViewPort(this.GalleryRef)){
      this.setState({navBarSelected:["","navListSelected","","",""]})
    }
   else if(this.inViewPort(this.EventsRef)){
     this.setState({navBarSelected:["","","navListSelected","",""]})
   }
   else if(this.inViewPort(this.AboutMeRef)){
     this.setState({navBarSelected:["","","","navListSelected",""]})
   }
   else if(this.inViewPort(this.ContactMeRef)){
     this.setState({navBarSelected:["","","","","navListSelected"]})
   }
   else{
    this.setState({navBarSelected:["","","",""]})
   }
  }

  inViewPort = (ref) =>{
    if(ref && ref.current){
      let el = ref.current;
      let percentVisible = 10;
      let rect = el.getBoundingClientRect(),
      windowHeight = (window.innerHeight || document.documentElement.clientHeight);

      return !(
        Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100)) < percentVisible ||
        Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
      )
    }
    else
      return false;
  }

  render () {
    return (
      <div ref={this.mainC} id="main-container" onScroll={this.checkSelected}>
        <nav className="navBar">
            <ul className="navList">
                <li className="removeIcon"><a href={"https://www.instagram.com/lindibracelets/"} target="_blank" rel="noreferrer"><img className="navSocialMediaIcon"src={instagram} alt="InstagramLogo"/></a></li>
                <li className="removeIcon"><a href={"https://www.facebook.com/LinDiBracelets/"} target="_blank" rel="noreferrer"><img className="navSocialMediaIcon"src={facebook} alt="FacebookLogo"/></a></li>
                <li className="removeIcon"><a href={"https://www.etsy.com/shop/LinDiBracelets?ref=simple-shop-header-name&listing_id=584303931"} target="_blank" rel="noreferrer"><img className="navSocialMediaIcon"src={etsy} alt="EtsyLogo"/></a></li>
                
                <li className={this.state.navBarSelected[4]} onClick={()=>{this.scrollTo(this.ContactMeRef)}}>Contact Me</li>
                <li className={this.state.navBarSelected[3]} onClick={()=>{this.scrollTo(this.AboutMeRef)}}>About Me</li>
                <li className={this.state.navBarSelected[2]} onClick={()=>{this.scrollTo(this.Events)}}>Events</li>
                {(this.state.InstagramImages.length > 1)&&<li className={this.state.navBarSelected[1]} onClick={()=>{this.scrollTo(this.GalleryRef)}}>Gallery</li>}
                {(this.state.EtsyImages.length > 1)&&<li className={this.state.navBarSelected[0]} onClick={()=>{this.scrollTo(this.ShopRef)}}>Shop</li>}
            </ul>
            <img className="logo"src={logo} alt="logo" onClick={()=>{document.getElementById("main-container").scrollTo(0,0);}}/>
        </nav>        
    
        <SplashPage/>
        {this.state.EtsyImages.length > 1 && <Shop ShopRef={this.ShopRef} shop={this.state.EtsyImages}/>}
        {this.state.InstagramImages.length > 1 && <Gallery GalleryRef={this.GalleryRef} gallery={this.state.InstagramImages}/>}
        <Events EventsRef={this.EventsRef}/>
        <AboutMe AboutMeRef={this.AboutMeRef}/>
        <ContactMe ContactMeRef={this.ContactMeRef}/>
        <SocialMedia/>




      </div>
    );
  }
}

export default App;
