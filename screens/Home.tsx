import React, { useState, useCallback } from 'react';
import { View, StyleSheet,TextInput, Alert, Platform, ActivityIndicator } from 'react-native';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { fetchCountry } from '../store/action/countryActions';
import colors from '../constants/colors';
import CustomButton from '../components/Button';

type Props = {
    navigation: {
        navigate: Function
    }
}

const Home : React.FC<Props> = ({navigation})=> {
    const [disabled,setDisabled] = useState(true);
    const [input,setInput] = useState('');
    const [isLoading,setLoading] = useState(false);

    const dispatch: Dispatch = useDispatch();
    const onSubmit = async () =>{
        try{
            setLoading(true);
            await dispatch<any>(fetchCountry(input));
            setLoading(false);
            navigation.navigate('country');
        }catch(err){
            setLoading(false);
            Alert.alert("Error",err.message,[{
                text: "Okay"
            }]);
        }
        
    }
    const onChangeHandler = useCallback((text:string) => {
        setInput(text);
        if(text != ''){
            setDisabled(false);
        }else{
            setDisabled(true);
        }
    },[setInput]); 
    
    return (
        <View style={styles.container}>
            <TextInput placeholder="Enter Country" value={input} onChangeText={onChangeHandler} style={styles.input}/>
            { isLoading ? <ActivityIndicator color={colors.primaryColor} size="small"/> 
            : <CustomButton title="Submit"
             onPress={onSubmit} 
             disabled={disabled}
             buttonStyle={{}}
             />
            }
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
    input: {
        width: "80%",
        marginBottom: 20,
        padding: 15,
        borderColor: colors.accentColor,
        borderRadius: 5,
        borderWidth: 2
    }
})
export default Home;