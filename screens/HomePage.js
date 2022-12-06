import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatGrid } from 'react-native-super-grid'
import axios from "axios";
import link from "../Link"


const HomePageStudent = () => {
  const navigation = useNavigation();
  const [houses, setHouses] = useState([])
  useEffect(() => {
    axios.get(`${link}/house/`).then((res) => {
      console.log(res.data);
            setHouses(res.data)
            // console.log(houses,'ttt')
      
          })
  }, [])
  const allHouse = () => {
    
  } 

  return (

    <ScrollView>


      <View style={styles.homePageStudent}>
        <Pressable
          style={styles.ellipsePressable}
          onPress={() => navigation.navigate("ProfileView")}
        >
          <Image
            style={styles.iconsaxLinearhome}
            resizeMode="cover"
            source={require("../assets/HomeScreen/iconsHome.png")}
          /></Pressable>
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
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/HomeScreen/Group11.png")}
        />
        <Text style={styles.findYourDreamHome}>
          Find Your Dream Home</Text>
        {houses.map((ele, i) =>
       
          <>
          {console.log(houses)}
            <View key={id} style={{ marginBottom: 200, }}>
              <View style={styles.rectangleView} />

              <Text style={styles.singleRoomText}>{ele.description}</Text>
              <Text style={styles.tNDText}>{ele.city}</Text>
              

 
              <Pressable
                style={styles.maskGroupPressable}
                onPress={() => navigation.navigate("Detail",{id:ele.idhouse})}
              >
                <Image
                  style={styles.images1Icon}
                  resizeMode="cover"
                  source={{ uri: ele.photo }}
                />
              </Pressable>
            </View>
          </>)}
        <TextInput
          style={styles.rectangleTextInput}
          placeholder="search..."
          keyboardType="default"
        />

        <Image
          style={styles.iconSearch}
          resizeMode="cover"
          source={require("../assets/HomeScreen/tabler-icon-search.png")}
        />

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
  maskGroupPressable: {
    position: "absolute",
    left: 18,
    top: 218,
    width: 164,
    height: 130.72,
  },
  groupIcon: {
    position: "absolute",
    top: 41.5,
    left: 17,
    width: 38,
    height: 9,
  },
  rectangleTextInput: {
    position: "absolute",
    top: 213,
    left: 63,
    borderRadius: 19,
    backgroundColor: "#fff",
    width: 284,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    height: 36,
  },
  iconSearch: {
    position: "absolute",
    height: "2.2%",
    width: "5.5%",
    top: "26.06%",
    right: "17.1%",
    bottom: "71.74%",
    left: "77.4%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },

  findYourDreamHome: {
    position: "absolute",
    width: 279,
    height: 90,
    left: 18,
    top: 115,
    fontSize: 30,
    fontWeight: "600",
    color: "#000",
    textAlign: "left",
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
    position: "absolute",
    top: 300,
    left: 14,
    borderRadius: 11,
    backgroundColor: "#fff",
    width: 180,
    height: 160,
  },
  singleRoomText: {
    position: "absolute",
    top: 439,
    left: 36,
    fontSize: 11,
    color: "#000",
    textAlign: "left",
  },
  tNDText: {
    position: "absolute",
    top: 439,
    left: 126,
    fontSize: 11,
    color: "#000",
    textAlign: "left",
    width: 49,
    height: 20,
  },
  rectangleView1: {
    position: "absolute",
    top: 392,
    left: 14,
    borderRadius: 11,
    backgroundColor: "#fff",
    width: 183,
    height: 169,
  },

  images1Icon: {
    position: "absolute",
    top: 100,
    left: 17,
    width: 133,
    height: 117,
  },
  rectangleView2: {
    position: "absolute",
    top: 195,
    left: 204,
    borderRadius: 11,
    backgroundColor: "#fff",
    width: 183,
    height: 169,
  },
  images3Icon: {
    position: "absolute",
    top: 215,
    left: 229,
    width: 133,
    height: 117,
  },
  rectangleView3: {
    position: "absolute",
    top: 390,
    left: 204,
    borderRadius: 11,
    backgroundColor: "#fff",
    width: 183,
    height: 169,
  },
  images4Icon: {
    position: "absolute",
    top: 403,
    left: 228,
    width: 133,
    height: 117,
  },
  rectangleView4: {
    position: "absolute",
    top: 577,
    left: 14,
    borderRadius: 11,
    backgroundColor: "#fff",
    width: 183,
    height: 169,
  },
  images5Icon: {
    position: "absolute",
    top: 588,
    left: 39,
    width: 133,
    height: 117,
  },
  rectangleView5: {
    position: "absolute",
    top: 575,
    left: 204,
    borderRadius: 11,
    backgroundColor: "#fff",
    width: 183,
    height: 169,
  },
  images6Icon: {
    position: "absolute",
    top: 588,
    left: 228,
    width: 133,
    height: 117,
  },


  homePageStudent: {
    position:"relative",
    backgroundColor: "#e3f1f4",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default HomePageStudent;
