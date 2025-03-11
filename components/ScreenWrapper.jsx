import {View, Text} from 'react-native';
import React from 'react';
import { UseSafeAreaInsets } from 'react-native-safe-area-context'

const ScreenWrapper = ({children, bg}) => {

    const {top} = UseSafeAreaInsets();
    const paddingTop = top > 0 ? top + 5 : 30;

    return (
        <View style={{flex: 1, paddingTop, backgroundColor: bg}}>
            {children}
        </View>
    );
}

export default ScreenWrapper;