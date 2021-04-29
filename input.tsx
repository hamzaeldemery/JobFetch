import React, { FC } from 'react';
import { StyleSheet,TextInput, View,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


interface Props {
    icon: string;
    placeholder:string;
    onChangeText: (text: string) => void;
};

const Input: FC<Props> = (props) => {
    return (
      <View style = {styles.container}>
        <View style = {styles.iIcon}>
          <Ionicons 
            style = {{padding: 5}}
            name = {props.icon}
            size = {24}
            color = "black"
          />
        </View>
        <View style = {styles.tInp}>
          <TextInput 
            style = {{padding: 5}}
            placeholder = {props.placeholder}
            onChangeText = {props.onChangeText}
          />
        </View>
      </View>
    );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#aaa',
    flexDirection: 'row',
  },
  iIcon: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  tInp: {
    flex: 1,
    justifyContent: "center",
  },
  
});
    