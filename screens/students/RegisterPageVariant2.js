import * as React from "react";
import { useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import DropDownPicker from "react-native-dropdown-picker";

const StudentRegister = () => {
  const [rectangleDatePicker, setRectangleDatePicker] = useState(undefined);
  const [rectangleDropdownOpen, setRectangleDropdownOpen] = useState(false);
  const [rectangleDropdownValue, setRectangleDropdownValue] = useState("");
  const [rectangleDropdownItems, setRectangleDropdownItems] = useState([
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ]);
  const [rectangleDropdown1Open, setRectangleDropdown1Open] = useState(false);
  const [rectangleDropdown1Value, setRectangleDropdown1Value] = useState("");
  const [rectangleDropdown1Items, setRectangleDropdown1Items] = useState([
    { value: "Ariena", label: "Ariena" },
    { value: "Manouba", label: "Manouba" },
    { value: "Tunis", label: "Tunis" },
  ]);
  const [rectangleDropdown2Open, setRectangleDropdown2Open] = useState(false);
  const [rectangleDropdown2Value, setRectangleDropdown2Value] = useState("");
  const [rectangleDropdown2Items, setRectangleDropdown2Items] = useState([
    { value: "ISG", label: "ISG" },
    { value: "IHEC", label: "IHEC" },
  ]);
  const [rectangleDropdown3Open, setRectangleDropdown3Open] = useState(false);
  const [rectangleDropdown3Value, setRectangleDropdown3Value] = useState("");
  const [rectangleDropdown3Items, setRectangleDropdown3Items] = useState([
    { value: "House", label: "House" },
    { value: "Residence", label: "Residence" },
  ]);
  const navigation = useNavigation();

  return (
    <View style={styles.studentRegisterView}>
      <Text style={styles.createNewAccount}>{`Create new  account `}</Text>
      <Image
        style={styles.undrawMyAppReGxtj1Icon}
        resizeMode="cover"
        source={require("../../assets/students/RegisterPage/undraw.png")}
      />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../../assets/students/RegisterPage/rectangle7.png")}
      />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../../assets/students/RegisterPage/ellipse111.png")}
      />
      <Image
        style={styles.ellipseIcon1}
        resizeMode="cover"
        source={require("../../assets/students/RegisterPage/ellipse121.png")}
      />
      <Pressable
        style={styles.vectorPressable}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../../assets/students/RegisterPage/vector7.png")}
        />
      </Pressable>
      <TextInput
        style={styles.rectangleTextInput}
        placeholder="  Full name "
        keyboardType="default"
      />
      <TextInput
        style={styles.rectangleTextInput1}
        placeholder="  Password"
        keyboardType="default"
      />
      <TextInput
        style={styles.rectangleTextInput2}
        placeholder="  Email"
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
      <View style={styles.rectangleView}>
        <DropDownPicker
          style={styles.dropDownPicker}
          open={rectangleDropdownOpen}
          setOpen={setRectangleDropdownOpen}
          value={rectangleDropdownValue}
          setValue={setRectangleDropdownValue}
          placeholder="Gender"
          items={rectangleDropdownItems}
          dropDownContainerStyle={styles.rectangleDropdowndropDownContainer}
        />
      </View>
      <View style={styles.rectangleView1}>
        <DropDownPicker
          style={styles.dropDownPicker1}
          open={rectangleDropdown1Open}
          setOpen={setRectangleDropdown1Open}
          value={rectangleDropdown1Value}
          setValue={setRectangleDropdown1Value}
          placeholder="City "
          items={rectangleDropdown1Items}
          dropDownContainerStyle={styles.rectangleDropdown1dropDownContainer}
        />
      </View>
      <View style={styles.rectangleView2}>
        <DropDownPicker
          style={styles.dropDownPicker2}
          open={rectangleDropdown2Open}
          setOpen={setRectangleDropdown2Open}
          value={rectangleDropdown2Value}
          setValue={setRectangleDropdown2Value}
          placeholder="University"
          items={rectangleDropdown2Items}
          dropDownContainerStyle={styles.rectangleDropdown2dropDownContainer}
        />
      </View>
      <View style={styles.rectangleView3}>
        <DropDownPicker
          style={styles.dropDownPicker3}
          open={rectangleDropdown3Open}
          setOpen={setRectangleDropdown3Open}
          value={rectangleDropdown3Value}
          setValue={setRectangleDropdown3Value}
          placeholder="Looking for "
          items={rectangleDropdown3Items}
          dropDownContainerStyle={styles.rectangleDropdown3dropDownContainer}
        />
      </View>
      <TextInput
        style={styles.rectangleTextInput4}
        placeholder="  C.I.N"
        keyboardType="default"
      />
      <TextInput
        style={styles.rectangleTextInput5}
        placeholder="  Max budget "
        keyboardType="default"
      />
      <Image
        style={styles.icons8PhotoGallery1001}
        resizeMode="cover"
        source={require("../../assets/students/RegisterPage/icons.png")}
      />
      <Text style={styles.uploadYourPicture}>{`Upload your picture `}</Text>
      <Pressable
        style={styles.loginPressable}
        onPress={() => navigation.navigate("WelcomeLoginStudent")}
      >
        <Text style={styles.loginText}>login</Text>
        <Text style={styles.text}>{`  `}</Text>
      </Pressable>
      <Text style={styles.haveAnAccount}>{`Have an account ? `}</Text>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("ValidationScrenStudent")}
      />
      <Text style={styles.registerText}>{`Register `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleDatePickerValue: {
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 320,
    height: 50,
  },
  rectangleDropdowndropDownContainer: {
    backgroundColor: "#d9d9d9",
  },
  rectangleDropdown1dropDownContainer: {
    backgroundColor: "#d9d9d9",
  },
  rectangleDropdown2dropDownContainer: {
    backgroundColor: "#d9d9d9",
  },
  rectangleDropdown3dropDownContainer: {
    backgroundColor: "#d9d9d9",
  },
  createNewAccount: {
    position: "absolute",
    top: 243,
    left: 106,
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    textAlign: "left",
  },
  undrawMyAppReGxtj1Icon: {
    position: "absolute",
    top: 52,
    left: 94,
    width: 204,
    height: 165,
    overflow: "hidden",
  },
  rectangleIcon: {
    position: "absolute",
    top: 653,
    left: 62,
    width: 161,
    height: 23,
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
    top: 55,
    left: 0,
    width: 75,
    height: 80,
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
    left: "2.54%",
    top: "2.89%",
    right: "92.88%",
    bottom: "94.78%",
    width: "4.58%",
    height: "2.32%",
  },
  rectangleTextInput: {
    position: "absolute",
    top: 298,
    left: 35,
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 320,
    height: 50,
  },
  rectangleTextInput1: {
    position: "absolute",
    top: 440,
    left: 35,
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 320,
    height: 50,
  },
  rectangleTextInput2: {
    position: "absolute",
    top: 369,
    left: 35,
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 320,
    height: 50,
  },
  rectangleTextInput3: {
    position: "absolute",
    top: 511,
    left: 35,
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 320,
    height: 50,
  },
  rectangleRNKDatepicker: {
    position: "absolute",
    top: 582,
    left: 35,
  },
  dropDownPicker: {
    backgroundColor: "#d9d9d9",
  },
  rectangleView: {
    position: "absolute",
    top: 653,
    left: 37,
    borderRadius: 13,
    width: 320,
    height: 50,
  },
  dropDownPicker1: {
    backgroundColor: "#d9d9d9",
  },
  rectangleView1: {
    position: "absolute",
    top: 722,
    left: 35,
    borderRadius: 13,
    width: 320,
    height: 50,
  },
  dropDownPicker2: {
    backgroundColor: "#d9d9d9",
  },
  rectangleView2: {
    position: "absolute",
    top: 792,
    left: 35,
    borderRadius: 13,
    width: 320,
    height: 50,
  },
  dropDownPicker3: {
    backgroundColor: "#d9d9d9",
  },
  rectangleView3: {
    position: "absolute",
    top: 863,
    left: 35,
    borderRadius: 13,
    width: 320,
    height: 50,
  },
  rectangleTextInput4: {
    position: "absolute",
    top: 932,
    left: 35,
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 320,
    height: 50,
  },
  rectangleTextInput5: {
    position: "absolute",
    top: 1002,
    left: 35,
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 320,
    height: 50,
  },
  icons8PhotoGallery1001: {
    position: "absolute",
    top: 1064,
    left: 54,
    width: 68,
    height: 89,
  },
  uploadYourPicture: {
    position: "absolute",
    top: 1093,
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
    top: 1216,
    left: 218,
    fontSize: 14,
    textAlign: "left",
    width: 31,
    height: 18,
  },
  haveAnAccount: {
    position: "absolute",
    top: 1216,
    left: 89,
    fontSize: 14,
    color: "#000",
    textAlign: "left",
  },
  rectanglePressable: {
    position: "absolute",
    top: 1152,
    left: 35,
    borderRadius: 13,
    backgroundColor: "#3f424a",
    width: 320,
    height: 50,
  },
  registerText: {
    position: "absolute",
    top: 1162,
    left: 153,
    fontSize: 20,
    color: "#fff",
    textAlign: "left",
    width: 152,
    height: 32,
  },
  studentRegisterView: {
    position: "relative",
    backgroundColor: "#6a9ea9",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 1313,
  },
});

export default StudentRegister;
