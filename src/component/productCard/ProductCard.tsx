import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import img from '/Users/dr.mac/Desktop/Ecommerce_App/src/assets/dummy/cardImg.png';

import {likeLogo, likeRedLogo} from '../../assets';
import {colors, ms} from '../../utils';

const ProductCard = () => {
  const [like, setLike] = useState(false);
  const handleLikePressed = () => {
    setLike(!like);
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={img} style={styles.ProductImage} />
      <TouchableOpacity
        style={styles.likeContainer}
        onPress={() => {
          handleLikePressed();
        }}>
        <Image source={like ? likeRedLogo : likeLogo} style={styles.lkeImage} />
      </TouchableOpacity>
      <View style={styles.textBox}>
        <Text style={styles.nameText}>Product Name</Text>
        <Text style={styles.priceText}>$ Price</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  ProductImage: {
    height: ms(220),
    width: ms(159),
    borderRadius: 10,
    backgroundColor: colors.cardBgColor,
  },
  container: {
    height: ms(281),
    width: ms(159),
    borderRadius: 10,
    backgroundColor: colors.secondaryBgColor,
  },
  textBox: {
    height: ms(59),
    width: ms(159),
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  priceText: {
    color: colors.textColor,
    fontWeight: '700',
  },
  nameText: {
    color: colors.textColor,
    fontWeight: '400',
  },
  lkeImage: {
    height: ms(12),
    width: ms(13),
  },
  likeContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    padding: 15,
  },
});
