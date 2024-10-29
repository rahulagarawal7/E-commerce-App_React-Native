import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DummyImage, MinusProductLogo, PlusProductLogo} from '../../assets';
import {colors, ms} from '../../utils';

const CartCard = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyImage} style={styles.image} />
      <View style={styles.productDetailsBox}>
        <View style={styles.nameBox}>
          <Text style={styles.nameText}>Mens Harringont jacket</Text>
          <View style={styles.innerBox}>
            <Text style={[styles.nameText, styles.innerText]}>Size - M</Text>
            <Text style={[styles.nameText, styles.innerText]}>
              Color- Lemon
            </Text>
          </View>
        </View>
        <View style={styles.QuantityBox}>
          <Text style={styles.priceText}>$134</Text>
          <View style={styles.imageBox}>
            <Image source={PlusProductLogo} style={styles.Quantity} />
            <Image source={MinusProductLogo} style={styles.Quantity} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    height: ms(80),
    width: ms(342),
    backgroundColor: colors.secondaryBgColor,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 10,
  },
  image: {
    height: ms(64),
    width: ms(64),
    objectFit: 'contain',
  },
  innerBox: {
    flexDirection: 'row',
    gap: 10,
  },
  nameBox: {
    justifyContent: 'space-between',
  },
  nameText: {
    color: colors.textColor,
  },
  Quantity: {
    height: ms(24),
    width: ms(24),
  },
  innerText: {
    fontWeight: '600',
  },
  imageBox: {
    flexDirection: 'row',
    gap: 10,
  },
  QuantityBox: {
    justifyContent: 'space-between',
  },
  priceText: {
    color: colors.textColor,
    fontWeight: '600',
    alignSelf: 'flex-end',
    marginHorizontal: 3,
  },
  productDetailsBox: {
    flexDirection: 'row',
    marginHorizontal: 5,
    height: ms(51),
    width: ms(250),
    justifyContent: 'space-between',
  },
});
