import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<any, any>;
}

interface State {
  passshow: Boolean;
  email: String;
  password: String;
  language: String;
}

export default class ForgetPassword extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      passshow: true,
      email: '',
      password: '',
      language: '',
    };
  }

  onPressCall = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.email === '') {
      alert('Need Correct Email!');
    } else {
      if (reg.test(this.state.email) === false) {
        alert('Need Correct Email!');
      } else {
        this.props.navigation.navigate('Register');
      }
    }
  };

  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
        style={{flex: 1, backgroundColor: '#2AAAE2'}}>
        <View
          style={{
            width: '89%',
            backgroundColor: 'white',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              alignSelf: 'center',
              height: 150,
              width: 150,
              resizeMode: 'contain',
            }}
            source={require('./assets/vision.png')}
          />
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 18,
              bottom: 15,
              maxWidth: 300,
              textAlign: 'center',
            }}>
            {' '}
            Enter your registered email to reset your password!
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              value={this.state.email}
              placeholder="Email"
              onChangeText={(text) => this.setState({email: text})}
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
                width: '80%',
                padding: 10,
                alignSelf: 'center',
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() => this.onPressCall()}
            style={{
              height: 45,
              width: '80%',
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 20,
              backgroundColor: '#2AAAE2',
            }}>
            <Text style={{alignSelf: 'center', color: 'white'}}>Send Mail</Text>
          </TouchableOpacity>

          <Text
            onPress={() => this.props.navigation.goBack()}
            style={{
              alignSelf: 'center',
              marginTop: 30,
              marginBottom: 30,
              fontSize: 16,
              color: '#2AAAE2',
            }}>
            Sign in
          </Text>
        </View>
      </ScrollView>
    );
  }
}
