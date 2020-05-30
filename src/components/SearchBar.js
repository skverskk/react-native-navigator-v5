import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name='search' style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Search'
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 35,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
  },

  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },

  inputStyle: {
    fontSize: 20,
    flex: 1,
  },
});

export default SearchBar;
