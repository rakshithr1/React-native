import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../types/types';
import colors from '../constants/colors';

type Props = {
    navigation: {
        navigate: Function
    }
}
const Capital : React.FC<Props> = ({navigation})=> {
    const capital = useSelector((state:RootState)=> state.capital.capital);
    return (
        <View style={styles.container}>
            <Text><Text style={styles.titleText}>Temperature: </Text>{capital.temperature}</Text>
            <Text><Text style={styles.titleText}>Precipitation: </Text>{capital.precip}</Text>
            <Text><Text style={styles.titleText}>Wind Speed: </Text>{capital.wind_speed}</Text>
            <Image style={styles.image} source={{uri: capital.weather_icons[0]}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    titleText: {
        fontWeight: 'bold',
        color: colors.primaryColor
    },
    image: {
        height: 100,
        width: 100
    }
})
export default Capital;