import React, {useState} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/core';

const SignupScreen=()=> {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
   const navigation=useNavigation()
   const handleSignUp=()=>{
    navigation.navigate('Home')
   }
    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding">
        <View style={styles.wraptitle}>
         <View style={styles.titleContainer}>
           <Text  style={styles.textTitleHello}>Hello, </Text>
           <Text  style={styles.textTitleSignUp}>Sign Up! </Text>
           </View>
        </View>
           <View style={styles.incontanier}>
            <View style={styles.inputContainer}>
            <Text  style={styles.buttonOutlineText}>First Name</Text>
                <TextInput 
                placeholder="Luca"
                style={styles.input}
                placeholderTextColor='grey'
                value={email}
                onChangeText={text=>setEmail(text)}
                />
            <Text  style={styles.EmailText}>Email adress</Text>
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
                 <Text  style={styles.textPasswordHolderText}>Confirm Password</Text>
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
                onPress={() => {}}
                style={styles.button}
                >
                    <Text  style={styles.buttonText}>Create account</Text>
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
        marginTop: 90,
        
    },
    input:{
        backgroundColor: '#2a2e37',
        paddingHorizontal: 15,
        paddingVertical:10,
        borderRadius: 10,
        marginTop: 5,
        color: 'white',
        
    },
    wraptitle:{
        alignItems: 'center'
    },
    buttonContainer:{
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    EmailText:{
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        marginTop: 15,
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

export default SignupScreen