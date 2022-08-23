import React from 'react'
import {View} from 'react-native'

function Layout({children}) {
  return (
    <View style={{flex:1}}>
        {children}
    </View>
  )
}

export default Layout