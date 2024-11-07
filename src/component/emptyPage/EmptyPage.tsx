import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, ms} from '../../utils';
import {Button} from '../../component';
import {t} from 'i18next';
import {useNavigation} from '@react-navigation/native';

interface EmptyPageProps {
  title: string;
  image: ImageSourcePropType;
  btnName: string;
  style?: object;
  navigationScreeName?: string;
  btn?: boolean;
}

const EmptyPage: React.FC<EmptyPageProps> = ({
  title,
  image,
  btnName,
  style,
  btn,
  navigationScreeName,
}) => {
  const navigation = useNavigation();
  const handleSubmit = () => {
    navigation.navigate(navigationScreeName);
  };
  return (
    <View style={[styles.container, style]}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{t(title)}</Text>
      {btn && <Button buttonName={btnName} handleSubmit={handleSubmit} />}
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
