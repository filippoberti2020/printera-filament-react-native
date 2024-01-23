import React, {useState} from 'react'
import { KeyboardAvoidingView, StyleSheet,SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomMultiPicker from "react-native-multiple-select-list";
const styles2 = StyleSheet.create({
    listpicker:{ color: 'white'}
})
const materialList = {
  "PLA":<View><Text  style={styles2.listpicker}>PLA</Text></View>,
  "PETG":<View><Text style={styles2.listpicker}>PETG</Text></View>,
  "ABS":<View><Text style={styles2.listpicker}>ABS</Text></View>,
  "TUP":<View><Text  style={styles2.listpicker}>TUP</Text></View>,
  "ASA":<View><Text style={styles2.listpicker}>ASA</Text></View>,
  "NYLON":<View><Text style={styles2.listpicker}>NYLON</Text></View>,
  "WOOD":<View><Text  style={styles2.listpicker}>WOOD</Text></View>,
  "TPE":<View><Text style={styles2.listpicker}>TPE</Text></View>,
  "PET":<View><Text style={styles2.listpicker}>PET</Text></View>,
  "PVB":<View><Text  style={styles2.listpicker}>PVB</Text></View>,
  "PC BLEND":<View><Text style={styles2.listpicker}>PC BLEND</Text></View>,
  "PC BLEND CARBON FIBER":<View><Text style={styles2.listpicker}>PC BLEND CARBON FIBER</Text></View>
}

const weightList = {
    "PLA":<View><Text  style={styles2.listpicker}>0.5 Kg</Text></View>,
    "PETG":<View><Text style={styles2.listpicker}>0.75 Kg</Text></View>,
    "ABS":<View><Text style={styles2.listpicker}>1 Kg</Text></View>,
    "TUP":<View><Text  style={styles2.listpicker}>0.6 Kg</Text></View>,
    "ASA":<View><Text style={styles2.listpicker}>0.85 Kg</Text></View>,
    "NYLON":<View><Text style={styles2.listpicker}>0.9 Kg</Text></View>,
    "WOOD":<View><Text  style={styles2.listpicker}>2.3 Kg</Text></View>
  }


const AddScreen=()=> {
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
        <SafeAreaView>
            <View style={styles.headerWrapper}>
            <AntDesign name="left" size={24} color="white" />
                          
            </View>
        </SafeAreaView>
        <View style={styles.wraptitle}>
            <View style={styles.titleContainer}>
                <Text  style={styles.textTitleHello}>Insert filament, </Text>
                <Text  style={styles.textTitleSignUp}>details! </Text>
            </View>
        </View>
            <View style={styles.incontanier}>
            <View style={styles.inputContainer}>
            <Text  style={styles.buttonOutlineText}>Filament name</Text>
            <TextInput 
                placeholder="Prusament black pla"
                style={styles.input}
                placeholderTextColor='grey'
                value={email}
                onChangeText={text=>setEmail(text)}
                />
            <Text  style={styles.buttonOutlineText3}>Material</Text>
            <CustomMultiPicker
          
  options={materialList}
  search={true} // should show search bar?
  multiple={false} //
  placeholder={"Search"}
  placeholderTextColor={'#757575'}
  returnValue={"label"} // label or value
  callback={(res)=>{ console.log(res) }} // callback, array of selected items
  rowBackgroundColor={"#2a2e37"}
  rowHeight={45}
  rowRadius={10}
  searchIconName="ios-checkmark"
  searchIconColor="red"
  searchIconSize={30}
  iconColor={"#fed32c"}
  iconSize={30}
  selectedIconName={"ios-checkmark-circle-outline"}
  unselectedIconName={"ios-radio-button-off-outline"}
  scrollViewHeight={130}
  selected={["PLA"]} // list of options which are selected by default
/>
            <Text  style={styles.buttonOutlineText3}>Quantity</Text>
             
             <Text  style={styles.buttonOutlineText3}>Spool Weight</Text>
             <CustomMultiPicker
          
          options={weightList}
          search={true} // should show search bar?
          multiple={false} //
          placeholder={"Search"}
          placeholderTextColor={'#757575'}
          returnValue={"label"} // label or value
          callback={(res)=>{ console.log(res) }} // callback, array of selected items
          rowBackgroundColor={"#2a2e37"}
          rowHeight={45}
          rowRadius={10}
          searchIconName="ios-checkmark"
          searchIconColor="red"
          searchIconSize={30}
          iconColor={"#fed32c"}
          iconSize={30}
          selectedIconName={"ios-checkmark-circle-outline"}
          unselectedIconName={"ios-radio-button-off-outline"}
          scrollViewHeight={130}
          selected={["PLA"]} // list of options which are selected by default
        />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={handleSignIn}
                style={styles.button}
                >
                    <Text  style={styles.buttonText}>ADD</Text>
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
    titleContainer:{
        width: '80%',
     
        marginTop: 10,
      
    },
})

export default AddScreen