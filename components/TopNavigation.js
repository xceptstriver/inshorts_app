import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import ReloadIcon from 'react-native-vector-icons/AntDesign';

const TopNavigation = props => {
  return (
    <View style={{...styles.container, backgroundColor: '#282C35'}}>
      {props.index === 0 ? (
        <TouchableOpacity style={styles.left}>
          <Text style={{...styles.text, color: 'lightgrey'}}>
            <MatIcon name="theme-light-dark" size={24} color="#007FFF" />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => props.setIndex(props.index === 0 ? 1 : 0)}>
          <Icon name="arrow-left" size={15} color="#007FFF" />
          <Text style={{...styles.text, color: 'lightgrey'}}>Discover</Text>
        </TouchableOpacity>
      )}
      <Text style={{...styles.center, color: 'white'}}>
        {props.index ? 'All News' : 'Discover'}
      </Text>

      {props.index ? (
        <TouchableOpacity style={styles.right}>
          <Text style={styles.text}>
            <ReloadIcon name="reload1" size={24} color="#007FFF" />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => props.setIndex(props.index === 0 ? 1 : 0)}>
          <Text style={{...styles.text, color: 'white'}}>All News</Text>
          <Icon name="arrow-right" size={15} color="#007FFF" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 80,
    justifyContent: 'space-between',
  },
  text: {fontSize: 16},
  right: {
    width: 80,
    alignItems: 'flex-end',
  },
  center: {
    paddingBottom: 6,
    borderBottomColor: '#007FFF',
    borderBottomWidth: 5,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default TopNavigation;
