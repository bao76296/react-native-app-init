var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { inject, observer } from 'mobx-react';
let cookSwiper = class cookSwiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            swiperList: []
        };
    }
    componentDidMount() {
        // console.log(this.props)
        this.props.store.homeList.getListData();
    }
    renderSwiper() {
        if (this.props.store.homeList.length <= 0) {
            return false;
        }
        return (React.createElement(Swiper, null, this.props.store.homeList.list.map((item) => (React.createElement(View, { key: item.id },
            React.createElement(Image, { style: { height: 250, width: '100%' }, source: { uri: item.img } }))))));
    }
    render() {
        return (React.createElement(View, { style: { height: 250, width: '100%' } }, this.renderSwiper()));
    }
};
cookSwiper = __decorate([
    inject('store'),
    observer
], cookSwiper);
export default cookSwiper;
//# sourceMappingURL=cookSwiper.js.map