import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import ProductCard from '../productCard/ProductCard';
import {DummyImage} from '../../assets';
import {InitialProductsStateTypes} from '../../utils/types';

interface ProductCardListProps {
  productList: InitialProductsStateTypes;
}

const ProductCardList: React.FC<ProductCardListProps> = ({productList}) => {
  const limitedProductList = productList?.slice(0, 9);
  return (
    <View style={styles.container}>
      <FlatList
        data={limitedProductList}
        renderItem={({item}) => <ProductCard product={item} />}
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
