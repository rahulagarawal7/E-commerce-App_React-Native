import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import {likeLogo, likeRedLogo} from '../../assets';
import {colors, ms} from '../../utils';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {screenNames} from '../../utils/constants';
import {RootStackParamList} from '../../navigation/types';

interface ProductCardProps {
  name: string;
  price: string;
  image: ImageSourcePropType;
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [like, setLike] = useState(false);
  const handleLikePressed = () => {
    setLike(!like);
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate(screenNames.productDetails, {data: product})
      }>
      <Image source={{uri: product?.image}} style={styles.ProductImage} />
      <TouchableOpacity
        style={styles.likeContainer}
        onPress={() => {
          handleLikePressed();
        }}>
        <Image source={like ? likeRedLogo : likeLogo} style={styles.lkeImage} />
      </TouchableOpacity>
      <View style={styles.textBox}>
        <Text style={styles.nameText}>{product?.brand}</Text>
        <Text style={styles.priceText}>price ${product?.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  ProductImage: {
    height: ms(210),
    width: ms(156),
    borderRadius: 10,

    backgroundColor: colors.cardBgColor,
    objectFit: 'contain',
    marginTop: 8,
  },
  container: {
    height: ms(281),
    width: ms(159),
    borderRadius: 10,
    backgroundColor: colors.secondaryBgColor,
    marginHorizontal: 10,
    borderWidth: 0.4,
    borderColor: colors.textColor,
    margin: 5,
  },
  textBox: {
    height: ms(59),
    width: ms(159),
    justifyContent: 'center',
    marginHorizontal: 10,
    gap: 5,
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
    height: ms(15),
    width: ms(14),
  },
  likeContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    padding: 15,
  },
});
