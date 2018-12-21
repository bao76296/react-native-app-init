import React , { Component } from 'react';
import {
    View,
    WebView
} from 'react-native';

export default class Other extends Component {
    render () {
        return (
            <View style={{flex : 1}}>
                <WebView 
                    style={{flex:1}}
                    source = {{uri : "https://www.baidu.com"}}
                >

                </WebView>
            </View>
        )
    }
}