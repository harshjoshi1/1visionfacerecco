import React from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {NavigationScreenProp} from 'react-navigation';
import DropDownPicker from './components/DropDownPicker';

export interface Props {
  navigation: NavigationScreenProp<any, any>;
}

interface State {
  language: String;
  PickerValues: Array;
}

export default class DropDown extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      language: 'java',
      PickerValues: [
        {
          title: '3 pillar global',
          value: '3 pillar global',
        },
      ],
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          padding: 20,
        }}>
        <View style={{marginTop: 50, borderColor: 'lightgrey', borderWidth: 1}}>
          <DropDownPicker
            selectValue={this.state.language}
            navigate={() =>
              this.props.navigation.navigate('VisitScreen')
            }></DropDownPicker>
        </View>
      </View>
    );
  }
}
