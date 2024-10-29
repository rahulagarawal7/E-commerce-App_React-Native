import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  CategoriesImage1,
  CategoriesImage2,
  CategoriesImage3,
  CategoriesImage4,
  CategoriesImage5,
} from '../../assets';
import {colors, ms} from '../../utils';

const CategoriesCard = () => {
  const categoriesName = ['Hoodies', 'Shorts', 'Accessories', 'Shoes', 'Bag'];
  const categoriesImages = [
    CategoriesImage1,
    CategoriesImage2,
    CategoriesImage3,
    CategoriesImage4,
    CategoriesImage5,
  ];

  return (
    <View style={styles.container}>
      {categoriesName.map((name, index) => (
        <View key={name} style={styles.box}>
          <Image source={categoriesImages[index]} style={styles.image} />
          <Text style={styles.categoriesNameText}>{name}</Text>
        </View>
      ))}
    </View>
  );
};

export default CategoriesCard;

const styles = StyleSheet.create({
  container: {
    height: ms(100),
    width: ms(342),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: 10,
    backgroundColor: colors.secondaryBgColor,
  },
  image: {
    height: ms(56),
    width: ms(56),
    borderRadius: 56,
    alignSelf: 'center',
  },
  box: {
    gap: 5,
  },
  categoriesNameText: {
    textAlign: 'center',
    color: colors.textColor,
  },
});
