import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Profile = () => {
  return (
    <View style={styles.profileView}>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/Profile/ellipse1.png")}
      />
      <Text style={styles.morganJamesText}>Morgan James</Text>
      <Text style={styles.uIUXDesignerText}>UI/UX Designer</Text>
      <View style={styles.manG60b049dce12801View} />
      <Image
        style={styles.ellipseIcon1}
        resizeMode="cover"
        source={require("../assets/Profile/ellipse1.png")}
      />
      <Text style={styles.adhemText1}>
        <Text style={styles.adhemText}>Adhem</Text>
      </Text>
      <Image
        style={styles.ellipseIcon2}
        resizeMode="cover"
        source={require("../assets/Profile/ellipse3.png")}
      />
      <Image
        style={styles.pencilG9d2a08ec16401Icon}
        resizeMode="cover"
        source={require("../assets/Profile/pencil.png")}
      />
      <Image
        style={styles.image1Icon}
        resizeMode="cover"
        source={require("../assets/Profile/image1.png")}
      />
      <Text style={styles.profileText1}>
        <Text style={styles.profileText}>Profile</Text>
      </Text>
      <Text style={styles.usernameText}>Username</Text>
      <Text style={styles.adhemHsounaText}>Adhem Hsouna</Text>
      <Image
        style={styles.contact1Icon}
        resizeMode="cover"
        source={require("../assets/Profile/contact1.png")}
      />
      <Text style={styles.contactText}>Contact</Text>
      <Text style={styles.text}>+21623880910</Text>
      <Text style={styles.emailText}>{`Email `}</Text>
      <Text style={styles.adhem1937gmailcomText}>Adhem1937@gmail.com</Text>
      <View style={styles.lineView} />
      <View style={styles.lineView1} />
      <Text style={styles.otherWaysPeopleCanFindMe}>
        Other Ways People Can Find Me
      </Text>
      <Image
        style={styles.instagram1Icon}
        resizeMode="cover"
        source={require("../assets/Profile/instagram1.png")}
      />
      <Image
        style={styles.linkedInG3dfb0616b6401Icon}
        resizeMode="cover"
        source={require("../assets/Profile/linked.png")}
      />
      <View style={styles.lineView2} />
      <Text style={styles.helpAndFeedback}>Help and Feedback</Text>
      <Image
        style={styles.linkedInG3dfb0616b6402Icon}
        resizeMode="cover"
        source={require("../assets/Profile/linked2.png")}
      />
      <Image
        style={styles.undrawMaleAvatarReY8801Icon}
        resizeMode="cover"
        source={require("../assets/Profile/undrawMale.png")}
      />
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/Profile/vector9.png")}
      />
      <Image
        style={styles.vectorIcon1}
        resizeMode="cover"
        source={require("../assets/Profile/vector10.png")}
      />
      <Image
        style={styles.vectorIcon2}
        resizeMode="cover"
        source={require("../assets/Profile/vector11.png")}
      />
      <Image
        style={styles.vectorIcon3}
        resizeMode="cover"
        source={require("../assets/Profile/vector12.png")}
      />
      <Image
        style={styles.vectorIcon4}
        resizeMode="cover"
        source={require("../assets/Profile/vector13.png")}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/Profile/group2.png")}
      />
      <Image
        style={styles.facebook2Icon}
        resizeMode="cover"
        source={require("../assets/Profile/facebook2.png")}
      />
      <View style={styles.gitHubb1View} />
      <Image
        style={styles.tlchargement31}
        resizeMode="cover"
        source={require("../assets/Profile/tlchargement.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ellipseIcon: {
    position: "absolute",
    top: 190,
    left: 405,
    width: 129,
    height: 124,
  },
  morganJamesText: {
    position: "absolute",
    top: 328,
    left: 403,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 189,
    height: 16,
  },
  uIUXDesignerText: {
    position: "absolute",
    top: 358,
    left: 418,
    fontSize: 14,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  manG60b049dce12801View: {
    position: "absolute",
    top: 360,
    left: 185,
    width: 276,
    height: 133,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 46,
    left: 127,
    width: 129,
    height: 124,
  },
  adhemText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  adhemText1: {
    position: "absolute",
    top: 190,
    left: 134,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 189,
    height: 16,
  },
  ellipseIcon2: {
    position: "absolute",
    top: 151,
    left: 263,
    width: 19,
    height: 19,
  },
  pencilG9d2a08ec16401Icon: {
    position: "absolute",
    top: 185,
    left: 316,
    width: 22,
    height: 25,
  },
  image1Icon: {
    position: "absolute",
    top: 354,
    left: 15,
    width: 51,
    height: 52,
  },
  profileText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  profileText1: {
    position: "absolute",
    top: 268,
    left: 30,
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  usernameText: {
    position: "absolute",
    top: 338,
    left: 77,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  adhemHsounaText: {
    position: "absolute",
    top: 339,
    left: 193,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 187,
    height: 12,
  },
  contact1Icon: {
    position: "absolute",
    top: 385,
    left: 6,
    width: 61,
    height: 61,
  },
  contactText: {
    position: "absolute",
    top: 404,
    left: 79,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  text: {
    position: "absolute",
    top: 404,
    left: 193,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  emailText: {
    position: "absolute",
    top: 488,
    left: 67,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  adhem1937gmailcomText: {
    position: "absolute",
    top: 488,
    left: 132,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  lineView: {
    position: "absolute",
    top: 296,
    left: 14.48,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 1,
    width: 347.04,
    height: 1,
  },
  lineView1: {
    position: "absolute",
    top: 544.5,
    left: 19.5,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 1,
    width: 347.04,
    height: 1,
  },
  otherWaysPeopleCanFindMe: {
    position: "absolute",
    top: 558,
    left: 26,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  instagram1Icon: {
    position: "absolute",
    top: 627,
    left: 94,
    width: 40,
    height: 40,
  },
  linkedInG3dfb0616b6401Icon: {
    position: "absolute",
    top: -689,
    left: 253,
    width: 2.99,
    height: 45,
  },
  lineView2: {
    position: "absolute",
    top: 713.5,
    left: 15.5,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 1,
    width: 347.04,
    height: 1,
  },
  helpAndFeedback: {
    position: "absolute",
    top: 751,
    left: 79,
    fontSize: 16,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    display: "none",
  },
  linkedInG3dfb0616b6402Icon: {
    position: "absolute",
    top: 628,
    left: 289,
    width: 40,
    height: 38.5,
  },
  undrawMaleAvatarReY8801Icon: {
    position: "absolute",
    top: 21,
    left: 96,
    width: 164,
    height: 149,
    overflow: "hidden",
  },
  vectorIcon: {
    position: "absolute",
    height: "5.3%",
    width: "13.87%",
    top: "89.53%",
    right: "5.33%",
    bottom: "5.17%",
    left: "80.8%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon1: {
    position: "absolute",
    height: "6.12%",
    width: "9.76%",
    top: "38.67%",
    right: "86.24%",
    bottom: "55.21%",
    left: "4%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon2: {
    position: "absolute",
    height: "7.14%",
    width: "13.87%",
    top: "58.25%",
    right: "84.27%",
    bottom: "34.61%",
    left: "1.87%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon3: {
    position: "absolute",
    height: "2.46%",
    width: "6.93%",
    top: "60.59%",
    right: "87.73%",
    bottom: "36.95%",
    left: "5.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon4: {
    position: "absolute",
    height: "1.35%",
    width: "6.93%",
    top: "60.59%",
    right: "87.73%",
    bottom: "38.05%",
    left: "5.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupIcon: {
    position: "absolute",
    height: "7.64%",
    width: "34.67%",
    top: "76.23%",
    right: "25.6%",
    bottom: "16.13%",
    left: "39.73%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  facebook2Icon: {
    position: "absolute",
    top: 631,
    left: 164,
    width: 30,
    height: 32,
  },
  gitHubb1View: {
    position: "absolute",
    top: 597,
    left: 9,
    width: 64,
    height: 101,
  },
  tlchargement31: {
    position: "absolute",
    top: 619,
    left: 21,
    width: 52,
    height: 56,
  },
  profileView: {
    position: "relative",
    borderRadius: 30,
    backgroundColor: "#dfe8ea",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 2,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Profile;
