import {NavigationContainer} from '@react-navigation/native';
import NavigationScreen from "./Screen/NavigationScreen/Navigation";
import Navigation from "./Navigation/Navigation";
import { DeepLinking } from "./Navigation/DeepLinking";
import { useEffect } from "react";
import { Linking } from "react-native";

export default function App() {
  useEffect(() => {
    Linking.getInitialURL().then(async deepLinkInitialURL => {
      if (deepLinkInitialURL) {
        await DeepLinking.handleInitialNavigate(deepLinkInitialURL);
      }
    });
  }, []);

  return (
    <NavigationContainer ref={Navigation.navigationRef} linking={DeepLinking.linking}>
      <NavigationScreen />
    </NavigationContainer>
  );
}
