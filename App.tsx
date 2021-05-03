import React, { useState } from 'react';
import { StyleSheet,View } from 'react-native';
import Input  from './components/input';
import { ApolloClient, InMemoryCache, ApolloProvider,HttpLink,from } from '@apollo/client';
import {onError} from '@apollo/client/link/error'

import {GetJobs} from './components/getAllJobs'


const cache = new InMemoryCache()
const link = from([new HttpLink({uri: 'https://api.graphql.jobs/'})])

const errorLink = onError((Err) => {
  if(Err.graphQLErrors){
    Err.graphQLErrors.map(({message,path}) => {
      alert(`GraphQL error ${message}`)
    })
  }
})



const client = new ApolloClient({
  link, 
  cache
});
console.log(client);

export default function App(){
  const [inputValue, setInputValue] = useState<string>("");  
  return(
    <ApolloProvider client = {client}>
      <View style = {styles.inp}>
      <Input
        icon = "md-search"
        placeholder = "Location"
        onChangeText={(
          text
      ): void => setInputValue(text)}
      /></View>
      {" "}
      <GetJobs loc = {inputValue}/>
    </ApolloProvider>
  )
}

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
  },
  inp: {
    top:10,
  }
});

