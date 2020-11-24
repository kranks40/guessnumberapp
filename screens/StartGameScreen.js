import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import Card from '../components/Card';

const StartGameScreen = (props) => {
    return (
        <View style={styles.startScreen}>
            <Text style={styles.startScreen__title}>Start a new Game</Text>

            <Card style={styles.startScreen__input}>
                <Text>Select a Number</Text>
                <TextInput {...props} style={styles.startScreen__textInput} keyboardType='numeric' maxLength={2} selectTextOnFocus={true} />

                <View style={styles.startScreen__button}>
                    <View style={styles.reset__button}>
                    <Button title='Reset' color='#b12704' onPress={() => {}} />
                    </View>
                    <View style={styles.confirm__button}>
                    <Button title='Confirm' color='#f2ae59' onPress={() => {}} />
                    </View>
                    
                    
                </View>
            </Card>
        </View>
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

