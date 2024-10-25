import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors} from '../../utils/constants';
import {ms} from '../../utils/scale';

interface ShopByCategoriesCard {
  categoryName: string;
  categoryImage: ImageSourcePropType;
}

const ShopByCategoriesCard: React.FC<ShopByCategoriesCard> = ({
  categoryName,
  categoryImage,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={categoryImage} style={styles.image} />
      <Text style={styles.nameText}>
        {categoryName?.charAt(0).toUpperCase() + categoryName?.slice(1)}
      </Text>
    </TouchableOpacity>
  );
};

export default ShopByCategoriesCard;

const styles = StyleSheet.create({
  container: {
    height: ms(64),
    width: ms(342),
    borderRadius: 10,
    backgroundColor: colors.secondaryBgColor,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  image: {
    height: ms(40),
    width: ms(40),
    borderRadius: 40,
    marginHorizontal: 10,
  },
  nameText: {
    color: colors.textColor,
    fontWeight: '400',
    fontSize: ms(20),
  },
});
