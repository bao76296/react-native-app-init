import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';
 
import Swiper from 'react-native-swiper';

interface props{
 store ?: any
}

interface state {
  swiperList :Array<any>
}

export default class cookSwiper extends Component <props, state>{
  constructor (props : any){
    super(props)
    this.state = {
      swiperList : []
    }
  }
  


  renderSwiper () {

   
    if(this.state.swiperList.length<=0){
      return false;
    } 
    
   return(
    <Swiper >
      {
        this.state.swiperList.map( item => (
          <View  key={item.id}>
            <Image style={{height:250,width:'100%'}} source ={{uri : item.img}}></Image>
          </View>
     ) )
        }
    
   </Swiper>
   )
    
    
  }

  render(){
    console.log(this)
    return (
      <View style ={{height:250,width:'100%'}}>
           
       {this.renderSwiper()}
      
      </View>
     
    );
  }
}




