import React , { Component } from 'react';
import {
     Text,
     View
} from 'react-native';

export default class List extends Component {
    static navigationOptions = (props : any) => {
        return {
            title: props.navigation.getParam('title'),
            headerTintColor : '#fff',
            headerStyle: {
                backgroundColor: 'tomato',
            },
            headerTitleStyle :{
                flex: 1,
                textAlign: 'center',
                // marginLeft : -15
                
            },
            headerRight:React.createElement(View, null, null),
        }
    }; 
    render () {
        return (
            <Text> this is lsit</Text>
        )
    }
}