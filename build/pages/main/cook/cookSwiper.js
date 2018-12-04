import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
export default class cookSwiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            swiperList: []
        };
    }
    renderSwiper() {
        if (this.state.swiperList.length <= 0) {
            return false;
        }
        return (React.createElement(Swiper, null, this.state.swiperList.map(item => (React.createElement(View, { key: item.id },
            React.createElement(Image, { style: { height: 250, width: '100%' }, source: { uri: item.img } }))))));
    }
    render() {
        console.log(this);
        return (React.createElement(View, { style: { height: 250, width: '100%' } }, this.renderSwiper()));
    }
}
//# sourceMappingURL=cookSwiper.js.map