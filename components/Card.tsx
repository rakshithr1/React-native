import React, { useCallback } from 'react';
import { StyleSheet, TouchableOpacity, Alert, Text  } from 'react-native';
import colors from '../constants/colors';
import { Country } from '../types/types';
import { useNavigation } from '@react-navigation/native';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { fetchCapital } from '../store/action/capitalActions';
import CustomButton from './Button';
import { SvgUri } from 'react-native-svg';
type Props = {
    country: Country
}
const Card: React.FC<Props> = ({country}) => {
    const navigation = useNavigation();
    const dispatch: Dispatch = useDispatch();
    const onPressHandler = useCallback(async() => {
        try{
            await dispatch<any>(fetchCapital(country.capital));
            navigation.navigate('capital');
        }catch(err){
            Alert.alert("Error",err.message,[{
                text: "Okay"
            }]);
        }
    },[dispatch])
    return (
        <TouchableOpacity style={styles.container} onPress={onPressHandler}>
            <Text><Text style={styles.titleText}>Name: </Text>{country.name}</Text>
            <Text><Text style={styles.titleText}>Capital: </Text>{country.capital}</Text>
            <Text><Text style={styles.titleText}>Population: </Text>{country.population}</Text>
            <Text><Text style={styles.titleText}>Lat and Lang: </Text>{country.latlng[0] + " , " + country.latlng[1]}</Text>
            <SvgUri
                width="100"
                height="100"
                uri={country.flag}
            />
            <CustomButton buttonStyle={{width: "70%",marginVertical: 10}} disabled={false} title="Capital Weather" onPress={onPressHandler}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontWeight: 'bold',
        color: colors.primaryColor
    },
    container: {
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: {
            height: 2,
            width: 2
        },
        elevation: 2,
        borderRadius: 5,
        padding: 20,
        borderWidth: 2,
        borderColor: colors.accentColor,
        marginVertical: 10,
        backgroundColor: "white",
        alignItems: 'center',
        minWidth: "80%"
    }
});

export default Card;