import * as React from "react";
import {
  TextInput,
  StyleSheet,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ValidationScrenHomeOwner = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.validationScrenHomeOwner}>
      <TextInput
        style={styles.rectangleTextInput}
        placeholder="  Valdate Your Email   "
        keyboardType="default"
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../../assets/ValidationScreen2/group9.png")}
      />
      <Pressable
        style={styles.vectorPressable}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../../assets/ValidationScreen2/vector.png")}
        />
      </Pressable>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("WelcomeLoginHouseOwner")}
      />
      <Text style={styles.confirmText}>confirm</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleTextInput: {
    position: "absolute",
    top: 457,
    left: 51,
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 295,
    height: 44,
  },
  groupIcon: {
    position: "absolute",
    height: "30.91%",
    width: "58.89%",
    top: "6.5%",
    right: "22.5%",
    bottom: "62.59%",
    left: "18.61%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
    color: "#fff",
    textAlign: "center",
    width: 188,
    height: 22,
  },
  validationScrenHomeOwner: {
    position: "relative",
    backgroundColor: "#dfe8ea",
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default ValidationScrenHomeOwner;
