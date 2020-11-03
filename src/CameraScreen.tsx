import React from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import {RNCamera, FaceDetector} from 'react-native-camera';

export interface Props {
  navigation: NavigationScreenProp<any, any>;
}

interface State {
  mirrorMode: String;
  canDetectFaces: String;
}

export default class CameraScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      mirrorMode: '',
      canDetectFaces: false,
    };
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera
      .capture({metadata: options})
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }

  facesDetected = ({faces}) => {
    console.log('got irr', faces);
    this.props.navigation.navigate('UserDetails');
  };

  render() {
    return (
      <RNCamera
        ref={(cam) => {
          this.camera = cam;
        }}
        type="front"
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        whiteBalance="auto"
        autoFocus="on"
        whiteBalance="auto"
        mirrorImage={true}
        faceDetectionLandmarks={
          RNCamera.Constants.FaceDetection.Landmarks
            ? RNCamera.Constants.FaceDetection.Landmarks.all
            : undefined
        }
        onFacesDetected={(faces) => this.facesDetected(faces)}
        // aspect={RNCamera.Constants.Aspect.fill}
        style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <Text onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
      </RNCamera>
    );
  }
}
