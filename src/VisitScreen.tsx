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

export default class VisitScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          flex: 1,
        }}
        style={{flex: 1, backgroundColor: '#F9F9F9'}}>
        <Text style={{fontSize: 22, fontWeight: 'bold', alignSelf: 'center'}}>
          Welcome to Jusbilant Life Science
        </Text>
        <Image
          style={{height: 200, width: 200, alignSelf: 'center'}}
          source={{
            uri: 'https://csrbox.org/company/cmp_logo/1506057652jubcad_b.jpg',
          }}></Image>
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginTop: 25,
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('CameraScreen')}
            style={{
              height: 50,
              width: 150,
              backgroundColor: '#1DA2E5',
              marginEnd: 30,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text style={{alignSelf: 'center', color: 'white', fontSize: 16}}>
              Checkin
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('UserDetails')}
            style={{
              height: 50,
              width: 150,
              backgroundColor: '#ffffff',
              borderWidth: 0.7,
              borderColor: 'lightgrey',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text style={{alignSelf: 'center', color: 'black', fontSize: 16}}>
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            height: 50,
            width: 150,
            backgroundColor: '#ffffff',
            borderWidth: 0.7,
            borderColor: 'lightgrey',
            justifyContent: 'center',
            marginTop: 20,
            alignSelf: 'center',
            flexDirection: 'row',
          }}>
          <Image
            style={{height: 20, width: 20, marginEnd: 10, alignSelf: 'center'}}
            source={require('./assets/qr.png')}></Image>
          <Text style={{alignSelf: 'center', color: 'black', fontSize: 16}}>
            Use QR
          </Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', position: 'absolute', bottom: 17}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Settings')}
            style={{
              height: 40,
              width: 40,
              justifyContent: 'center',
              marginStart: 20,
              borderColor: 'lightgrey',
              borderWidth: 1,
              borderRadius: 50,
            }}>
            <Image
              style={{
                alignSelf: 'center',
                height: 25,
                width: 25,
                resizeMode: 'contain',
              }}
              source={require('./assets/settings.png')}
            />
          </TouchableOpacity>
          <Text style={{alignSelf: 'center', marginStart: 10}}>
            Powered by 1upvms
          </Text>
        </View>
      </ScrollView>
    );
  }
}
