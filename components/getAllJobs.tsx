import {ALL_JOBS,JOBS_CITIES} from '../GraphQl/queries'
import React from 'react'
import {useQuery} from '@apollo/client'
import {Text,FlatList} from 'react-native'
import {Item,Loading} from './renderJobs'

interface Props {
    loc: string;
};

export interface Job {
    title:string;
    company: Company;
    tags: Tag[];
    applyUrl: string;
    locationNames: string;
};

interface Company{
    name: string;
};
export interface Tag{
    name:string;
}

export let job:Job[]  = []

export const GetJobs = (props) =>{
    if(props.loc.length == 0){    
        const {error, loading,data} = useQuery(ALL_JOBS,{
            variables:{}
        }); 
        useQuery(JOBS_CITIES,{
            variables: {}
        });
        if(loading)return <Loading/>;
        if(data){
            job = data.jobs;
        }else{
            return <Text>Error</Text>
        }
    }else{
        useQuery(ALL_JOBS,{
            variables:{}
        });   
        const {error, loading,data} = useQuery(JOBS_CITIES,{
            variables: {where:props.loc}
        });
        if(loading)return  <Loading/>;
        if(data){
            job = [];
            console.log(data)
            for(let city of data.countries){
                if(city.cities.length > 0){
                    job  = job.concat(city.cities[0].jobs);
                }
            }
        }
    }
    return  <FlatList data = {job} renderItem = {({item}) =>
              <Item applyUrl = {item.applyUrl} title = {item.title} company = {item.company} tags = {item.tags} locationNames = {item.locationNames}/>
            }></FlatList>
}
