import { View, Text, Button, StyleSheet } from "react-native";
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import { useRootStore } from "../../Store/RootStore/UseRootStore";
import { LangType } from "../../Modules/Lang/LangType";
import { useEffect } from "react";
import { useTheme } from "../../Modules/Theme/Hooks/UseTheme";
import { ThemeProviders } from "../../Modules/Theme/ThemeProvider";
import { ThemeTypes } from "../../Modules/Theme/ThemeTypes";

const Tab = createBottomTabNavigator();

export const NavigationScreen = observer(() => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'Home'} component={HomeScreen} />
      <Tab.Screen name={'About'} component={AboutScreen} />
      <Tab.Screen name={'Settings'} component={SettingsScreen} />
    </Tab.Navigator>
  );
})

const useStyles = (colors) => StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: colors.overlay
  }
})

const HomeScreen = observer(() => {
  const {langStore} = useRootStore();
  const {t} = useTranslation();

  const {Colors, selectTheme, changeTheme } = useTheme();
  const styles = useStyles(Colors);

  useEffect(() => {
    langStore.getLang();
  }, []);

  const handleChangingLang = async () => {
    await langStore.changeLang(
      LangType.RU === langStore.lang ? LangType.EN : LangType.RU
    )
  }

  const handleChangingTheme =  async () => {
    changeTheme(selectTheme === ThemeTypes.LIGHT ? ThemeTypes.DARK : ThemeTypes.LIGHT)
  }

  return (
    <View style={styles.content}>
      <Button
        title="Change language"
        onPress={() => handleChangingLang()} />
      <Button
        title="Change theme"
        onPress={() => handleChangingTheme()} />
      <Text>{t('tab.homeScreen')}</Text>
    </View>
  );
})

function AboutScreen({navigation}) {
  return (
    <View>
      <Text>About screen</Text>
    </View>
  );
}

function SettingsScreen({navigation}) {
  return (
    <View>
      <Text>Settings screen</Text>
    </View>
  );
}
