import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet,Pressable, Text,Modal, View,Button,LogoTitle } from 'react-native';
import Navigation from "./screens/Navigation";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (

     <Navigation/>
  
  )
        }
      

export default App;
