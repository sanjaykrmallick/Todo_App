import React, { Component, Fragment } from 'react';


import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
    <Fragment>
      <HeaderComponent/>
      <MainComponent/>
    </Fragment>
    )};
}
 
export default App;