import * as React from "react";
import { Pressable, Image, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Intro = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.introPressable}
      onLongPress={() => navigation.navigate("WelcomeLoginStudent")}
    >
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/intro/ellipse13.png")}
      />
      <Pressable/>
      <Pressable
        style={styles.groupPressable1}
        onPress={() => navigation.navigate("WelcomeLoginHouseOwner")}
      >
      <Image
        style={styles.icon2}
        resizeMode="cover"
        source={require("../assets/intro/group8.png")}
      />
      </Pressable>
      <Text style={styles.studentText}>student</Text>
      <Text style={styles.houseOwnerText}>House owner</Text>
      <Pressable
        style={styles.vectorPressable}
        onPress={() => navigation.navigate("Splashscreen")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/intro//vector4.png")}
        />
      </Pressable>
      <Text style={styles.helloThisOurFirstApplicati}>
        <Text style={styles.helloThisOurContainer}>
       
          <Text
            style={styles.helpStudentsFor}>
              Hello this our first application to help students for a better experince in
               their university life and provide them with a interface for renting</Text>
         
         
        </Text>
      </Text>
      <Image
        style={styles.aaa1Icon}
        resizeMode="cover"
        source={require("../assets/intro/aaa1.png")}
      />
      <Pressable
        style={styles.groupPressable1}
        onPress={() => navigation.navigate("WelcomeLoginStudent")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/intro/group7.png")}
        />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ellipseIcon: {
    position: "absolute",
    top: 280,
    left: 0,
    width: 892,
    height: 892,
  },
  groupPressable: {
    position: "absolute",
    left: "8.62%",
    top: "56.31%",
    right: "57.18%",
    bottom: "27.62%",
    width: "38.21%",
    height: "16.07%",
    backgroundColor:"red",

  },
 
  groupPressable1: {
    position: "absolute",
    left: "8.62%",
    top: "56.31%",
    right: "57.18%",
    bottom: "27.62%",
    width: "38.21%",
    height: "16.07%",
    
    
  },
  
  studentText: {
    position: "absolute",
    top: 670,
    left: 39,
    fontSize: 16,
    letterSpacing: -0.41,
    lineHeight: 22,
    fontWeight: "600",
   
    color: "#636363",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 123,
    height: 29,
  },
  houseOwnerText: {
    position: "absolute",
    top: 670,
    left: 234,
    fontSize: 16,
    letterSpacing: -0.41,
    lineHeight: 22,
    fontWeight: "600",
    color: "#636363",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 107,
    height: 25,
  },
  icon: {
    top:30,
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable: {
    position: "absolute",
    left: "4.36%",
    top: "3.29%",
    right: "91.03%",
    bottom: "93.43%",
    width: "4.62%",
    height: "3.29%",
  },
  helloThisOur: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  helpStudentsFor: {
    marginBlockStart: 10,
    marginBlockEnd: 20,
  },
  experinceInTheir: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  lifeAndProvide: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  helloThisOurContainer: {
    lineBreak: "anywhere",
    width: "100%",
  },
  helloThisOurFirstApplicati: {
    position: "absolute",
    top: 294,
    left: 58,
    fontSize: 10,
    letterSpacing: -0.41,
    lineHeight: 22,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    width: 264,
    height: 99,
  },
  aaa1Icon: {
    position: "absolute",
    top: 80,
    left: 113,
    width: 159,
    height: 140,
  },
  icon1: {
    position:"absolute",
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon3: {
    top:-34,
    right:-169,
    position:"absolute",
    height: "120%",
    width: "120%",
    maxWidth: "80%",
    overflow: "hidden",
    maxHeight: "100%",
    
  },
  introPressable: {
    position: "relative",
    borderRadius: 50,
    backgroundColor: "#DFE8EA",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
  icon2: {
    height: "120%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: 180,
  }
});

export default Intro;
