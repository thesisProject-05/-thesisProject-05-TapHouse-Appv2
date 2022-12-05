import {Animated, Image, SafeAreaView, Text, View,StyleSheet, Platform,TouchableOpacity,TextInput, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
// import {
//   CodeField,
//   Cursor,
//   useBlurOnFulfill,
//   useClearByFocusCell,
// } from 'react-native-confirmation-code-field';
import axios from 'axios';
import link from "../../Link.js"

const ValidationScrenHomeOwner = ({navigation,route}) => {
  // const navigation = useNavigation();
  const [verify,setVerify] = useState('');
  const checkCode = () =>{
    let verificationBody ={
      id:route.params.id,
      activationCode:verify
    }
    console.log(route.params,"oooooo")
    axios.post(`http://192.168.11.197:3001/owner/check`,verificationBody.id).then((result)=>{
    navigation.navigate("WelcomeLoginHouseOwner")
    alert('thank you for joining TapHome')
    }).catch((err)=>{console.log(err.message)})
    }
  return (
    <ScrollView>
    <View style={styles.validationScrenHomeOwner}>
       <Text style={styles.title}>Verify your email</Text>
      <TextInput
        style={styles.rectangleTextInput}
        placeholder="  Validate Your Email   "
        keyboardType="default"
        onChangeText={(text) => {setVerify(text)}}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../../assets/ValidationScreen2/group9.png")}
      />
      <Pressable
        style={styles.vectorPressable}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../../assets/ValidationScreen2/vector.png")}
        />
      </Pressable>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() =>{checkCode()}}
      />
      <Text style={styles.confirmText}>confirm</Text>
     
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rectangleTextInput: {
    position: "absolute",
    top: "35.5%",
    left: "10%",
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 295,
    height: 44,
  },
  groupIcon: {
    position: "absolute",
    height: "15.91%",
    width: "32.89%",
    top: "7.5%",
    left: "34.61%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable: {
    position: "absolute",
    left: "3.33%",
    top: "6.5%",
    right: "91.67%",
    bottom: "90.05%",
    width: "5%",
    height: "3.45%",
  },
  rectanglePressable: {
    position: "absolute",
    top: "46%",
    left: "10%",
    borderRadius: 13,
    backgroundColor: "#3f424a",
    width: 295,
    height: 40,
  },
  confirmText: {
    position: "absolute",
    top: "4%",
    left: "37%",
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    width: "20%",
    height: "7.5%",
  },
  validationScrenHomeOwner: {
    position: "relative",
    backgroundColor: "#dfe8ea",
    flex: 1,
    width: "100%",
    height: 844,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#000",
    textAlign:'center',
    top: "25%",
  },
});

export default ValidationScrenHomeOwner;
