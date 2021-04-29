import React, { Component, FC } from 'react';
import { StyleSheet, Text, TextInput, View, ImageBackground, Image } from 'react-native';
import Input  from './input';




const jobSearch = () => {
  return(
    <View style = {styles.container}>
      <Input 
        icon = "md-search"
        placeholder = "Search"
        onChangeText = {(text) => console.log(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});

export default jobSearch;