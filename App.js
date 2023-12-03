import {NavigationContainer} from '@react-navigation/native';
import { NavigationScreen } from "./Screen/NavigationScreen/Navigation";
import Navigation from "./Navigation/Navigation";
import { DeepLinking } from "./Navigation/DeepLinking";
import { useEffect } from "react";
import { Linking, Text } from "react-native";
import * as React from "react";
import { useRootStore } from "./Store/RootStore/UseRootStore";

export default function App() {
  const {langStore} = useRootStore();

  useEffect(() => {
    Linking.getInitialURL().then(async deepLinkInitialURL => {
      if (deepLinkInitialURL) {
        await DeepLinking.handleInitialNavigate(deepLinkInitialURL);
      }
    });
  }, []);

  return (
    <NavigationContainer ref={Navigation.navigationRef} linking={DeepLinking.linking}>
      {langStore.isLoading ? <Text>Loading</Text> : <NavigationScreen />}
    </NavigationContainer>
  );
}
