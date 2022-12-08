const Stack = createNativeStackNavigator();
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Splashscreen from "./Splashscreen";
import ValidationScrenHomeOwner from "./homeOwner/auth/ValidationScreen2";
import HouseOwnerRegister from "./homeOwner/auth/OwnerSignupForm";
import WelcomeLoginHouseOwner from "./homeOwner/auth/WelcomeLoginHouseOwner";
import WelcomeLoginStudent from "./students/WelcomeLoginStudent";
import ValidationScrenStudent from "./students/ValidationScreenStudent";
import StudentRegister from "./students/RegisterPageVariant2";
import HomePageStudent from "./HomePageStudent";
import HomePageOwner from "./HomePage";
import Intro from "./Intro";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import ProfileView from "./ProfileView";
import House from "./addHouse/House";
import Detail from "./Detail";
import ProfileOwner from "./ProfileOwner";
import ProfileStudent from "./ProfileStudent";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [mail, setMail] = useState("");
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
  const getEmail = (x) => {
    setEmail(x);
  };
  const getMail = (y) => {
    setMail(y);
  };
  const getId = (z) => {
    setId(z);
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
                options={{ headerShown: false }}
                children={() => <WelcomeLoginHouseOwner cb1={id} />}
              />
              <Stack.Screen
                name="HouseOwnerRegister"
                options={{ headerShown: false }}
                children={() => <HouseOwnerRegister cb={getMail} cb1={getId} />}
              />
              <Stack.Screen
                name="ValidationScrenHomeOwner"
                options={{ headerShown: false }}
                children={() => <ValidationScrenHomeOwner cb={mail} cb1= {id} />}
              />

              <Stack.Screen
                name="WelcomeLoginStudent"
                component={WelcomeLoginStudent}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="StudentRegister"
                // component={StudentRegister}
                options={{ headerShown: false }}
                children={() => <StudentRegister cb={getEmail} />}
              />
              <Stack.Screen
                name="ValidationScrenStudent"
                // component={ValidationScrenStudent }
                options={{ headerShown: false }}
                children={() => <ValidationScrenStudent cb={email} />}
              />
              <Stack.Screen
                name="HomePageStudent"
                component={HomePageStudent}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomePageOwner"
                component={HomePageOwner}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProfileView"
                component={ProfileView}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="House"
                component={House}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Detail"
                component={Detail}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProfileOwner"
                component={ProfileOwner}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProfileStudent"
                component={ProfileStudent}
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
