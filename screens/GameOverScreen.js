import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const GameOverScreen = (props) => {
    return (
        <View style={styles.gameOver}>
            <Text>The Game is Over</Text>
            <Text>Number of rounds: {props.roundNumber}</Text>
            <Text>Number of was: {props.userNumber}</Text>
            <Button title='New Game' onPress={props.onRestart}/> 
        </View>
    );
}

const styles = StyleSheet.create({
    gameOver: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    
})

export default GameOverScreen;
