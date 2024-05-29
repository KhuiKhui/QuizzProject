// In App.js in a new project

import * as React from 'react';
import { Image, View,Button, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from "./screens/index";
import Quiz from "./screens/Quiz";
import Result from "./screens/Result";
import WelcomeScreen from "./screens/WelcomeScreen";
import ResultsList from "./screens/ResultList";

const Stack = createNativeStackNavigator();

const CustomHeader = ({ navigation, route, options, showBack }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 30, backgroundColor: '#A30A1C' }}>
      {showBack && (
        <Button title="Back" onPress={navigation.goBack} />
      )}     
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#E0E0E0', fontFamily: 'Montserrat-Bold' }}>{options.title}</Text>
    </View>
  );
};


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome Screen"   
        screenOptions={{
          header: (props) => <CustomHeader {...props} />,
        }}     
       >
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{
            title: 'Welcome to my Quiz app',            
          }}
        />
        <Stack.Screen name="Index" component={Index} options={{ title: 'Subjects' }} />
        <Stack.Screen name="Quiz" component={Quiz} options={{ title: 'Quiz' }} />
        <Stack.Screen name="Result" component={Result} options={{ title: 'Result' }} />
        <Stack.Screen name="ResultsList" component={ResultsList} options={{ title: 'Result' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}