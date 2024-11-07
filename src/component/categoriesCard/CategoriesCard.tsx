import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, ms} from '../../utils';
import {categoriesList} from '../../utils/constants';
import {t} from 'i18next';
import {useNavigation} from '@react-navigation/native';

const CategoriesCard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {categoriesList.map(category => (
        <TouchableOpacity
          key={category.id}
          style={styles.box}
          onPress={() =>
            navigation.navigate('categoryList', {name: category.categoriesName})
          }>
          <Image source={category.categoriesImage} style={styles.image} />
          <Text style={styles.categoriesNameText}>
            {t(category.categoriesName)}
          </Text>
        </TouchableOpacity>
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
    backgroundColor: colors.primaryBgColor,
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
