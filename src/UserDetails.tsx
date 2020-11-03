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

export default class UserDetails extends React.Component<Props, State> {
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
        style={{flex: 1, backgroundColor: '#f9f9f9'}}>
        <Image
          style={{
            alignSelf: 'center',
            height: 100,
            width: 100,
            position: 'absolute',
            resizeMode: 'contain',
            top: 30,
          }}
          source={{
            uri: 'https://csrbox.org/company/cmp_logo/1506057652jubcad_b.jpg',
          }}
        />
        <View
          style={{
            width: '89%',
            backgroundColor: 'white',
            alignSelf: 'center',
            elevation: 5,
            borderRadius: 3,
            borderTopColor: '#2AAAE2',
            borderTopWidth: 1,
            padding: 15,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 16}}>First Name</Text>
            <Text style={{fontSize: 18, color: 'red'}}> *</Text>
          </View>
          <TextInput
            value={this.state.email}
            placeholder="Nikhil"
            editable={false}
            onChangeText={(text) => this.setState({email: text})}
            style={{
              borderColor: 'lightgrey',
              borderWidth: 1,
              width: '100%',
              alignSelf: 'center',
              marginTop: 7,
              padding: 10,
              fontSize: 18,
              backgroundColor: '#f7f7f7',
            }}
          />
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Text style={{fontSize: 16}}>Last Name</Text>
            <Text style={{fontSize: 18, color: 'red'}}> *</Text>
          </View>
          <TextInput
            editable={false}
            value={this.state.email}
            placeholder="Parmar"
            onChangeText={(text) => this.setState({email: text})}
            style={{
              borderColor: 'lightgrey',
              borderWidth: 1,
              width: '100%',
              alignSelf: 'center',
              marginTop: 7,
              padding: 10,
              fontSize: 18,
              backgroundColor: '#F7F7F7',
            }}
          />
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Text style={{fontSize: 16}}>Mobile Number</Text>
            <Text style={{fontSize: 18, color: 'red'}}> *</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 7}}>
            <View
              style={{
                borderColor: 'lightgrey',
                borderWidth: 1,
                height: 50,
                width: '30%',
                backgroundColor: '#F7F7F7',
              }}>
              <Picker
                selectedValue={this.state.language}
                enabled={false}
                editable={false}
                contentContainerStyle={{
                  borderColor: 'lightgrey',
                  borderWidth: 1,
                  backgroundColor: '#F7F7F7',
                }}
                style={{
                  height: 50,
                  width: '100%',
                  alignSelf: 'center',
                  borderColor: 'lightgrey',
                  borderWidth: 1,
                  color: 'grey',
                }}
                mode="dropdown"
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({language: itemValue})
                }>
                <Picker.Item label="+91" value="India" />
                <Picker.Item label="USA" value="USA" />
                <Picker.Item label="China" value="China" />
              </Picker>
            </View>

            <TextInput
              value={this.state.mobile}
              placeholder="9582824331"
              onChangeText={(text) => this.setState({mobile: text})}
              keyboardType="numeric"
              maxLength={10}
              style={{
                borderColor: 'lightgrey',
                borderWidth: 1,
                width: '70%',
                padding: 10,
                alignSelf: 'center',
                backgroundColor: '#F7F7F7',
                fontSize: 18,
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              marginTop: 15,
              borderWidth: 1,
              borderColor: 'lightgrey',
              padding: 5,
              width: 72,
            }}>
            <Text>Not You?</Text>
          </TouchableOpacity>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('VisitScreen')}
              style={{
                height: 50,
                width: 150,
                backgroundColor: '#fff',
                marginEnd: 30,
                justifyContent: 'center',
                marginTop: 20,
                borderColor: 'lightgrey',
                borderWidth: 1,
                borderRadius: 2,
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  marginStart: 10,
                  alignSelf: 'center',
                  height: 15,
                  width: 15,
                  resizeMode: 'contain',
                  marginEnd: 10,
                }}
                source={require('./assets/backarw.png')}
              />
              <Text
                style={{
                  alignSelf: 'center',
                  color: 'black',
                  fontSize: 16,
                }}>
                Back
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('VisitScreen')}
              style={{
                height: 50,
                width: 150,
                backgroundColor: '#1DA2E5',
                end: 5,
                justifyContent: 'center',
                marginTop: 20,
                borderRadius: 2,
                flexDirection: 'row',
              }}>
              <Text style={{alignSelf: 'center', color: 'white', fontSize: 16}}>
                Continue
              </Text>
              <Image
                style={{
                  marginStart: 10,
                  alignSelf: 'center',
                  height: 15,
                  width: 15,
                  resizeMode: 'contain',
                }}
                source={require('./assets/rightarw.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
