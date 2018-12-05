import React from 'react';
import MainContainer from './pages/main/mainContainer'
import { Provider } from 'mobx-react'
import store from './store'


export default class App extends React.Component{
  render() {

    return ( 
      <Provider store = {store}>
         <MainContainer></MainContainer>
      </Provider>
    );
  }
}


