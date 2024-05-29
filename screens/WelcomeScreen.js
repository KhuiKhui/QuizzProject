import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
    paddingVertical: 10,
  },
  logo: {
     height: 200,
     width: 300,
     resizeMode: 'contain',
  },
});

const WelcomeScreen = () => {
  const navigation = useNavigation();

  // Navigate to the Index screen after a delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Index');
    }, 8000); // Auto navigate after 8 seconds

    // Clear timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Image style={styles.logo} source={require('../img/quiz_icon_nbg.png')} />
      <Text style={styles.text}>Welcome to My Quiz App</Text>      
    </View>
  );
};

export default WelcomeScreen;