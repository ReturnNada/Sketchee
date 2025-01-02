import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            source={require("../assets/favicon.png")}
            style={styles.background}
        >
            <View style={styles.loginButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end"
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4'
    }
})

export default WelcomeScreen;