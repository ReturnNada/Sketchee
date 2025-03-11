import { Text, View, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import ScreenWrapper from '../components/ScreenWrapper';

const index = () => {
    const router = useRouter();
  return (
    <ScreenWrapper>
      <Text>index</Text>
      <Button title="WelcomeScreen" onPress={() => router.push('WelcomeScreen')}></Button>
    </ScreenWrapper>
  )
}

export default index