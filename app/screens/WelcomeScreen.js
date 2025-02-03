import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
        >
            <View style={styles.loginButton}>
                <Text>Login</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loginButton: {
        width: '50%',
        height: '10%',
        backgroundColor: '#4ecdc4'
    },
    text: {
        justifyContent: "center",
        alignItems: "center",
    }
})

export default WelcomeScreen;