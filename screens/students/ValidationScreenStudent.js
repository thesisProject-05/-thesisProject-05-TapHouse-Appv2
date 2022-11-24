import * as React from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ValidationScrenStudent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.validationScrenStudent}>
      <Pressable
        style={styles.vectorPressable}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../../assets/ValidationScreen/vector.png")}
        />
      </Pressable>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("WelcomeLoginStudent")}
      />
      <Text style={styles.confirmText}>confirm</Text>
      <Image
        style={styles.undrawCertificationReIfll1Icon}
        resizeMode="cover"
        source={require("../../assets/ValidationScreen/undrawCertification.png")}
      />
      <TextInput
        style={styles.rectangleTextInput}
        placeholder="  Valdate Your  Email "
        keyboardType="default"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable: {
    position: "absolute",
    left: "3.33%",
    top: "6.5%",
    right: "91.67%",
    bottom: "90.05%",
    width: "5%",
    height: "3.45%",
  },
  rectanglePressable: {
    position: "absolute",
    top: 573,
    left: 51,
    borderRadius: 13,
    backgroundColor: "#3f424a",
    width: 295,
    height: 40,
  },
  confirmText: {
    position: "absolute",
    top: 579,
    left: 102,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 188,
    height: 22,
  },
  undrawCertificationReIfll1Icon: {
    position: "absolute",
    top: 69,
    left: 84,
    width: 223,
    height: 260,
  },
  rectangleTextInput: {
    position: "absolute",
    top: 457,
    left: 51,
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 295,
    height: 44,
  },
  validationScrenStudent: {
    position: "relative",
    backgroundColor: "#dfe8ea",
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default ValidationScrenStudent;
