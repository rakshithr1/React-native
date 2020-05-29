import React from 'react';
import { StyleSheet, View, Button  } from 'react-native';
import colors from '../constants/colors';

type Props = {
    title: string,
    disabled: boolean,
    onPress: any,
    buttonStyle?: object
}
const CustomButton: React.FC<Props> = ({title,onPress,disabled,buttonStyle}) => {
    return (
        <View style={styles.buttonContainer}>
            <View style={{...styles.button,...buttonStyle}}>
                <Button title={title} color={colors.primaryColor} disabled={disabled} onPress={onPress}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: "center",
        width: "80%",
    },
    button: {
        width: "40%"
    }
})

export default CustomButton;