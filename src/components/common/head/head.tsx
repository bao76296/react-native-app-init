import React , { Component } from 'react';
import styles from './styles'
import {
    View , Text 
} from 'react-native';



export default class HeadContainer extends Component {
    render () {
        return (
            <View style={styles.wrapper}>
                <Text style = { styles.headCenter}></Text>
            </View>
        )
    }
}
