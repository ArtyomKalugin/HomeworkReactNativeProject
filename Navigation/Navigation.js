import {View, Text} from 'react-native';
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'Home'} component={HomeScreen} />
      <Tab.Screen name={'About'} component={AboutScreen} />
      <Tab.Screen name={'Settings'} component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Home screen</Text>
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
