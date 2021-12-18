import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {NewsContext} from '../API/context';

const News = () => {
  const {
    news: {articles},
  } = useContext(NewsContext);
  console.log('artcles hai bhai', articles);

  return (
    <View>
      <Text>News Screen</Text>
    </View>
  );
};

export default News;
