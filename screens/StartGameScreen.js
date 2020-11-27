import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import Card from '../components/Card';

const StartGameScreen = (props) => {
    const [ enteredValue, setEnteredValue ] = useState('');
    const [ confirmed, setConfirmed ] = useState(false);
    const [ selectedNumber, setSelectedNumber ] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid input', 
            'Please enter values between 1 - 99',
             [{text: 'Okay', style: "destructive", 
             onPress: resetInputHandler }]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    }

    
        let confirmedOutput;
    
        if (confirmed) {
           confirmedOutput = (
                <Card style={styles.summary}>
                    <Text>You have Selected</Text>
                    <View style={styles.text__select}>
                        <Text style={styles.number}>{selectedNumber}</Text>
                    </View>
                    <Button title='Start Game' onPress={() => props.onStartGame(selectedNumber)} />
                </Card>
           );
       }   

     


    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
            <View style={styles.startScreen}>
                <Text style={styles.startScreen__title}>Start a new Game</Text>

                <Card style={styles.startScreen__input}>
                    <Text>Select a Number</Text>
                    <TextInput {...props}
                    style={styles.startScreen__textInput}
                    keyboardType='numeric'
                    maxLength={2} 
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
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
        )
    };

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
    },

    summary: {
        marginTop: 20,
        alignItems: "center",
    },

    text__select: {
        borderWidth: 2,
        borderColor: '#032437',
        padding: 10,
        borderRadius: 10,
        marginVertical: 20,
        alignItems: "center",
        justifyContent: "center",
    },

    number: {
        color: '#fcdb6c' ,
        fontSize: 22,
    }
    
});

export default StartGameScreen;

