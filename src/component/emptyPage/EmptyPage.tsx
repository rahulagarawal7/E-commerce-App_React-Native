import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms} from '../../utils/scale';
import {colors} from '../../utils/constants';
import Button from '../button.jsx/Button';

interface EmptyPageProps {
  title: string;
  image: ImageSourcePropType;
  btnName: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({title, image, btnName}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
      <Button buttonName={btnName} />
    </View>
  );
};

export default EmptyPage;

const styles = StyleSheet.create({
  container: {
    height: ms(236),
    width: ms(342),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  image: {
    height: ms(100),
    width: ms(100),
  },
  text: {
    color: colors.textColor,
    fontSize: 30,
    fontWeight: '500',
  },
});
