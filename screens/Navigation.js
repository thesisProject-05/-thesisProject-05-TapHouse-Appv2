const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Splashscreen from "./Splashscreen";
import ValidationScrenHomeOwner from "./homeOwner/ValidationScreen2";
import HouseOwnerRegister from "./homeOwner/auth/OwnerSignupForm";
import WelcomeLoginHouseOwner from "./homeOwner/auth/WelcomeLoginHouseOwner";
import WelcomeLoginStudent from "./students/WelcomeLoginStudent";
import ValidationScrenStudent from "./students/ValidationScreenStudent";
import StudentRegister from "./students/RegisterPageVariant2";
// import HouseOwnerRegister1 from "./screens/HouseOwnerRegister1";
// import Profile from "./screens/Profile";
import Profile from "./Profile";
// import StudentValidation from "./screens/StudentValidation";
// import HouseOwnerValidation from "./screens/HouseOwnerValidation";
// import HouseOwnerLogin from "./screens/HouseOwnerLogin";
import HomePageStudent from "./HomePage";
// import StudentRegister1 from "./screens/StudentRegister1";
// import WelcomeLoginStudent1 from "./screens/WelcomeLoginStudent1";
// import RegisterPage from "./screens/RegisterPage";
// import HomePic1 from "./screens/HomePic1";
// import IPhone14Plus1 from "./screens/IPhone14Plus1";
// import RegisterPageVariant2 from "./screens/RegisterPageVariant2";
// import ProfileHomeOwner from "./screens/ProfileHomeOwner";
// import FacebookF from "./screens/FacebookF";
// import WelcomeLoginStudent2 from "./screens/WelcomeLoginStudent2";
// import HomePageHouseOwner from "./screens/HomePageHouseOwner";
// import WelcomeLoginHouseOwner1 from "./screens/WelcomeLoginHouseOwner1";
import Intro from "./Intro";
// import ValidationScren from "./screens/ValidationScren";
// import ProfileHomeOwner1 from "./screens/ProfileHomeOwner1";
// import HomeOwnerRegister from "./screens/HomeOwnerRegister";
// import GroupScreen from "./screens/GroupScreen";
// import IPhone141 from "./screens/IPhone141";
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
                component={Intro}
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
              {/* <Stack.Screen
                name="HouseOwnerRegister1"
                component={HouseOwnerRegister1}
                options={{ headerShown: false }}
              />
              
              <Stack.Screen
                name="HomeOwner"
                component={HomeOwner}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="StudentValidation"
                component={StudentValidation}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HouseOwnerValidation"
                component={HouseOwnerValidation}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HouseOwnerLogin"
                component={HouseOwnerLogin}
                options={{ headerShown: false }}
              />
              
              <Stack.Screen
                name="StudentRegister1"
                component={StudentRegister1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="WelcomeLoginStudent1"
                component={WelcomeLoginStudent1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RegisterPage"
                component={RegisterPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomePic1"
                component={HomePic1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone14Plus1"
                component={IPhone14Plus1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RegisterPageVariant2"
                component={RegisterPageVariant2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProfileHomeOwner"
                component={ProfileHomeOwner}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="FacebookF"
                component={FacebookF}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="WelcomeLoginStudent2"
                component={WelcomeLoginStudent2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomePageHouseOwner"
                component={HomePageHouseOwner}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="WelcomeLoginHouseOwner1"
                component={WelcomeLoginHouseOwner1}
                options={{ headerShown: false }}
              />
              
              <Stack.Screen
                name="ValidationScren"
                component={ValidationScren}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProfileHomeOwner1"
                component={ProfileHomeOwner1}
                options={{ headerShown: false }}
              />
              
              <Stack.Screen
                name="Group1"
                component={GroupScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone141"
                component={IPhone141}
                options={{ headerShown: false }}
              />*/}
            </Stack.Navigator> 
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
