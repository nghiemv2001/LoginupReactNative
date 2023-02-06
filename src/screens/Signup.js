import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import login3 from '../../assets/login3.png'
import login4 from '../../assets/login4.png'
import { buttonsignup } from '../comon/button'
const Signup = ({ navigation }) => {
  return (
    <View style={styles.boss}>

      <View style={styles.top}>
        <Text style={styles.head}>Create New</Text>
        <Text style={styles.head1}>Account</Text>
        <Text style={styles.head2}
          onPress={() => navigation.navigate('Signin')}>Already Registered? Login</Text>
        <Image style={styles.login1} source={login3} />

      </View>
      <View style={styles.center}>
        <Text style={styles.label1}>Please enter your name</Text>
        <TextInput placeholder='what your name ?' style={styles.inputemail}></TextInput>
        <Text style={styles.label2}>Please enter your email</Text>
        <TextInput placeholder='abc123@gmail.com' style={styles.inputpassword}></TextInput>
        <Text style={styles.label2}>Please enter your password</Text>
        <TextInput placeholder='******' style={styles.inputpassword}></TextInput>
      </View>
      <View style={styles.bottom}>
        <Text style={buttonsignup}>Sign Up</Text>
        <Image style={styles.login2} source={login4} />
      </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  boss: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
  container: {
    width: '90%',
    height: '100%'
  },
  top: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  center: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  bottom: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 270

  },
  login1: {
    position: 'absolute',
    top: -70,
    right: -40,
    width: '100%',
    height: '30%',
    zIndex: -1,
    marginBottom: 360,
    marginRight: 140
  },
  login2: {
    position: 'absolute',
    top: -100,
    right: -60,
    width: '100%',
    height: '100%',
    zIndex: -1,
    marginBottom: 10,
    marginRight: 50

  },
  head: {
    position: 'absolute',
    fontSize: 60,
    color: '#786CF8',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '900',
    height: '65%',
    width: '80%',
  },
  head1: {
    // position: 'absolute',
    fontSize: 53,
    color: '#786CF8',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '900',
    height: '50%',
    width: '53%',
  },
  head2: {
    position: 'absolute',
    fontSize: 22,
    color: '#786CF8',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '400',
    height: '28%',
    width: '67%',
  },
  label1: {
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    width: 340,
    backgroundColor: '#fff',
    color: 'black',
    fontSize: 16,
    marginTop: 170,
  },
  label2: {
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    width: 340,
    backgroundColor: '#fff',
    color: 'black',
    fontSize: 16,
    marginTop: 15,
  },
  inputemail: {
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    width: 340,
    backgroundColor: '#fff',
    color: 'black',
    borderRadius: 18,
    fontSize: 22,
    marginRight: 0,
    borderColor: 'black',
    borderWidth: 1
  },
  inputpassword: {
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    width: 340,
    backgroundColor: '#fff',
    color: 'black',
    borderRadius: 18,
    fontSize: 22,
    borderColor: 'black',
    borderWidth: 1
  }
})