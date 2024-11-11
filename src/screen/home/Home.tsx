import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  CategoriesCard,
  Header,
  HeadingText,
  ProductCardList,
  SearchBar,
} from '../../component';
import {colors} from '../../utils';

const Home = ({navigation}) => {
  const [show, setShow] = useState<boolean>(false);
  const closeDropDown = (value: boolean) => {
    setShow(value ? false : !show);
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => closeDropDown(true)}>
        <View style={styles.containerBox}>
          <Header closeDropDown={closeDropDown} show={show} />
          <TouchableOpacity onPress={() => navigation.navigate('search')}>
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
      </TouchableWithoutFeedback>
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
