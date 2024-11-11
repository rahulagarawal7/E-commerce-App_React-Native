import React from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {
  CategoriesCard,
  Header,
  HeadingText,
  ProductCardList,
  SearchBar,
} from '../../component';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/types';
import {screenNames} from '../../utils/constants';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<Props> = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerBox}>
        <Header />
        <TouchableOpacity
          onPress={() => navigation.navigate(screenNames.search)}>
          <SearchBar placeholder="search" />
        </TouchableOpacity>

        <View style={styles.box}>
          <HeadingText
            primaryText="categories"
            secondaryText="see all"
            screenName="seeAllCategories"
          />
          <CategoriesCard />
        </View>
        <View style={styles.hederBox}>
          <HeadingText
            primaryText="top selling"
            secondaryText="see all"
            screenName="categoryList"
          />
          <ProductCardList />
        </View>
        <View style={styles.hederBox}>
          <HeadingText
            primaryText="new in"
            secondaryText="see all"
            screenName="categoryList"
          />
          <ProductCardList />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  containerBox: {
    gap: 20,
  },
  box: {
    gap: 10,
  },
  hederBox: {
    gap: 30,
  },
});
