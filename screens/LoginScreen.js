import React, {useState} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/core';

const LoginScreen=()=> {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
   const navigation=useNavigation()
   
   const handleSignUp=()=>{
    navigation.navigate('Signup')
   }
   const handleSignIn=()=>{
    navigation.navigate('Home')
   }
    return (
        
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding">
        <View style={styles.wraptitle}>
            <View style={styles.titleContainer}>
                <Text  style={styles.textTitleHello}>Welcome Back, </Text>
                <Text  style={styles.textTitleSignUp}>Log In! </Text>
            </View>
        </View>
            <View style={styles.incontanier}>
            <View style={styles.inputContainer}>
            <Text  style={styles.buttonOutlineText}>Email adress</Text>
                <TextInput 
                placeholder="youremail@gmail.com"
                style={styles.input}
                placeholderTextColor='grey'
                value={email}
                onChangeText={text=>setEmail(text)}
                />
                 <Text  style={styles.textPasswordHolderText}>Password</Text>
                 <TextInput 
                placeholder="Password"
                style={styles.input}
                placeholderTextColor='grey'
                textColor='grey'
                secureTextEntry
                value={password}
                onChangeText={text=>setPassword(text)}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={handleSignIn}
                style={styles.button}
                >
                    <Text  style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity
              onPress={handleSignUp}
                style={[styles.button, styles.buttonOutline]}
                >
                    <Text  style={styles.buttonOutlineText}>Sign up</Text>
                </TouchableOpacity>
            </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
      
        flex: 1,
        top: 0,
       
        backgroundColor: '#20252b',
    },
    incontanier:{
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%',
        marginTop: 170,
        
    },
    wraptitle:{
        alignItems: 'center'
    },
    input:{
        backgroundColor: '#2a2e37',
        paddingHorizontal: 15,
        paddingVertical:10,
        borderRadius: 10,
        marginTop: 5,
        color: 'white',
        
    },
    buttonContainer:{
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button:{
        backgroundColor: '#fed32c',
        width: '100%',
        padding: 15,
        borderRadius:10,
       alignItems: 'center',
    },
    buttonOutline:{
        backgroundColor: 'transparent',
        marginTop: 15,
        borderColor: '#2a2e37',
        borderWidth: 2 ,
        
    },
    buttonText:{
        color: 'black',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText:{
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    textPasswordHolderText:{
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        marginTop: 10,
    },
    textTitle:{
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 60,
        paddingBottom: 90,

    },
    textTitleHello:{
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 25,
     
    },
    textTitleSignUp:{
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 50,
       
        
    },
    titleContainer:{
        width: '80%',
     
        marginTop: 70,
      
    },
})

export default LoginScreen