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
        style={styles.undrawMaleAvatarReY8801Icon}
        resizeMode="cover"
        source={require("../assets/ProfileView/undrawMale.png")}
      />
      <Image
        style={styles.activeIcon}
        resizeMode="cover"
        source={require("../assets/ProfileView/circle1.png")}
      />
      <Text style={styles.myProfileText}>Active</Text>
      <Image
        style={styles.iconsaxOutlinemessages}
        resizeMode="cover"
        source={require("../assets/ProfileView/iconsmessages.png")}
      />

      <Text style={styles.messagesText}>Messages</Text>
     
      
       <Text style={styles.settingsText}>Settings</Text>
      
      <Image
        style={styles.setting1}
        resizeMode="cover"
        source={require("../assets/ProfileView/setting1.png")}
      />
          {/* <Image
        style={styles.setting2}
        resizeMode="cover"
        source={require("../assets/ProfileView/vector17.png")}
      /> */}

      <Text style={styles.profilText} >Profil</Text>
      
      <Image
        style={styles.profilIcon}
        resizeMode="cover"
        source={require("../assets/ProfileView/vector19.png")}
      />
      <Image
        style={styles.statusArrow}
        resizeMode="cover"
        source={require("../assets/ProfileView/icons3.png")}
      />
    
        <Image
          style={styles.settingsArrow}
          resizeMode="cover"
          source={require("../assets/ProfileView/icons2.png")}
        />
      <Pressable 
        style={styles.goToProfil}
       onPress={() => navigation.navigate("Profile")}
      > 
      <Image
       style={styles.profilArrow}
        resizeMode="cover"
        source={require("../assets/ProfileView/icons2.png")}
       
      />
    </Pressable>
      <Image
        style={styles.messageArrow}
        resizeMode="cover"
        source={require("../assets/ProfileView/icons2.png")}
      />
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/ProfileView/vector14.png")}
        onPress={() => navigation.goBack()}
      />
    
   
  

  
     
      <View style={styles.lineView} />
    </View>
  );
};
export default ProfileView;

const styles = StyleSheet.create({

  profileView: {
    position: "relative",
    borderRadius: 30,
    backgroundColor: "#dfe8ea",
    borderStyle: "solid",
    borderColor: "#dfe8ea",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: "100%",
  },

  undrawMaleAvatarReY8801Icon: {
    position: "absolute",
    top: "5.00%",
    left: "65.00%",
    width: "27.5%",
    height: "10%",
    // overflow: "hidden",
  },
  menu1Icon: {
    position: "absolute",
    top: "6.50%",
    left: "8%",
    width: "14.5%",
    height: "7%",
  },
  activeIcon: {
    position: "absolute",
    top: "30.15%",
    left: "9.00%",
    bottom: "25.93%",
    width: "6.5%",
    height: "3%",
  },
  myProfileText: {
    position: "absolute",
    top: "29.70%",
    left: "24.00%",
    fontSize: 18,
    color: "#000",
    textAlign: "left",
    width: "50.00%",
    height: "50%",
  },
  messagesText: {
    position: "absolute",
    top: "43.93%",
    left: "24.00%",
    fontSize: 18,
    color: "#000",
    textAlign: "left",
    width: "50.00%",
    height: "50%",
  },
  locationText: {
    position: "absolute",
    top: 585,
    left: 111,
    fontSize: 20,
    color: "#000",
    textAlign: "left",
    width: "50.00%",
    height: 21,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 445,
    left: 315,
    width: 34.09,
    height: 28,
  },
  settingsText: {
    position: "absolute",
    top: "49.67%",
    left: "24.00%",
    fontSize: 18,
    color: "#000",
    textAlign: "left",
    width: "30%",
    height: "10%",
  },

  statusArrow: {
    position: "absolute",
    top: "27.2%",
    left: "80.64%",
    width: "20%",
    height: "7%",
    overflow: "hidden",
  },
  profilArrow: {
    position: "absolute",
    top: "28.2%",
    left: "60.6%",
    width: "190%",
    height: "7%",
    overflow: "hidden",
  },
  messageArrow: {
    position: "absolute",
    top: "42.93%",
    left: "80.64%",
    width: "20%",
    height: "7%",
    overflow: "hidden",
  },
  settingsArrow: {
    position: "absolute",
    top: "50.2%",
    width: "20%",
    height: "7%",
    left: "80.64%",
  },
  goToProfil: {
    position: "absolute",
    left: "75.64%",
    top: "0.25%",
    width: "10%",
    height: "120%",
  },


  vectorIcon: {
    position: "absolute",
    height: "6.4%",
    width: "14.67%",
    top: "75.39%",
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
  setting2: {
    position: "absolute",
    height: "2%",
    width: "5.67%",
    top: "51.05%",
    right: "83.98%",
    bottom: "16.35%",
    left: "10.36%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  setting1: {
    position: "absolute",
    height: "5.44%",
    width: "11.26%",
    top: "49.67%",
    right: "78.67%",
    bottom: "14.64%",
    left: "7.07%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconsaxOutlinemessages: {
    position: "absolute",
    top: "43.93%",
    left: "8.64%",
    width: "8.5%",
    height: "4%",
    overflow: "hidden",
  },
  profilText: {
    position: "absolute",
    top: "36.67%",
    left: "24.00%",
    fontSize: 18,
    color: "#000",
    textAlign: "left",
    width: 180,
    height: 28,
  },
  profilIcon: {
    position: "absolute",
    height: "4.31%",
    width: "7.2%",
    top: "36.67%",
    right: "84.53%",
    // bottom: "49.01%",
    left: "8.27%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  // vectorIcon6: {
  //   position: "absolute",
  //   height: "2.81%",
  //   width: "12.44%",
  //   top: "64.89%",
  //   right: "81.69%",
  //   bottom: "32.31%",
  //   left: "5.87%",
  //   maxWidth: "100%",
  //   overflow: "hidden",
  //   maxHeight: "100%",
  // },
  // vectorIcon7: {
  //   position: "absolute",
  //   height: "3.58%",
  //   width: "12.44%",
  //   top: "61.95%",
  //   right: "81.69%",
  //   bottom: "34.48%",
  //   left: "5.87%",
  //   maxWidth: "100%",
  //   overflow: "hidden",
  //   maxHeight: "100%",
  // },
  // lineView: {
  //   position: "absolute",
  //   top: 726.5,
  //   left: 11.5,
  //   borderStyle: "solid",
  //   borderColor: "#000",
  //   borderTopWidth: 1,
  //   width: 347.04,
  //   height: 1,
  // },

});
