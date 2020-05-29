import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, Alert, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, Country } from '../types/types';
import { Dispatch } from 'redux';
import { fetchCountry } from '../store/action/countryActions';
import Card from '../components/Card';

type Props = {
    navigation: {
        navigate: Function
    }
}
const CountryComponent : React.FC<Props> = ({navigation})=> {
    const [isRefreshing,setRefreshing] = useState(false);
    const countries: Country[] = useSelector((state:RootState)=> state.country.countries);
    const dispatch: Dispatch = useDispatch();
    const refreshData = useCallback(async() => {
        try{
            setRefreshing(true);
            await dispatch<any>(fetchCountry());
            setRefreshing(false);
        }catch(err){
            setRefreshing(false);
            Alert.alert("Error",err.message,[{
                text: "Okay"
            }]);
        }
    },[dispatch])
    return (
        <View style={styles.container}>
            <FlatList data={countries} renderItem={({item})=>{
                return <Card country={item}/>
            }}
            keyExtractor={(item)=>{
                return item.name;
            }}
            refreshing={isRefreshing}
            onRefresh={refreshData}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 15
    },
    listContainer: {
        alignItems: "center"
    }
});

export default CountryComponent;