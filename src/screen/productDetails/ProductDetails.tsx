import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {BackButton, Button} from '../../component';
import {colors, ms} from '../../utils';
import {likeLogo, likeRedLogo} from '../../assets';

const ProductDetails = ({route}) => {
  const {image, brand, description, title, price} = route?.params?.data;
  const [onCart, setOnCart] = useState(false);
  const [like, setLike] = useState(false);
  const handleLikePressed = () => {
    setLike(!like);
  };

  const handleClicked = () => {};
  return (
    <View style={styles.container}>
      <BackButton heading="back" />
      <ScrollView style={styles.box} showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.likeContainer}
          onPress={() => {
            handleLikePressed();
          }}>
          <Image
            source={like ? likeRedLogo : likeLogo}
            style={styles.lkeImage}
          />
        </TouchableOpacity>
        <Image source={{uri: image}} style={styles.imageStyle} />
        <Text style={styles.text}>{brand}</Text>
        <Text style={styles.text}>Price - ${price}</Text>
        <Text style={styles.descText}>{description} </Text>
        <Text style={styles.textTitle}>{title}</Text>
        {onCart ? (
          <Button buttonName="add to cart" handleSubmit={handleClicked} />
        ) : (
          <Button buttonName="remove from cart" handleSubmit={handleClicked} />
        )}
      </ScrollView>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.primaryBgColor,
  },
  box: {
    width: ms(342),
    backgroundColor: colors.cardBgColor,
    height: '100%',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: ms(20),
  },
  lkeImage: {
    height: ms(25),
    width: ms(24),
  },
  likeContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    padding: 15,
  },
  imageStyle: {
    height: ms(300),
    width: ms(300),
    alignSelf: 'center',
    marginTop: ms(50),
    borderRadius: 10,
  },
  text: {
    fontSize: ms(20),
    padding: 10,
    fontWeight: '700',
    color: colors.textColor,
  },
  descText: {
    textAlign: 'justify',
    padding: 10,
    color: colors.textColor,
  },
  textTitle: {
    color: colors.textColor,
    padding: 10,
    textAlign: 'justify',
    fontSize: ms(18),
  },
});
