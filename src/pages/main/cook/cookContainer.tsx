import React , { Component } from 'react';

import {
     View,
    ScrollView
} from 'react-native';
import CookSwiper from './cookSwiper'
import CookHotClassify from './cookHotClassify';
import CookHotList from './cookHotList'
export default class CookContainer extends Component {
    render () {
        return (
        <ScrollView>
           <View style ={{flex:1,backgroundColor : '#f5f5f5'}}>
            
             <CookSwiper></CookSwiper>
             <CookHotClassify></CookHotClassify>
             <CookHotList></CookHotList>
           </View>
           
           </ScrollView>
        )
    }
}