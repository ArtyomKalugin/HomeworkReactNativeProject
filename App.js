import {NavigationContainer} from '@react-navigation/native';
import { NavigationScreen } from "./Screen/NavigationScreen/Navigation";
import Navigation from "./Navigation/Navigation";
import { DeepLinking } from "./Navigation/DeepLinking";
import { useEffect } from "react";
import { Linking, Text } from "react-native";
import * as React from "react";
import { useRootStore } from "./Store/RootStore/UseRootStore";
import { observer } from "mobx-react";
import { ThemeProviders } from "./Modules/Theme/ThemeProvider";
import { ThemeTypes } from "./Modules/Theme/ThemeTypes";

export const App = observer(() => {
  const {langStore} = useRootStore();

  useEffect(() => {
    Linking.getInitialURL().then(async deepLinkInitialURL => {
      if (deepLinkInitialURL) {
        await DeepLinking.handleInitialNavigate(deepLinkInitialURL);
      }
    });
  }, []);

  return (
    <ThemeProviders>
      <NavigationContainer ref={Navigation.navigationRef} linking={DeepLinking.linking}>
        <NavigationScreen />
      </NavigationContainer>
    </ThemeProviders>
  );
})
