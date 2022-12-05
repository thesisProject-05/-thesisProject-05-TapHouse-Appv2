import React from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
  ScrollView,
  View,
  Text,
  Button
} from "react-native";
const House = ({navigation}) => {
  const [values, setValues] = React.useState({
    photo: "",
    description: "",
    price: "",
    latittude: "",
    longitude: "",
    adresse: "",
    city: "",
  });
  const handleChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };
    const handlePost = () =>{
      axios
      .post(`http://192.168.97.99:3001/house/add/"hna idddddddd"`,values)
      .then((response) => {
       console.log(response)
      })
      .catch((err) => console.log(err));
  }
    
      

      return (
        <ScrollView>
          <View >           
            <TextInput
            placeholder="description"
              style={styles.input}
              onChangeText={(text) => handleChange("description", text)}
              value={values.description}
            />
            <TextInput
            placeholder="price"
              style={styles.input}
              onChangeText={(text) => handleChange("price", text)}
              value={values.price}
            />
          
            <TextInput
            placeholder="adress"
              style={styles.input}
              onChangeText={(text) => handleChange("adresse", text)}
              value={values.adresse}
            />
            <TextInput
            placeholder="city"
              style={styles.input}
              onChangeText={(text) => handleChange("city", text)}
              value={values.city}
            />
            <Image
            style={styles.icons8PhotoGallery1001}
            resizeMode="cover"
            source={require("../../assets/House/image.png")}
          />
          <Text style={styles.uploadYourPicture}>{`Upload your picture `}</Text>
          

          <Image
          style={styles.map}
          resizeMode="cover"
          source={require("../../assets/House/map.png")}
        />
        <Text style={styles.PictureMap}>{`maps`}</Text>

        <Pressable
        style={styles.groupPressable}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.getConfirmText}
          onPress={() => navigation.navigate("Profile")}
          >
            Confirm</Text>
      </Pressable>


          
          <View style={styles.groupView}>
          </View>
         </View>
          
        </ScrollView>
      );
    }
  

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 32,
      borderWidth: 1,
      padding: 10,
      backgroundColor: "#d9d9d9",
      borderColor: "#000",
      position: "relative",
      overflow: "hidden",
    },
    icons8PhotoGallery1001: {
      
    },
    save:{
     heigth:50,
     margin:32,
     backgroundColor: "#d9d9d9",
      borderColor: "#000",
      position: "relative",
      overflow: "hidden",
      flex: 2,
      height:"100%",
      maxWidth:"100%"
    },
    groupView:{
      position: "absolute",
      width: "4.58%",
      height: "3.29%",
      left: "4.58%",
      top: "3.64%",
      right: "90.84%",
      background: "#3F424A",
      color: "#2f89fc",
      borderStyle: "solid",
      borderRadius: 10,
    },
    icons8PhotoGallery1001:{
    width:105,
    height:150,
    left:25,

    },
    uploadYourPicture:{
      top: -16,
      left:35,
      right:1,
      fontSize: 10,
      textShadowColor: "rgba(0, 0, 0, 0.25)",
    },
    map:{
      top: -120,
      left: 230,
      width:70,
      height: 70,
    },
    PictureMap:{
      top: 60,
      left: 200,
      fontSize: 1,
      textShadowColor: "rgba(0, 0, 0, 0.25)",

    },
    rectangleView: {
      position: "absolute",
      bottom: -23,
      borderRadius: 20,
      backgroundColor: "rgba(63, 66, 74, 0.8)",
      width: 150,
      height: 70,
      left: 80,
      marginBottom:40,
      marginLeft:20
   
    },
    getConfirmText: {
     position: "absolute",
    bottom: 40,
   right:125,
    getStartedText: {
    position: "absolute",
    bottom: 180,
    left: 15,
    fontSize: 16,
    letterSpacing: 28,
    lineHeight: 25,
    fontWeight: "400",
    color: "#fff",
    textAlign: "center",
    top:20,
    
  },
      fontSize: 22,
      letterSpacing: -0.20,
      lineHeight: 30,
      fontWeight: "500",
      color: "#fff",
      textAlign: "center",
      left:120,
    },

  });


export default House;
