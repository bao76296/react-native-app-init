import React , { Component } from 'react';

import { Text, View, TouchableOpacity, Button } from 'react-native';
import { Camera, Permissions ,FileSystem } from 'expo';


interface props {

}
interface state{
    hasCameraPermission : any,
    type : any,
    hid : boolean
}


export default class MoreContainer extends Component<props, state> {
      camera: any
        constructor (props:any) {
            super (props)
            this.state = {
                hasCameraPermission: null,
                type: Camera.Constants.Type.back,
                hid : false
              };
            
        }
      async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
      }
    
      render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
          return <View />;
        } else if (hasCameraPermission === false) {
          return <Text>No access to camera</Text>;
        } else {
          return (
            <View style={{ flex: 1 }}>
              <Button
                title= "打开摄像机"
                onPress ={ () => {
                  this.setState ({
                    hid : !this.state.hid
                  })
                }}
              ></Button>
              {
                this.state.hid &&  
                
                <Camera style={{ flex: 1 }} type={this.state.type} ref = { (el:any) => this.camera = el}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity
                    style={{
                      flex: 0.1,
                      alignSelf: 'flex-end',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      this.setState({
                        type: this.state.type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back,
                      });
                    }}>
                    <Text
                      style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                      {' '}反转{' '}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flex: 0.1,
                      alignSelf: 'flex-end',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      this.setState({
                        hid: !this.state.hid
                      });
                    }}>
                    <Text
                      style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                      {' '}关闭{' '}
                    </Text>
                  </TouchableOpacity>
                  {/* <TouchableOpacity
                        style={{
                            flex: 0.1,
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                        }}
                        onPress={async () => {
                            let data = await this.camera.takePictureAsync({})
                            await FileSystem.getInfoAsync({
                              
                            })
                            alert(JSON.stringify(data))
                        }}>
                        <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                            拍照
                        </Text>
                    </TouchableOpacity> */}
                </View>
              </Camera>
              }
            </View>
          );
        }
      }
}