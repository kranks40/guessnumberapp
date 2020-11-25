import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import Card from '../components/Card';

const StartGameScreen = (props) => {
    const [ enteredValue, setEnteredValue ] = useState('');
    const [ confirmed, setConfirmed ] = useState(false);
    const [ selectedNumber, setSelectedNumber ] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    };

    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chooseNumber = parseInt(enteredValue)
        if ( isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99)
        Alert.alert('Invalid input', 
        'Please enter values between 1 - 99', 
        [{text: 'Okay', style: "destructive", onPress: resetInputHandler }]
        )
        return;
    

        setConfirmed(true);
        setEnteredValue('');
        setSelectedNumber(chooseNumber);
    };


    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
            <View style={styles.startScreen}>
                <Text style={styles.startScreen__title}>Start a new Game</Text>

                <Card style={styles.startScreen__input}>
                    <Text>Select a Number</Text>
                    <TextInput {...props}
                    style={styles.startScreen__textInput}
                    keyboardType='numeric' maxLength={2} 
                    selectTextOnFocus={true} 
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                    />

                    <View style={styles.startScreen__button}>
                        <View style={styles.reset__button}>
                        <Button title='Reset' color='#b12704' onPress={resetInputHandler} />
                        </View>
                        <View style={styles.confirm__button}>
                        <Button title='Confirm' color='#f2ae59' onPress={confirmInputHandler} />
                        </View>
                        
                        
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    startScreen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },

    startScreen__title: {
        fontSize: 20,
        marginVertical: 10,
    },

    startScreen__button: {
        flexDirection: "row",
        width: '100%',
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },

    reset__button: {
        width: '40%'
    },

    confirm__button: {
        width: '40%'
    },

    startScreen__input: {
        width: 300,
        maxWidth: 800,
        alignItems: "center",
    },

    startScreen__textInput: {
        width: 80,
        borderWidth: 1,
        textAlign: "center",
        marginVertical: 20,
    }
    
})

export default StartGameScreen;

