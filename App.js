import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import InshortTabs from './components/InshortTabs';

const App = () => {
  return (
    <View style={{...styles.container, backgroundColor: '#282C35'}}>
      <InshortTabs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
    backgroundColor: '#fff',
  },
});

export default App;
