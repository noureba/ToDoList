import React from 'react'
import {Text , StyleSheet} from 'react-native'
import Layout from '../components/Layout'

function About() {
  return (
    <Layout>
      <Text style={styles.title}>About</Text>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
    </Layout>
  )
}

export default About

const styles = StyleSheet.create({
  title:{
    fontSize:24,
    textAlign:'center',
    marginTop:50
  },
  text:{
    padding:10,
    marginTop:50,
    fontSize:18
  }
})