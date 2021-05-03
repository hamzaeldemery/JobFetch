import {Job,Tag} from '../components/getAllJobs'
import {View,Text, StyleSheet,ActivityIndicator,FlatList, Button, Linking} from 'react-native'
import React, {FC, useEffect, useState} from 'react';


export const Item: FC<Job>  = (props) => {
    const [tgs,setTgs] = useState<Tag[]>([]);
    useEffect(() => {
        setTgs(props.tags)
    },[])
    let req = [];
    for(let i = 0 ; i < tgs.length ; ++i){
        req.push(
            <Tags tg = {tgs[i].name}/>
        )
    }
    return(
        <View style = {styles.container}>
            <View style = {styles.contTitle}>
                <View style = {styles.title}>
                    <h4>{props.title}</h4>
                </View>
                <View style = {styles.comp}>
                    <h5 >{props.company.name}</h5>
                </View>
            </View>
            <View style = {styles.contTagsLoc}>    
                <View style={styles.tag}>
                    {req}
                </View>
                <View>
                    <h5>{(props.locationNames) == null?"Remote":props.locationNames}</h5>
                </View>
            </View>
            <View>
                <Button onPress = {() => Linking.openURL(props.applyUrl)} title = "Apply"/>
            </View>
        </View>
    )
}

const Tags = (props) => {
    return(
        <Text>{props.tg}</Text>
    )
}

export const Loading = () =>{
    return(
        <ActivityIndicator style = {styles.loader} size="large" color="#0000ff" />
    )
}


const styles = StyleSheet.create({
    container: {
      borderBottomWidth:2,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomColor: '#aaa',
      flexDirection: 'row',
      width:innerWidth,
      padding:20
    },
    contTitle: {
        width:innerWidth/2,
        flexDirection: 'column',
        textAlign:'left',
        marginRight:'auto',
    },
    title: {
        paddingBottom:1,
        fontSize: 15,
    },
    comp:{
        color:'grey'
    },
    loader:{
        flex:1,
        justifyContent: "center"
    },
    tag: {
        width:innerWidth/(4),
        marginRight:'auto',
    },
    contTagsLoc:{
        flexDirection: 'column',
    }
  });

