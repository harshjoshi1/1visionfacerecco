import React from 'react';
import {Text, View, Image} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<any, any>;
}

export default class splash extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Register');
    }, 2000);
  }

  render() {
    return (
      <View
        style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center'}}>
        <Image
          style={{
            alignSelf: 'center',
            height: 250,
            width: 250,
            resizeMode: 'contain',
            top: 2,
          }}
          source={require('./assets/vision.png')}
        />
      </View>
    );
  }
}
