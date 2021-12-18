import React, {useContext, useState} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {NewsContext} from '../API/context';
import SingleNews from '../components/SingleNews';
const windowHeight = Dimensions.get('window').height;

const News = () => {
  const {
    news: {articles},
  } = useContext(NewsContext);
  const [activeIndex, setActiveIndex] = useState();

  return (
    <View style={styles.carousel}>
      {articles && (
        <Carousel
          layout="stack"
          data={articles.slice(0, 10)}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          removeClippedSubviews={false}
          renderItem={({item, index}) => (
            <SingleNews item={item} index={index} />
          )}
          enableMomentum={false}
          decelerationRate={'fast'}
          onSnapToItem={index => setActiveIndex(index)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    backgroundColor: 'black',
    transform: [{scaleY: -1}],
  },
});

export default News;
