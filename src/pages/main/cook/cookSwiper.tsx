import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';
 
import Swiper from 'react-native-swiper';
import { inject, observer } from 'mobx-react'


interface props{
 store ?: any
}

interface state {
  swiperList :Array<any>
}

@inject('store')
@observer
export default class cookSwiper extends Component <props, state>{
  constructor (props : any){
    super(props)
    this.state = {
      swiperList : []
    }
  }
  componentDidMount () {
    // console.log(this.props)
    this.props.store.homeList.getListData();
  }
  renderSwiper () {
    if(this.props.store.homeList.length<=0){
      return false;
    } 
   
  
   return(
    <Swiper >
      {
        this.props.store.homeList.list.map( (item:any) => (
          <View  key={item.id}>
            <Image style={{height:250,width:'100%'}} source ={{uri : item.img}}></Image>
          </View>
     ) )
        }
    
   </Swiper>
   )
  }

  render(){
    return (
      <View style ={{height:250,width:'100%'}}>
           
       {this.renderSwiper()}
      
      </View>
     
    );
  }
}




