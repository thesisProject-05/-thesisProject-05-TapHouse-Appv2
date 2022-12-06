import {Animated, Image, SafeAreaView, Text, View,StyleSheet, Platform,TouchableOpacity,TextInput, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
// import {
//   CodeField,
//   Cursor,
//   useBlurOnFulfill,
//   useClearByFocusCell,
// } from 'react-native-confirmation-code-field';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import link from "../.././Link.js";

const ValidationScrenStudent = ({navigation,route}) => {
  // const navigation = useNavigation();
  const [verify,setVerify] = useState('');
  const checkCode = () =>{
    let verificationBody ={
      id:route.params.id,
      activationCode:verify,
      email: route.params.email

    }
    console.log(route.params,"<<===route.params")
    axios.post(`${link}/student/check`,verificationBody.id).then((result)=>{
    navigation.navigate("WelcomeLoginStudent")
    alert('thank you for joining TapHome')
    }).catch((err)=>{console.log(err.message)})
    }
  return (
    <View style={styles.validationScrenStudent}>
<Text style={styles.title}>Verify your email</Text>
<TextInput
        style={styles.rectangleTextInput}
        placeholder="  Validate Your  Email "
        keyboardType="default"
        onChangeText={(text) => {setVerify(text)}}
      />
      <Image
        style={styles.undrawCertificationReIfll1Icon}
        resizeMode="cover"
        source={require("../../assets/ValidationScreen/undrawCertification.png")}
      />

      <Pressable
        style={styles.vectorPressable}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../../assets/ValidationScreen/vector.png")}
        />
      </Pressable>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() =>{checkCode()}}
      />
      <Text style={styles.confirmText}>confirm</Text>
     
    
    </View>
  );
};

const styles = StyleSheet.create({
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
    top: 573,
    left: 51,
    borderRadius: 13,
    backgroundColor: "#3f424a",
    width: 295,
    height: 40,
  },
  confirmText: {
    position: "absolute",
    top: 579,
    left: 102,
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    width: 188,
    height: 22,
  },
  undrawCertificationReIfll1Icon: {
    position: "absolute",
    top: 69,
    left: 84,
    width: 223,
    height: 260,
  },
  rectangleTextInput: {
    position: "absolute",
    top: 457,
    left: 51,
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 295,
    height: 44,
  },
  validationScrenStudent: {
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

export default ValidationScrenStudent;
