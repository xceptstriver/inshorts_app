import React, {useContext, useState} from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';
import Discover from '../containers/Discover';
import News from '../containers/News';
import TopNavigation from '../components/TopNavigation';
import {NewsContext} from '../API/context';

const InshortTabs = () => {
  const layout = useWindowDimensions();
  const {index, setIndex} = useContext(NewsContext);

  const [routes] = useState([
    {key: 'first', title: 'Discover'},
    {key: 'second', title: 'News'},
  ]);

  const renderScene = SceneMap({
    first: Discover,
    second: News,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
    />
  );
};

export default InshortTabs;
