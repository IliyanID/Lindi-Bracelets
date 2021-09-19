import React from 'react'

let Shop = (props) =>{

    let entireCatalog = props.shop.map((item) =>{
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

    return(
        <div ref={props.ShopRef} className="shop">
          <h1 >Shop</h1>
          <ul>
           {entireCatalog}
          </ul>
        </div>
    );
}

export default Shop;