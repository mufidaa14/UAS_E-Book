import { Button, StyleSheet, Text, View,} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import home from './home';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MenuTab = () => {
    return (
        <Tab.Navigator screenOptions={{tabBarActiveTintColor: 'green'}}>
            <Tab.Screen
            name='home'
            component={home}
            options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name='home' color={color} size={size} />
                ),
            }}
        />
        </Tab.Navigator>
    );
};

/**Pindah */
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Tab' component={MenuTab} options={{headerShown:false}} />
                <Stack.Screen name='home' component={home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
    
};
    
export default App;

const styles = StyleSheet.create({});