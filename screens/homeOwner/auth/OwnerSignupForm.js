import * as React from "react";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  View,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";

const HouseOwnerRegister = () => {
  const [rectangleDropdownOpen, setRectangleDropdownOpen] = useState(false);
  const [rectangleDropdownValue, setRectangleDropdownValue] = useState("");
  const [rectangleDropdownItems, setRectangleDropdownItems] = useState([
    { value: "Ariena", label: "Ariena" },
    { value: "Manouba", label: "Manouba" },
    { value: "Tunis", label: "Tunis" },
  ]);
  const [rectangleDatePicker, setRectangleDatePicker] = useState(undefined);
  const navigation = useNavigation();
console.log(rectangleDatePicker);
  return (
    <ScrollView>
    <View style={styles.houseOwnerRegisterView}>
      <Image
        style={styles.undrawAccessAccountRe8spmIcon}
        resizeMode="cover"
        source={require("../../../assets/homeOwner/Register/undrawAccess.png")}
      />
      <Image
        style={styles.icons8PhotoGallery1001}
        resizeMode="cover"
        source={require("../../../assets/homeOwner/Register/icons.png")}
      />
      <Text style={styles.uploadYourPicture}>{`Upload your picture `}</Text>
      <Pressable
        style={styles.loginPressable}
        onPress={() => navigation.navigate("WelcomeLoginHouseOwner")}
      >
        <Text style={styles.loginText}>login</Text>
        <Text style={styles.text}>{`  `}</Text>
      </Pressable>
      <Text style={styles.haveAnAccount}>{`Have an account ?`}</Text>
      <View style={styles.rectangleView}>
        <DropDownPicker
          style={styles.dropDownPicker}
          open={rectangleDropdownOpen}
          setOpen={setRectangleDropdownOpen}
          value={rectangleDropdownValue}
          setValue={setRectangleDropdownValue}
          placeholder="City "
          items={rectangleDropdownItems}
          dropDownContainerStyle={styles.rectangleDropdowndropDownContainer}
        />
      </View>
      <TextInput
        style={styles.rectangleTextInput}
        placeholder="  C.I.N"
        keyboardType="default"
      />
      <TextInput
        style={styles.rectangleTextInput1}
        placeholder="  C.I.N"
        keyboardType="default"
      />
      <TextInput
        style={styles.rectangleTextInput2}
        placeholder="  Password"
        keyboardType="default"
      />
      <TextInput
        style={styles.rectangleTextInput3}
        placeholder="  Phone number "
        keyboardType="phone-pad"
      />
      <RNKDatepicker
        style={styles.rectangleRNKDatepicker}
        placeholder="Date of birth "
        date={rectangleDatePicker}
        onSelect={setRectangleDatePicker}
        controlStyle={styles.rectangleDatePickerValue}
      />
      <TextInput
        style={styles.rectangleTextInput4}
        placeholder="  Email"
        keyboardType="default"
      />
      <TextInput
        style={styles.rectangleTextInput5}
        placeholder="  Full name "
        keyboardType="default"
      />
      <Text style={styles.registerText1}>
        <Text style={styles.registerTxtText}>
          <Text style={styles.registerText}>Register</Text>
          <Text style={styles.text1}>{` `}</Text>
        </Text>
      </Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../../../assets/homeOwner/Register/ellipse11.png")}
      />
      <Image
        style={styles.ellipseIcon1}
        resizeMode="cover"
        source={require("../../../assets/homeOwner/Register/ellipse12.png")}
      />
      <Image
        style={styles.ellipseIcon2}
        resizeMode="cover"
        source={require("../../../assets/homeOwner/Register/ellipse111.png")}
      />
      <Pressable
        style={styles.vectorPressable}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../../../assets/homeOwner/Register/vector.png")}
        />
      </Pressable>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rectangleDropdowndropDownContainer: {
    backgroundColor: "#d9d9d9",
  },
  rectangleDatePickerValue: {
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 320,
    height: 50,
  },
  undrawAccessAccountRe8spmIcon: {
    position: "absolute",
    top: 47,
    left: 54,
    borderRadius: 127,
    width: 246,
    height: 203,
  },
  icons8PhotoGallery1001: {
    position: "absolute",
    top: 762,
    left: 54,
    width: 68,
    height: 89,
  },
  uploadYourPicture: {
    position: "absolute",
    top: 791,
    left: 161,
    fontSize: 16,
   
    color: "#645e5e",
    textAlign: "left",
    width: 160,
    height: 40,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  loginText: {
    color: "#fff",
  },
  text: {
    color: "#000",
  },
  loginPressable: {
    position: "absolute",
    top: 914,
    left: 218,
    fontSize: 14,
    textAlign: "left",
    width: 31,
    height: 18,
  },
  haveAnAccount: {
    position: "absolute",
    top: 914,
    left: 89,
    fontSize: 14,
    color: "#000",
    textAlign: "left",
  },
  dropDownPicker: {
    backgroundColor: "#d9d9d9",
  },
  rectangleView: {
    position: "absolute",
    top: 624,
    left: 18,
    borderRadius: 13,
    width: 320,
    height: 50,
  },
  rectangleTextInput: {
    position: "absolute",
    top: 697,
    left: 18,
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 320,
    height: 50,
  },
  rectangleTextInput1: {
    position: "absolute",
    top: 848,
    left: 27,
    borderRadius: 13,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: 320,
    height: 50,
  },
  rectangleTextInput2: {
    position: "absolute",
    top: 408.5,
    left: 18,
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 320,
    height: 50,
  },
  rectangleTextInput3: {
    position: "absolute",
    top: 482,
    left: 18,
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 320,
    height: 50,
  },
  rectangleRNKDatepicker: {
    position: "absolute",
    top: 553,
    left: 18,
  },
  rectangleTextInput4: {
    position: "absolute",
    top: 337.5,
    left: 18,
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 320,
    height: 50,
  },
  rectangleTextInput5: {
    position: "absolute",
    top: 266,
    left: 18,
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 320,
    height: 50,
  },
  registerText: {
    fontSize: 24,
    color: "#fff",
  },
  text1: {
    fontSize: 20,
    color: "#000",
  },
  registerTxtText: {
    lineBreak: "anywhere",
    width: "100%",
  },
  registerText1: {
    position: "absolute",
    top: 852,
    left: 89,
    fontWeight: "700",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    width: 172,
    height: 36,
  },
  ellipseIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 119,
    height: 119,
    opacity: 0.3,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 47,
    left: 0,
    width: 75,
    height: 80,
  },
  ellipseIcon2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 119,
    height: 119,
    opacity: 0.3,
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
    left: "5%",
    top: "3.15%",
    right: "90%",
    bottom: "94%",
    width: "5%",
    height: "2.85%",
  },
  houseOwnerRegisterView: {
    position: "relative",
    backgroundColor: "#6a9ea9",
    flex: 1,
    width: "100%",
    height: 984,
  },
});

export default HouseOwnerRegister;
