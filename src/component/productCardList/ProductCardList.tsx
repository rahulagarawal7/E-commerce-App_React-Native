import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import ProductCard from '../productCard/ProductCard';
import {DummyImage} from '../../assets';

const productList = [
  {
    id: 1,
    name: 'shirt',
    price: '$ 54',
    image: DummyImage,
  },
  {
    id: 2,
    name: 'shirt',
    price: '$ 54',
    image: DummyImage,
  },
  {
    id: 3,
    name: 'shirt',
    price: '$ 54',
    image: DummyImage,
  },
  {
    id: 4,
    name: 'shirt',
    price: '$ 54',
    image: DummyImage,
  },
  {
    id: 5,
    name: 'shirt',
    price: '$ 54',
    image: DummyImage,
  },
  {
    id: 6,
    name: 'shirt',
    price: '$ 54',
    image: DummyImage,
  },
  {
    id: 7,
    name: 'shirt',
    price: '$ 54',
    image: DummyImage,
  },
  {
    id: 8,
    name: 'shirt',
    price: '$ 54',
    image: DummyImage,
  },
  {
    id: 9,
    name: 'shirt',
    price: '$ 54',
    image: DummyImage,
  },
  {
    id: 10,
    name: 'shirt',
    price: '$ 54',
    image: DummyImage,
  },
  {
    id: 11,
    name: 'shirt',
    price: '$ 54',
    image: DummyImage,
  },
  {
    id: 12,
    name: 'shirt',
    price: '$ 54',
    image: DummyImage,
  },
];

const ProductCardList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={productList}
        renderItem={({item}) => (
          <ProductCard price={item.price} image={item.image} name={item.name} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductCardList;

const styles = StyleSheet.create({
  container: {},
});
