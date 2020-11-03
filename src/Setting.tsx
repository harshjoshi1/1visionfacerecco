import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Switch,
  ScrollView,
  FlatList,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {NavigationScreenProp} from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<any, any>;
}

interface State {
  mode: '';
  uploading: Boolean;
  usercamera: Boolean;
  environmentcamera: Boolean;
  grant: Boolean;
}

export default class Setting extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      mode: '',
      uploading: false,
      usercamera: true,
      environmentcamera: false,
      grant: false,
    };
  }

  renderItem = ({item, index}) => {
    return (
      <View
        style={{
          borderColor: '#2AAAE2',
          height: 40,
          width: 120,
          justifyContent: 'center',
          borderWidth: 1,
        }}>
        <Text style={{color: '#2AAAE2', alignSelf: 'center', fontSize: 12}}>
          {item.text}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{
              marginStart: 10,
              height: 80,
              width: 100,
              resizeMode: 'contain',
            }}
            source={require('./assets/vision.png')}
          />
          <Text style={{fontSize: 25, alignSelf: 'center', marginStart: 20}}>
            Settings
          </Text>
        </View>

        <View
          style={{
            elevation: 5,
            marginBottom: 10,
            width: '95%',
            backgroundColor: 'white',
            alignSelf: 'center',
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 10,
            }}>
            <Text style={{fontSize: 18}}>Organization:</Text>
            <Text style={{fontSize: 18}}>Data Peace AI</Text>
          </View>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: 3,
              backgroundColor: 'lightgrey',
              height: 1,
            }}></View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 10,
            }}>
            <Text style={{fontSize: 18}}>Space:</Text>
            <Text style={{fontSize: 16}}>Jubiliant Life Sciences - VMS </Text>
            <Text style={{color: '#2AAAE2', fontWeight: 'bold'}}>Change</Text>
          </View>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: 3,
              backgroundColor: 'lightgrey',
              height: 1,
            }}></View>
          <View
            style={{
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <Text style={{fontSize: 18}}>Change facing:</Text>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginTop: 10,
              }}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({environmentcamera: false, usercamera: true})
                }
                style={{
                  borderColor:
                    this.state.usercamera === false ? 'grey' : '#2AAAE2',
                  height: 40,
                  width: 120,
                  justifyContent: 'center',
                  borderWidth: 1,
                }}>
                <Text
                  style={{
                    color: this.state.usercamera === false ? 'grey' : '#2AAAE2',
                    alignSelf: 'center',
                    fontSize: 12,
                  }}>
                  User (Front camera)
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  this.setState({environmentcamera: true, usercamera: false})
                }
                style={{
                  borderColor:
                    this.state.environmentcamera === false ? 'grey' : '#2AAAE2',
                  height: 40,
                  width: 200,
                  justifyContent: 'center',
                  borderWidth: 1,
                }}>
                <Text
                  style={{
                    color:
                      this.state.environmentcamera === false
                        ? 'grey'
                        : '#2AAAE2',
                    alignSelf: 'center',
                  }}>
                  Environment (Rear Camera)
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 10,
              padding: 5,
            }}>
            <Text style={{fontSize: 16}}>Compress image before uploading:</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={'#f4f3f4'}
              onValueChange={() =>
                this.setState({
                  uploading: this.state.uploading === true ? false : true,
                })
              }
              value={this.state.uploading}
              ios_backgroundColor="#3e3e3e"
            />
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              height: 50,
              padding: 5,
            }}>
            <Text style={{fontSize: 16, alignSelf: 'center'}}>VMS Mode:</Text>
            <View
              style={{
                width: '50%',
                alignSelf: 'center',
                borderWidth: 1,
                borderColor: 'lightgrey',
              }}>
              <Picker
                selectedValue={this.state.mode}
                style={{
                  width: '100%',
                  alignSelf: 'center',
                  borderWidth: 1,
                  borderColor: 'grey',
                }}
                mode="dropdown"
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({mode: itemValue})
                }>
                <Picker.Item label="Normal Mode" value="Normal Mode" />
                <Picker.Item label="Capture Mode" value="Capture Mode" />
                <Picker.Item label="Auto Capture" value="Auto Capture" />
                <Picker.Item label="No Select" value="No Select" />
              </Picker>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 10,
              padding: 5,
            }}>
            <Text style={{fontSize: 16}}>PMS Code:</Text>
            <View
              style={{
                borderColor: 'lightgrey',
                height: 40,
                width: 200,
                justifyContent: 'center',
                borderWidth: 1,
              }}>
              <TextInput
                placeholder="Put the same code as used in PMA"
                style={{color: 'lightgrey', alignSelf: 'center'}}></TextInput>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 10,
              padding: 5,
              marginBottom: 20,
            }}>
            <Text style={{fontSize: 16}}>Grant GeoLocation Permission:</Text>
            <TouchableOpacity
              onPress={() =>
                this.setState({grant: this.state.grant === true ? false : true})
              }
              style={{
                borderColor:
                  this.state.grant === true ? '#2AAAE2' : 'lightgrey',
                height: 40,
                width: 100,
                marginEnd: 10,
                justifyContent: 'center',
                borderWidth: 1,
              }}>
              <Text
                style={{
                  color: this.state.grant === true ? '#2AAAE2' : 'lightgrey',
                  alignSelf: 'center',
                }}>
                Grant
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
