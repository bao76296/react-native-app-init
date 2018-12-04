import React , { Component } from 'react';

import {
     View,
    ScrollView
} from 'react-native';
import * as common from '../../../components/common'
import CookSwiper from './cookSwiper'
import CookHotClassify from './cookHotClassify';

export default class CookContainer extends Component {
    render () {
        return (
        <ScrollView>
           <View style ={{flex:1,backgroundColor : '#3f3f3f'}}>
            
             <CookSwiper></CookSwiper>
             <CookHotClassify></CookHotClassify>
             <common.HostList></common.HostList>
           </View>
           
           </ScrollView>
        )
    }
}