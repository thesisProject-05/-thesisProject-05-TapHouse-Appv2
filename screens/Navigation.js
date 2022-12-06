const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Splashscreen from "./Splashscreen";
import ValidationScrenHomeOwner from "./homeOwner/auth/ValidationScreen2";
import HouseOwnerRegister from "./homeOwner/auth/OwnerSignupForm";
import WelcomeLoginHouseOwner from "./homeOwner/auth/WelcomeLoginHouseOwner";
import WelcomeLoginStudent from "./students/WelcomeLoginStudent";
import ValidationScrenStudent from "./students/ValidationScreenStudent";
import StudentRegister from "./students/RegisterPageVariant2";
import Profile from "./Profile";
import HomePageStudent from "./HomePage";
import Intro from "./Intro";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ProfileView from "./ProfileView";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };
  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="Splashscreen"
                component={Splashscreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Intro"
                component={Intro }
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="WelcomeLoginHouseOwner"
                component={WelcomeLoginHouseOwner}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HouseOwnerRegister"
                component={HouseOwnerRegister}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ValidationScrenHomeOwner"
                component={ValidationScrenHomeOwner}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="WelcomeLoginStudent"
                component={WelcomeLoginStudent}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="StudentRegister"
                component={StudentRegister}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ValidationScrenStudent"
                component={ValidationScrenStudent}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomePageStudent"
                component={HomePageStudent}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProfileView"
                component={ProfileView}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
