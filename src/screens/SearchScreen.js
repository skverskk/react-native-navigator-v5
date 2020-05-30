import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
const SearchScreen = () => {
  const [term, setTerm] = useState('');

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log('Term Submitted')}
      />
      <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    paddingTop: 30,
    fontSize: 36,
  },
});

export default SearchScreen;
