import React from 'react';

import etsy from '../../resources/images/social-media/etsy.png';
import facebook from '../../resources/images/social-media/facebook.png';
import instagram from '../../resources/images/social-media/instagram.png';

let SocialMedia = (props) => {
    return(
        <div className="socialMedia">
          <p>All rights reserved</p>
          <ul>
            <li><a href={"https://www.instagram.com/lindibracelets/"} target="_blank" rel="noreferrer"><img className="socialMediaIcon"src={instagram} alt="FacebookLogo"/></a></li>
            <li><a href={"https://www.facebook.com/LinDiBracelets/"} target="_blank" rel="noreferrer"><img className="socialMediaIcon"src={facebook} alt="InstagramLogo"/></a></li>
            <li><a href={"https://www.etsy.com/shop/LinDiBracelets?ref=simple-shop-header-name&listing_id=584303931"} target="_blank" rel="noreferrer"><img className="socialMediaIcon"src={etsy} alt="EtsyLogo"/></a></li>
          </ul>
        </div>
    );
}

export default SocialMedia;