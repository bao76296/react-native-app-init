var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import { Camera, Permissions } from 'expo';
export default class MoreContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back,
            hid: false
        };
    }
    componentWillMount() {
        return __awaiter(this, void 0, void 0, function* () {
            const { status } = yield Permissions.askAsync(Permissions.CAMERA);
            this.setState({ hasCameraPermission: status === 'granted' });
        });
    }
    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return React.createElement(View, null);
        }
        else if (hasCameraPermission === false) {
            return React.createElement(Text, null, "No access to camera");
        }
        else {
            return (React.createElement(View, { style: { flex: 1 } },
                React.createElement(Button, { title: "\u6253\u5F00\u6444\u50CF\u673A", onPress: () => {
                        this.setState({
                            hid: !this.state.hid
                        });
                    } }),
                this.state.hid &&
                    React.createElement(Camera, { style: { flex: 1 }, type: this.state.type, ref: (el) => this.camera = el },
                        React.createElement(View, { style: {
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                            } },
                            React.createElement(TouchableOpacity, { style: {
                                    flex: 0.1,
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                }, onPress: () => {
                                    this.setState({
                                        type: this.state.type === Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back,
                                    });
                                } },
                                React.createElement(Text, { style: { fontSize: 18, marginBottom: 10, color: 'white' } },
                                    ' ',
                                    "\u53CD\u8F6C",
                                    ' ')),
                            React.createElement(TouchableOpacity, { style: {
                                    flex: 0.1,
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                }, onPress: () => {
                                    this.setState({
                                        hid: !this.state.hid
                                    });
                                } },
                                React.createElement(Text, { style: { fontSize: 18, marginBottom: 10, color: 'white' } },
                                    ' ',
                                    "\u5173\u95ED",
                                    ' '))))));
        }
    }
}
//# sourceMappingURL=moreContainer.js.map