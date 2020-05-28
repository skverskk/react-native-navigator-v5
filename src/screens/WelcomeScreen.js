import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Welcome Everyone</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    paddingTop: 30,
    fontSize: 36,
  },
});

export default WelcomeScreen;
