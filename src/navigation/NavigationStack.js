import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import CharactersScreen from '../screens/CharactersScreen';
import CharacterDetails from '../screens/CharacterDetails';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

export default function NavigationStack(){
    return(
        <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen 
                name="SplashScreen" 
                component={SplashScreen} 
                options={{headerShown:false}}
            />
            <Stack.Screen name='Characters' component={CharactersScreen}/>
            <Stack.Screen name="CharacterDetails" component= {CharacterDetails}/>
        </Stack.Navigator>
    );
}
