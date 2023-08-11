import React from 'react'

import {
  View,
  Text,
  StyleSheet,
  useColorScheme
} from 'react-native'

function AppPro(): JSX.Element{
  const isDarkMode = useColorScheme() === 'light'

  return(
    <View style={style1.object1}>
      <Text style={isDarkMode ? style1.darkText : style1.darkText}>
        hELLOOOO WORLDDD
      </Text>
      <View style={style1.container}>
         <View style={style1.square}></View>
         <View style={style1.square}></View>
         <View style={style1.square}></View>
      </View>
    </View>
   )
}

const style1 = StyleSheet.create({
  object1: {
    flex: 1,
    alignItems: 'centre',
    justifyContent: 'center'
  },
  whiteText: {
    color: '#FFFFFF'
  },
  darkText: {
    color: '#000000,'
  },
  square: {
    backgroundColor: '#BEE5A4',
    height: 150,
    width: 120,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})

export default AppPro