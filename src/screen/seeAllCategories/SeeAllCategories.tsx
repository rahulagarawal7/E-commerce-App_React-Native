import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BackButton, ShopByCategoriesCard} from '../../component';
import {colors, ms} from '../../utils';
import {categoriesList} from '../../utils/constants';

const SeeAllCategories = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BackButton heading="back" />
      <View style={styles.box}>
        {categoriesList.map(category => (
          <TouchableOpacity
            key={category.id}
            onPress={() => {
              navigation.navigate('categoryList', {
                name: category.categoriesName,
              });
            }}>
            <ShopByCategoriesCard
              categoryImage={category.categoriesImage}
              categoryName={category.categoriesName}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SeeAllCategories;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.primaryBgColor,
  },
  box: {
    marginTop: ms(20),
  },
});
