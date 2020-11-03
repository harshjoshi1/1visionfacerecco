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
import GetLocation from 'react-native-get-location';

export interface Props {
  passshow: true;
  email: '';
  password: '';
  navigation: NavigationScreenProp<any, any>;
}

interface State {
  passshow: boolean;
  email: string;
  password: string;
}

export default class Register extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      passshow: true,
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then((location) => {
        console.log(location);
      })
      .catch((error) => {
        const {code, message} = error;
        console.warn(code, message);
      });
  }

  onPressCall = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.email === '' || this.state.password === '') {
      alert('Need To Fill All Fields!');
    } else {
      if (reg.test(this.state.email) === false) {
        alert('Need Correct Email!');
      } else if (this.state.password.length < 6) {
        alert('Need Password Atleast 6 Charactor!');
      } else {
        this.props.navigation.navigate('DropDown');
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
          <Text style={{alignSelf: 'center', fontSize: 20, bottom: 20}}>
            {' '}
            Sign in to continue
          </Text>
          <TextInput
            value={this.state.email}
            placeholder="Enter email"
            onChangeText={(text) => this.setState({email: text})}
            style={{
              borderBottomColor: 'lightgrey',
              borderBottomWidth: 1,
              width: '80%',
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              marginStart: 35,
            }}>
            <TextInput
              placeholder="Password"
              value={this.state.password}
              onChangeText={(text) => this.setState({password: text})}
              secureTextEntry={this.state.passshow === true ? true : false}
              style={{
                flex: 1,
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
                marginTop: 15,
                alignSelf: 'center',
              }}
            />
            <TouchableOpacity
              style={{
                end: 30,
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() =>
                this.setState({
                  passshow: this.state.passshow === true ? false : true,
                })
              }>
              {this.state.passshow === false ? (
                <Image
                  style={{
                    height: 25,
                    width: 25,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  }}
                  source={require('../src/assets/eyeone.png')}
                />
              ) : (
                <Image
                  style={{
                    height: 25,
                    width: 25,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  }}
                  source={require('../src/assets/eyeoff.png')}
                />
              )}
            </TouchableOpacity>
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
            <Text style={{alignSelf: 'center', color: 'white'}}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignInWithPhone')}
            style={{
              height: 45,
              width: '65%',
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
              Sign-in with phone number
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
                fontWeight: 'bold',
                marginStart: 20,
              }}>
              Create an account
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
