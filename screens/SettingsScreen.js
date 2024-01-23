import React, {useState} from 'react'
import { KeyboardAvoidingView, StyleSheet, Switch, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import AntDesign from 'react-native-vector-icons/AntDesign'
import ThemeToggle from '../components/theme-toggle'

const SettingsScreen=()=> {
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
        behavior="padding"
        _dark={{bg: 'blueGray.900'}} 
        _light={{bg: 'blueGray.50'}} >
        <SafeAreaView>
            <View style={styles.headerWrapper}>
            <AntDesign name="left" size={24} color="white" />
                          
            </View>
        </SafeAreaView>
        <View style={styles.wraptitle}>
            <View style={styles.titleContainer}>
                <Text  style={styles.textTitleHello}>Settings </Text>
              </View>
        </View>
     
            <View style={styles.incontanier}>
         
            <View style={styles.buttonContainer}>
            <ThemeToggle />
            <Text  style={styles.buttonOutlineText}>Dark Mode</Text>
    <Switch></Switch>
          
                <TouchableOpacity
                onPress={handleSignIn}
                style={styles.button}
                >
                    <Text  style={styles.buttonText}>UPGRADE</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={handleSignIn}
                style={styles.button2}
                >
                    <Text  style={styles.buttonText}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={handleSignIn}
                style={styles.button2}
                >
                    <Text  style={styles.buttonText}>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={handleSignIn}
                style={styles.button2}
                >
                    <Text  style={styles.buttonText}>Help</Text>
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
    profileImage:{
        width: 190,
        height: 190,
        borderRadius: 100, 
      
    },
    namecontainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,   
    },
    headerWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop:20,
    },
    incontanier:{
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%',
        marginTop: 20,
        
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
    button2:{
        marginTop:15,
        backgroundColor: 'trasparent',
        width: '100%',
        padding: 15,
        borderRadius:10,
       alignItems: 'center',
       borderColor: '#2a2e37',
       borderWidth: 2 ,
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
    buttonOutlineText3:{
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        marginTop: 5,
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
    textProfileName:{
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 30,
        marginTop: 20,
       
        
    },
    titleContainer:{
        width: '80%',
     
        marginTop: 10,
      
    },
})

export default SettingsScreen