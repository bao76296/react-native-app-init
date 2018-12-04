import React , { Component } from 'react';
import styles from './styles'
import {
    View , Text 
} from 'react-native';

interface Props {
    right?: any,
    left ?: any
}


export default class HeadContainer extends Component<Props> {
    render () {
        return (
            <View style={styles.wrapper}>
                <View style={styles.headItemWrapper}><Text style = {styles.headItemLeft} >{this.props.left}</Text></View>
                <Text style = { styles.headCenter}>{this.props.children}</Text>
                <View style={styles.headItemWrapper}><Text style = {styles.headItemRight} >{this.props.right}</Text></View>
            </View>
        )
    }
}
