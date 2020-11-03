import React from 'react';
import {Text, View} from 'react-native';
import {Picker} from '@react-native-community/picker';

const DropDownPicker = ({selectValue, navigate}) => {
  return (
    <Picker
      selectedValue={selectValue}
      style={{height: 50, width: '100%', alignSelf: 'center'}}
      mode="dropdown"
      onValueChange={navigate}>
      <Picker.Item
        label="Select Company Location"
        value="Select Company Location"
      />
      <Picker.Item label="3 pillar global" value="3 pillar global" />
      <Picker.Item label="ABC Company" value="ABC Company" />
      <Picker.Item label="AIMT" value="AIMT" />
      <Picker.Item label="Akp" value="Akp" />
      <Picker.Item label="Alpcord" value="Alpcord" />
      <Picker.Item label="Ambience-Lead-Gen" value="Ambience-Lead-Gen" />
      <Picker.Item
        label="Attendance Managment System"
        value="Attendance Managment System"
      />
      <Picker.Item label="cosmiceye-ams" value="cosmiceye-ams" />
      <Picker.Item label="Courier (GAP)" value="Courier (GAP)" />
      <Picker.Item label="courier test" value="courier test" />
      <Picker.Item label="Data Peace" value="Data Peace" />
      <Picker.Item
        label="Datapeace Dev Testing Space"
        value="Datapeace Dev Testing Space"
      />
      <Picker.Item label="Datapeace trial" value="Datapeace trial" />
      <Picker.Item label="EXL-Sez" value="EXL-Sez" />
      <Picker.Item label="FIITJEEt-Shubham" value="FIITJEEt-Shubham" />
      <Picker.Item label="Indus Tower-AMS" value="Indus Tower-AMS" />
      <Picker.Item label="Indus Tower-VMS" value="Indus Tower-VMS" />
      <Picker.Item
        label="Jubilant Life Sciences - VMS"
        value="Jubilant Life Sciences - VMS"
      />
      <Picker.Item label="Justdial-Shubham" value="Justdial-Shubham" />
      <Picker.Item label="Kids Play Zone" value="Kids Play Zone" />
      <Picker.Item label="Muthoot Group" value="Muthoot Group" />
      <Picker.Item label="OXFORDCAPS-ENTRANCE" value="OXFORDCAPS-ENTRANCE" />
      <Picker.Item label="Park+" value="Park+" />
      <Picker.Item label="Sail" value="Sail" />
    </Picker>
  );
};
export default DropDownPicker;
