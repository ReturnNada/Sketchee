import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { heightPercentage, widthPercentage } from "../helpers/common";
import { theme } from "../constants/theme";
import Button from "../components/Button";
import { useRouter } from "expo-router";

const WelcomeScreen = () => {
    const router = useRouter();
    return(
        <ScreenWrapper bg="white">
            <StatusBar style="dark"></StatusBar>
            <View style={styles.container}>
                <Image style={styles.welcomeImage} 
                resizeMode="contain" 
                source={require('../assets/images/Sketchee.png')} />

                <View style={{gap: 20}}>
                    <Text style={styles.title}>Sketchee</Text>
                    <Text style={styles.quip}>
                        A drawing a day keeps the artblock away!
                    </Text>
                </View>

                <View style={styles.footer}>
                    <Button 
                        title="Get Started"
                        buttonStyle={{marginHorizontal: widthPercentage(3)}}
                        onPress={()=>router.push('signup')}
                    />
                    <View style={styles.bottomTextContainer}>
                        <Text style={styles.loginText}>
                            Have an account?
                        </Text>
                        <Pressable onPress={() => router.push('login')}>
                            <Text style={[styles.loginText, {color: theme.colors.primaryDark, fontWeight : theme.fonts.semibold}]}>
                                Login
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "space-around",
        backgroundColor : "white",

        paddingHorizontal : widthPercentage(4),
        // height : heightPercentage(95),
        // width : widthPercentage(95),
    },
    welcomeImage : {
        height : heightPercentage(30),
        width : widthPercentage(100),
        alignSelf : "center",
    },
    title : {
        color : theme.colors.text,
        fontSize : heightPercentage(4),
        textAlign : "center",
        fontWeight : theme.fonts.extraBold
    },
    quip : {
        textAlign : "center",
        fontSize : heightPercentage(1.7),
        paddingHorizontal : widthPercentage(10),
        color : theme.colors.text,
    },
    footer : {
        gap : "30px",
        width : "50%",
    },
    bottomTextContainer : {
        flexDirection : "row",
        justifyContent : "center",
        alignItems : "center",
        gap : "5px",
    },
    loginText : {
        textAlign : "center",
        color : theme.colors.text,
        fontSize : heightPercentage(1.6),
    },
})