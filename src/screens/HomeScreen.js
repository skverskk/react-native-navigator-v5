import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Hello from the Home Screen</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
        <Text style={styles.textStyle}>Goto Welcome Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    paddingTop: 20,
  },

  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
