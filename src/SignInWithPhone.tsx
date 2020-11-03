import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {NavigationScreenProp} from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<any, any>;
}

interface State {
  passshow: Boolean;
  mobile: String;
  password: String;
  language: String;
}

export default class SignInWithPhone extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      passshow: true,
      mobile: '',
      password: '',
      language: '',
    };
  }

  onPressCall = () => {
    if (this.state.mobile < 10) {
      alert('Need To Fill 10 Number Atleast!');
    } else {
      this.props.navigation.navigate('DropDown');
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
          <Text style={{alignSelf: 'center', fontSize: 20, bottom: 20}}>
            {' '}
            Sign in to continue
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderColor: 'lightgrey',
                borderWidth: 1,
                height: 50,
                width: '30%',
              }}>
              <Picker
                selectedValue={this.state.language}
                contentContainerStyle={{
                  borderColor: 'lightgrey',
                  borderWidth: 1,
                }}
                style={{
                  height: 50,
                  width: '100%',
                  alignSelf: 'center',
                  borderColor: 'lightgrey',
                  borderWidth: 1,
                }}
                mode="dropdown"
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({language: itemValue})
                }>
                <Picker.Item label="+91" value="India" />
                <Picker.Item label="+11" value="USA" />
                <Picker.Item label="+18" value="China" />
              </Picker>
            </View>

            <TextInput
              value={this.state.mobile}
              placeholder="Mobile no. without prefix"
              onChangeText={(text) => this.setState({mobile: text})}
              keyboardType="numeric"
              maxLength={10}
              style={{
                borderColor: 'lightgrey',
                borderWidth: 1,
                width: '50%',
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
            <Text style={{alignSelf: 'center', color: 'white'}}>Send OTP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Register')}
            style={{
              height: 45,
              width: '55%',
              justifyContent: 'center',
              alignSelf: 'center',
              borderWidth: 1,
              flexDirection: 'row',
              marginTop: 24,
              borderColor: 'lightgrey',
            }}>
            <Image
              style={{
                height: 25,
                width: 25,
                resizeMode: 'contain',
                marginEnd: 10,
                alignSelf: 'center',
              }}
              source={require('../src/assets/phone.png')}
            />

            <Text style={{alignSelf: 'center', color: 'black'}}>
              Sign-in with email
            </Text>
          </TouchableOpacity>
          <Text style={{alignSelf: 'center', fontSize: 20, marginTop: 10}}>
            Or
          </Text>
          <View
            style={{
              height: 45,
              width: '45%',
              justifyContent: 'center',
              alignSelf: 'center',
              borderWidth: 1,
              marginTop: 15,
              borderColor: 'lightgrey',
              flexDirection: 'row',
            }}>
            <Image
              style={{
                height: 25,
                width: 25,
                resizeMode: 'contain',
                marginEnd: 10,
                alignSelf: 'center',
              }}
              source={require('../src/assets/search.png')}
            />
            <Text style={{alignSelf: 'center', color: 'black'}}>
              Single Sign-on
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              marginTop: 20,
              marginBottom: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              onPress={() => this.props.navigation.navigate('ForgetPassword')}
              style={{
                alignSelf: 'center',
                color: 'black',
                color: '#2AAAE2',
                fontWeight: 'bold',
                marginEnd: 20,
              }}>
              Forgot password
            </Text>
            <View
              style={{
                height: 20,
                backgroundColor: 'lightgrey',
                width: 2,
              }}></View>
            <Text
              style={{
                alignSelf: 'center',
                color: '#2AAAE2',
                marginStart: 20,
                fontWeight: 'bold',
              }}>
              Create an account
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
