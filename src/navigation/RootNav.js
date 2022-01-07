import React from 'react';
import { StyleSheet, Text, View, Button,Linking } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>home</Text>
      <Button title="login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};
const Login = ({ navigation }) => {
  return (
    <View>
      <Text>Login</Text>
      <Button title="home" onPress={() => navigation.navigate('DrawerNav')} />
    </View>
  );
};
const About = ({ navigation }) => {
  return (
    <View>
      <Text>About</Text>
      <Button title="home" onPress={() => navigation.navigate('DrawerNav')} />
    </View>
  );
};

function CustomDrawerContent(props) {
  return (
    <View>
    <Text>
    </Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();
function DrawerNav() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
     
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();
export default function RootNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="DrawerNav" component={DrawerNav} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
