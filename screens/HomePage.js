import  React,{useEffect,useState} from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import link from "../Link"

const HomePageStudent = () => {
  const navigation = useNavigation();
  useEffect(()=>{
allHouse()
  })
  const allHouse=()=>{
    axios.get(`${link}/house/`).then((res)=>{
      console.log(res.data)
    })
  }

  return (
    <ScrollView>
      <View style={styles.homePageStudent}>
        <Pressable
          style={styles.ellipsePressable}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/HomeScreen/ellipse17.png")}
          />
        </Pressable>
       <View>
        <Image
        style={styles.iconsaxLinearhome}
        resizeMode="cover"
        source={require("../assets/HomeScreen/iconsHome.png")}
      />
      <Image
        style={styles.iconsaxLinearmessage}
        resizeMode="cover"
        source={require("../assets/HomeScreen/iconsMessage.png")}
      />
      <Image
        style={styles.iconsaxLinearblogger}
        resizeMode="cover"  
        source={require("../assets/HomeScreen/iconsBlog.png")}
      />
      </View>
       
      <View style={styles.lineView} />
        <View style={styles.rectangleView} />
        <Image
          style={styles.images1Icon}
          resizeMode="cover"
          source={require("../assets/HomeScreen/images2.png")}
        />
        <Text style={styles.singleRoomText}>single room</Text>
        <Text style={styles.tNDText}>100 TND</Text>

      
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  ellipsePressable: {
    position: "absolute",
    left: 280,
    top: 50,
    width: 76,
    height: 70,
  },
  iconsaxLinearhome: {
    position: "absolute",
    top: 780,
    left: 35,
    width: 43,
    height: 43,
    overflow: "hidden",
  },
  iconsaxLinearmessage: {
    position: "absolute",
    top: 780,
    left: 160,
    width: 43,
    height: 43,
    overflow: "hidden",
  },
  iconsaxLinearblogger: {
    position: "absolute",
    top: 780,
    left: 275,
    width: 51,
    height: 51,
    overflow: "hidden",
  },
  lineView: {
    position: "absolute",
    top: 909.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 394,
    height: 10,
  },
  rectangleView: {
    position: "relative",
    top: 200,
    left: 15,
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 180,
    height: 160,
  },
  singleRoomText: {
    position: "absolute",
    top: 340,
    left: 36,
    fontSize: 11,

    color: "#000",
    textAlign: "left",
  },
  tNDText: {
    position: "absolute",
    top: 340,
    left: 126,
    fontSize: 11,
    color: "#000",
    textAlign: "left",
    width: 49,
    height: 20,
  },

  images1Icon: {
    position: "absolute",
    top: 210,
    left: 32,
    width: 145,
    height: 130,
  },
 

  homePageStudent: {
    position: "relative",
    backgroundColor: "#e3f1f4",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default HomePageStudent;
