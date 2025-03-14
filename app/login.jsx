import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Home from '../assets/icons/Home'

const login = () => {
  return (
    <ScreenWrapper>
      <Text>login</Text>
      <Home strokeWidth={2} />
    </ScreenWrapper>
  )
}

export default login

const styles = StyleSheet.create({})