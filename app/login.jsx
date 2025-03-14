import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { theme } from '../constants/theme'
import Icon from '../assets/icons'
import { StatusBar } from 'expo-status-bar'
import BackButton from '../components/BackButton'

import { useRouter } from 'expo-router'
import { heightPercentage, widthPercentage } from '../helpers/common'
import Input from '../components/Input'

const login = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);

  return (
    <ScreenWrapper>
      <StatusBar style='dark' />
      <View style={styles.container}>

        <BackButton router={router} />

        <View>
          <Text style={styles.welcomeText}>Welcome Back!</Text>
        </View>

        <View style={styles.form}>
          <Text style={{fontSize : heightPercentage(1.5), color : theme.colors.text}}>
            Log in to continue:
          </Text>
          <Input 
            icon={<Icon name="home" size={26} strokeWidth={1.6} />}
            placeholder="Enter your email"
            onChangeText={value=> emailRef.current = value}
          />
          <Input 
            icon={<Icon name="home" size={26} strokeWidth={1.6} />}
            placeholder="Enter your password"
            secureTextEntry
            onChangeText={value=> passwordRef.current = value}
          />

        </View>

      </View>      
    </ScreenWrapper>
  )
}

export default login

const styles = StyleSheet.create({
  container : {
    flex : 1,
    gap : "45px",
    paddingHorizontal : widthPercentage(5),
  },
  welcomeText : {
    fontSize : heightPercentage(4),
    fontWeight : theme.fonts.bold,
    color : theme.colors.text,
  },
  form : {
    gap : "25px",
  },
  forgotPassword : {
    textAlign : "right",
    fontWeight : theme.fonts.semibold,
    color : theme.colors.text,
  },
  footer : {
    flexDirection : "row",
    justifyContent : "center",
    alignItems : "center",
    gap : "5px",
  },
  footerText : {
    fontSize : heightPercentage(1.6),
    textAlign : "center",
    color : theme.colors.text,
  },
})