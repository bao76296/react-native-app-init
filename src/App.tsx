import React from 'react';
import MainContainer from './pages/main/mainContainer'
interface State {
  age : string
}

export default class App extends React.Component <State> {
  state  = {
    age : '20'
  }
  render() {

    return ( 
      <MainContainer></MainContainer>
    );
  }
}


