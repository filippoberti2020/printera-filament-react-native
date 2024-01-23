import React from 'react'
import { KeyboardAvoidingView, SafeAreaView,ScrollView, StyleSheet, Text, Image, TextInput, TouchableOpacity, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

Feather.loadFont()

const HomeScreen = () => {
    return (
        
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding">
        <SafeAreaView>
            <View style={styles.headerWrapper}>
            <Feather name="menu" size={24} color="white" />
               <Image source={require('../assets/images/profile.jpg')} 
               style={styles.profileImage}
               />               
            </View>
        </SafeAreaView>
         <ScrollView >
            <View style={styles.homeContainer}>
             <Text  style={styles.welcomeTitle}>Hi Filippo</Text>
             <Text  style={styles.welcomep}>Welcome to PrintEra.</Text>
             <View style={styles.yours}>
        
             <Text  style={styles.yourText}>Your</Text><Text  style={styles.filamentsText}>Filaments</Text>
        
         
             <TouchableOpacity
              onPress={() => {}}
                style={[styles.button, styles.buttonOutline]}
                >
                    <Text  style={styles.buttonOutlineText}>Add</Text>
                </TouchableOpacity> 
                    
             </View>
             <View  style={styles.grid}>
             <TouchableOpacity
              onPress={() => {}}
                style={[styles.button2, styles.buttonOutline2]}
                >
                    <Text  style={styles.buttonOutlineText}>Redline Filament</Text>
                    <Text  style={styles.buttonOutlineText}>PLA</Text>
                    <Text  style={styles.buttonOutlineText}>2</Text>              
                </TouchableOpacity>  
                <TouchableOpacity
              onPress={() => {}}
                style={[styles.button2, styles.buttonOutline2]}
                >
                    <Text  style={styles.buttonOutlineText}>Redline Filament</Text>
                    <Text  style={styles.buttonOutlineText}>PLA</Text>
                    <Text  style={styles.buttonOutlineText}>2</Text>              
                </TouchableOpacity>  
                <TouchableOpacity
              onPress={() => {}}
                style={[styles.button3, styles.buttonOutline3]}
                >
                    <Text  style={styles.buttonOutlineText3}>Redline Filament</Text>
                    <Text  style={styles.buttonOutlineText3}>PLA</Text>
                    <Text  style={styles.buttonOutlineText3}>2</Text>              
                </TouchableOpacity>  
                <TouchableOpacity
              onPress={() => {}}
                style={[styles.button2, styles.buttonOutline2]}
                >
                    <Text  style={styles.buttonOutlineText}>Redline Filament</Text>
                    <Text  style={styles.buttonOutlineText}>PLA</Text>
                    <Text  style={styles.buttonOutlineText}>2</Text>              
                </TouchableOpacity>  
                <TouchableOpacity
              onPress={() => {}}
                style={[styles.button3, styles.buttonOutline3]}
                >
                    <Text  style={styles.buttonOutlineText3}>Redline Filament</Text>
                    <Text  style={styles.buttonOutlineText3}>PLA</Text>
                    <Text  style={styles.buttonOutlineText3}>2</Text>              
                </TouchableOpacity>  
            </View>
            </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container:{
        position:'relative',
        flex: 1,
        top: 0,
        right: 0,
        backgroundColor: '#20252b',
    },
    headerWrapper:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            paddingTop:20,
    },
    profileImage:{
        width: 40,
        height: 40,
        borderRadius: 40,
        
    },
    homeContainer: {
        width: '100%',
        padding: 10,
        
    },
    welcomeTitle: {
        color: 'white',
        fontWeight: '600',
        fontSize: 26,
        marginTop: 40,
    },
    welcomep: {
        color: 'white',
        fontWeight: '100',
        fontSize: 12,
        marginTop: 8,
        
    },
    yours: {
        flexDirection:'row', flexWrap:'wrap',
        marginTop: 28,
      
    },
    yourText: {
        fontSize: 22,
        color: 'white',
        fontWeight: '100',
       
    },
    filamentsText: {
        fontSize: 22,
        color: 'white',
        fontWeight: "500",
        marginLeft: 10,
        
    },
    button:{
        position: 'absolute',
        right:0,
        alignSelf: 'flex-end',
        textAlign: 'center',
        backgroundColor: '#fed32c',
        width: '20%',
        padding: 5,
        borderRadius:10,
        
        marginTop: 1,
       
        
    },
    button2:{
        right:0,
       
        textAlign: 'center',
        backgroundColor: '#fed32c',
        width: '45%',
        height: '30%',
        padding: 5,
        borderRadius:10,
        margin: 8,
      
        marginTop: 15,
       
        
    },
    button3:{
        right:0,
    
        textAlign: 'center',
        backgroundColor: '#2a2e37',
        width: '45%',
        height: '30%',
        padding: 5,
        borderRadius:10,
        margin: 8,
      
        marginTop: 15,
       
        
    },
    buttonOutline:{
        backgroundColor: '#fed32c',    
    },
    buttonOutline3:{
       
        backgroundColor: '#000000',
        marginTop: 15,
        
    },
    buttonOutlineText:{
       fontWeight:"500" ,       
    },
    buttonOutlineText3:{
        fontWeight:"500" ,
        color: 'white',       
     },
    grid:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'      
     },
})



export default HomeScreen
