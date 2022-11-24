import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileView = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileView}>
      <Image
        style={styles.menu1Icon}
        resizeMode="cover"
        source={require("../assets/ProfileView/menu1.png")}
      />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ProfileView/ellipse3.png")}
      />
      <Text style={styles.myProfileText}>My Profile</Text>
      <Text style={styles.messagesText}>Messages</Text>
      <Text style={styles.locationText}>Location</Text>
      <Image
        style={styles.ellipseIcon1}
        resizeMode="cover"
        source={require("../assets/ProfileView/ellipse4.png")}
      />
      <Text style={styles.text1}>
        <Text style={styles.text}>2</Text>
      </Text>
      <Text style={styles.myProfileText1}>my profile</Text>
      <Text style={styles.settingsText1}>
        <Text style={styles.settingsText}>Settings</Text>
      </Text>
      <Text style={styles.activeText}>Active</Text>
      <Image
        style={styles.iconsaxBulkarrowright}
        resizeMode="cover"
        source={require("../assets/ProfileView/icons3.png")}
      />
      <Pressable
        style={styles.iconsaxBulkarrowrightPressable}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/ProfileView/icons3.png")}
        />
      </Pressable>
      <Image
        style={styles.iconsaxBulkarrowright1}
        resizeMode="cover"
        source={require("../assets/ProfileView/icons2.png")}
      />
      <Image
        style={styles.iconsaxBulkarrowright2}
        resizeMode="cover"
        source={require("../assets/ProfileView/icons2.png")}
      />
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/ProfileView/vector14.png")}
      />
      <Image
        style={styles.vectorIcon1}
        resizeMode="cover"
        source={require("../assets/ProfileView/vector15.png")}
      />
      <Image
        style={styles.vectorIcon2}
        resizeMode="cover"
        source={require("../assets/ProfileView/vector16.png")}
      />
      <Image
        style={styles.vectorIcon3}
        resizeMode="cover"
        source={require("../assets/ProfileView/vector17.png")}
      />
      <Image
        style={styles.vectorIcon4}
        resizeMode="cover"
        source={require("../assets/ProfileView/vector18.png")}
      />
      <Image
        style={styles.iconsaxOutlinemessages}
        resizeMode="cover"
        source={require("../assets/ProfileView/iconsmessages.png")}
      />
      <Image
        style={styles.vectorIcon5}
        resizeMode="cover"
        source={require("../assets/ProfileView/vector19.png")}
      />
      <Image
        style={styles.vectorIcon6}
        resizeMode="cover"
        source={require("../assets/ProfileView/vector20.png")}
      />
      <Image
        style={styles.vectorIcon7}
        resizeMode="cover"
        source={require("../assets/ProfileView/vector21.png")}
      />
      <View style={styles.lineView} />
      <Image
        style={styles.undrawMaleAvatarReY8801Icon}
        resizeMode="cover"
        source={require("../assets/ProfileView/undrawMale.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menu1Icon: {
    position: "absolute",
    top: 21,
    left: 12,
    width: 44,
    height: 42,
  },
  ellipseIcon: {
    position: "absolute",
    top: 336,
    left: 39,
    width: 19,
    height: 19,
  },
  myProfileText: {
    position: "absolute",
    top: 394,
    left: 111,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 199,
    height: 21,
  },
  messagesText: {
    position: "absolute",
    top: 448,
    left: 111,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 199,
    height: 21,
  },
  locationText: {
    position: "absolute",
    top: 585,
    left: 111,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 199,
    height: 21,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 445,
    left: 315,
    width: 34.09,
    height: 28,
  },
  text: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text1: {
    position: "absolute",
    top: 451,
    left: 326,
    fontSize: 16,
    fontWeight: "800",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
  },
  myProfileText1: {
    position: "absolute",
    top: 513,
    left: 111,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 199,
    height: 21,
  },
  settingsText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  settingsText1: {
    position: "absolute",
    top: 660,
    left: 111,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 199,
    height: 21,
  },
  activeText: {
    position: "absolute",
    top: 336,
    left: 116,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 199,
    height: 21,
  },
  iconsaxBulkarrowright: {
    position: "absolute",
    top: 496,
    left: 300,
    width: 74,
    height: 69,
    overflow: "hidden",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  iconsaxBulkarrowrightPressable: {
    position: "absolute",
    left: 300,
    top: 364,
    width: 74,
    height: 69,
  },
  iconsaxBulkarrowright1: {
    position: "absolute",
    top: 636,
    left: 303,
    width: 74,
    height: 69,
    overflow: "hidden",
  },
  iconsaxBulkarrowright2: {
    position: "absolute",
    top: 565,
    left: 303,
    width: 74,
    height: 69,
    overflow: "hidden",
  },
  vectorIcon: {
    position: "absolute",
    height: "6.4%",
    width: "14.67%",
    top: "90.39%",
    right: "3.73%",
    bottom: "3.2%",
    left: "81.6%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon1: {
    position: "absolute",
    height: "1.92%",
    width: "5.44%",
    top: "72.15%",
    right: "84.92%",
    bottom: "25.93%",
    left: "9.64%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon2: {
    position: "absolute",
    height: "7.51%",
    width: "14.59%",
    top: "69.7%",
    right: "80.34%",
    bottom: "22.79%",
    left: "5.07%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon3: {
    position: "absolute",
    height: "2%",
    width: "5.67%",
    top: "81.64%",
    right: "83.98%",
    bottom: "16.35%",
    left: "10.36%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon4: {
    position: "absolute",
    height: "5.44%",
    width: "16.26%",
    top: "79.93%",
    right: "78.67%",
    bottom: "14.64%",
    left: "5.07%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconsaxOutlinemessages: {
    position: "absolute",
    top: 433,
    left: 13,
    width: 66,
    height: 52,
    overflow: "hidden",
  },
  vectorIcon5: {
    position: "absolute",
    height: "4.31%",
    width: "7.2%",
    top: "46.67%",
    right: "84.53%",
    bottom: "49.01%",
    left: "8.27%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon6: {
    position: "absolute",
    height: "2.81%",
    width: "12.44%",
    top: "64.89%",
    right: "81.69%",
    bottom: "32.31%",
    left: "5.87%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon7: {
    position: "absolute",
    height: "3.58%",
    width: "12.44%",
    top: "61.95%",
    right: "81.69%",
    bottom: "34.48%",
    left: "5.87%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  lineView: {
    position: "absolute",
    top: 726.5,
    left: 11.5,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 1,
    width: 347.04,
    height: 1,
  },
  undrawMaleAvatarReY8801Icon: {
    position: "absolute",
    top: 63,
    left: 105,
    width: 164,
    height: 149,
    overflow: "hidden",
  },
  profileView: {
    position: "relative",
    borderRadius: 30,
    backgroundColor: "#dfe8ea",
    borderStyle: "solid",
    borderColor: "#dfe8ea",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default ProfileView;
