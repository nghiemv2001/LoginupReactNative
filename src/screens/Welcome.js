import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import login3 from '../../assets/login3.png'
import { buttonlogin } from '../comon/button'
const Welcome = () => {
  return (
    <View style ={styles.container1}>
      <Text style={styles.head}>Login</Text>
      <Text style={styles.head1}>Sign in to Continue</Text>
      <Image style={styles.login1} source={login3}/>
      
      <Text style={buttonlogin}>Login</Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height :'100%'
  },
  container1:{
    flex : 1,
    justifyContent: 'center',
    alignItems : 'center',
    height :'100%',
    width :'100%',
  },
  login1:{
    position : 'absolute',
    top: 0,
    right: -50,
    width :'100%',
    height:'40%',
    zIndex: -1,
    marginBottom : 360,
    marginRight : 130
  },
  head:{
    position : 'absolute',
    fontSize : 60,
    color :'#786CF8',
    justifyContent:'center',
    alignItems:'center',
    fontWeight :'900',
    height : '40%',
    width :'40%'
  },
  head1:{
    position : 'absolute',
    fontSize : 22,
    color :'#786CF8',
    justifyContent:'center',
    alignItems:'center',
    fontWeight :'400',
    height : '17%',
    width :'48%'
  }
})

