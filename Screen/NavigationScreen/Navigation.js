import { View, Text, Button } from "react-native";
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import { useRootStore } from "../../Store/RootStore/UseRootStore";
import { LangType } from "../../Modules/Lang/LangType";
import { useEffect } from "react";

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

function HomeScreen({navigation}) {
  const {langStore} = useRootStore();
  const {t} = useTranslation();

  useEffect(() => {
    langStore.getLang();
  }, []);

  const handleChangingLang = async () => {
    await langStore.changeLang(
      LangType.RU === langStore.lang ? LangType.EN : LangType.RU
    )
  }

  return (
    <View>
      <Button
        title="Change language"
        onPress={() => handleChangingLang()} />
      <Text>{t('tab.homeScreen')}</Text>
    </View>
  );
}

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
