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

interface ProductCardProps {
  name: string;
  price: string;
  image: ImageSourcePropType;
}

const ProductCard: React.FC<ProductCardProps> = ({name, price, image}) => {
  const [like, setLike] = useState(false);
  const handleLikePressed = () => {
    setLike(!like);
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={image} style={styles.ProductImage} />
      <TouchableOpacity
        style={styles.likeContainer}
        onPress={() => {
          handleLikePressed();
        }}>
        <Image source={like ? likeRedLogo : likeLogo} style={styles.lkeImage} />
      </TouchableOpacity>
      <View style={styles.textBox}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.priceText}>{price}</Text>
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
    marginHorizontal: 10,
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
