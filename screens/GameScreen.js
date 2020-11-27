import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import Card from '../components/Card';

const generateNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if ( rndNum === exclude) {
        return generateNumber(min, max, exclude);
    } else {
        return rndNum;
    }
};

const GameScreen = (props) => {
    const [ currentGuess, setCurrentGuess ] = useState(
        generateNumber(1, 100, props.userChoice));

        const [ rounds, setRounds ] = useState(0);
        const currentLow = useRef(1);
        const currentHigh = useRef(100);

        const { userChoice, onGameOver } = props;

        useEffect(() => {
            if ( currentGuess === userChoice) {
                onGameOver(rounds);
            }
        }, [currentGuess, userChoice, onGameOver]);


        const nextGuessHandler = direction => {
            if (
                (direction === 'lower' && currentGuess < props.userChoice) || 
                (direction === 'greater' && currentGuess > props.userChoice)
                ) {
            Alert.alert('Please don\'t lie!', 'Press the correct button...', [
                {text: 'sorry', style: "cancel"}
            ]);
            return
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateNumber(
            currentLow.current, 
            currentHigh.current, 
            currentGuess
            ); 
            setCurrentGuess(nextNumber);
            setRounds(curRounds => curRounds + 1);
        };     

    return (
        <View style={styles.screen}>
            <Text> Player's Guess</Text>

            <View style={styles.text__select}>
                <Text style={styles.number}>{currentGuess}</Text>
            </View>
            <Card style={styles.buttonContainer}>
                
                <Button title='Lower' color='#82D9E3' onPress={nextGuessHandler.bind(this,'lower')} />
                
                <Button title='Higher' color='#696661' onPress={nextGuessHandler.bind(this, 'Higher')} />
            
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },

    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        width: '300',
        maxWidth: '80%'
    }
})

export default GameScreen;
