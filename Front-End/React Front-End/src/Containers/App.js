import React, { PureComponent, Fragment } from 'react';
import './App.css';


class App extends PureComponent {
  state = {
    temp:""
  }

  render () {
    return (
      <Fragment>
        <nav class="navBar">
            <ul className="navList">
                <li><a class="button" href="">Shop</a></li>
                <li className=""><a class="button" href="">Locations</a></li>
                <li className=""><a class="button" href="">About Me</a></li>
                <li className=""><a class="button" href="">Contact Us</a></li>
            </ul>
        </nav>
      
        
        <div className="headerText nomobile">
            <h1 className ="headerBold headerText">Love</h1>
            <h1 className ="headerReg headerText">what you wear. be</h1>
            <h1 className ="headerBold headerText">Unique</h1>
        </div>
        
        <div className="shop">
          <ul>
            <li>Item</li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default App;
