import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
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
import {useAppSelector} from '../../redux/store/store';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<Props> = ({navigation}) => {
  const products = useAppSelector(store => store?.products);
  console.log('products--->', products);
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
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
            screenName={screenNames.seeAllCategories}
          />
          <CategoriesCard />
        </View>
        <View style={styles.hederBox}>
          <HeadingText
            primaryText="top selling"
            secondaryText="see all"
            screenName={screenNames.categoryList}
          />
          <ProductCardList />
        </View>
        <View style={styles.hederBox}>
          <HeadingText
            primaryText="new in"
            secondaryText="see all"
            screenName={screenNames.categoryList}
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
