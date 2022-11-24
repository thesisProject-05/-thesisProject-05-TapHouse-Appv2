import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomePageStudent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homePageStudent}>
      <Pressable
        style={styles.ellipsePressable}
        onPress={() => navigation.navigate("ProfileView")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/HomeScreen/ellipse17.png")}
        />
      </Pressable>
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
      <View style={styles.lineView} />
      <View style={styles.rectangleView} />
      <Text style={styles.singleRoomText}>single room</Text>
      <Text style={styles.tNDText}>100 TND</Text>
      <View style={styles.rectangleView1} />
      <Image
        style={styles.images2Icon}
        resizeMode="cover"
        source={require("../assets/HomeScreen/images2.png")}
      />
      <Image
        style={styles.images1Icon}
        resizeMode="cover"
        source={require("../assets/HomeScreen/images2.png")}
      />
      <View style={styles.rectangleView2} />
      <Image
        style={styles.images3Icon}
        resizeMode="cover"
        source={require("../assets/HomeScreen/images2.png")}
      />
      <View style={styles.rectangleView3} />
      <Image
        style={styles.images4Icon}
        resizeMode="cover"
        source={require("../assets/HomeScreen/images2.png")}
      />
      <View style={styles.rectangleView4} />
      <Image
        style={styles.images5Icon}
        resizeMode="cover"
        source={require("../assets/HomeScreen/images2.png")}
      />
      <View style={styles.rectangleView5} />
      <Image
        style={styles.images6Icon}
        resizeMode="cover"
        source={require("../assets/HomeScreen/images2.png")}
      />
    </View>
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
    left: 49,
    width: 43,
    height: 43,
    overflow: "hidden",
  },
  iconsaxLinearmessage: {
    position: "absolute",
    top: 783,
    left: 174,
    width: 43,
    height: 43,
    overflow: "hidden",
  },
  iconsaxLinearblogger: {
    position: "absolute",
    top: 775,
    left: 294,
    width: 51,
    height: 51,
    overflow: "hidden",
  },
  lineView: {
    position: "absolute",
    top: 759.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 1,
    width: 394,
    height: 1,
  },
  rectangleView: {
    position: "absolute",
    top: 195,
    left: 14,
    borderRadius: 11,
    backgroundColor: "#fff",
    width: 183,
    height: 169,
  },
  singleRoomText: {
    position: "absolute",
    top: 340,
    left: 36,
    fontSize: 11,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  tNDText: {
    position: "absolute",
    top: 340,
    left: 126,
    fontSize: 11,
    fontFamily: "Inter",
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
  images2Icon: {
    position: "absolute",
    top: 405,
    left: 39,
    width: 133,
    height: 117,
  },
  images1Icon: {
    position: "absolute",
    top: 215,
    left: 37,
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
    position: "relative",
    backgroundColor: "#e3f1f4",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default HomePageStudent;
