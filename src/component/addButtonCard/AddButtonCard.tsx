import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, ms} from '../../utils';
import {BackArrowLogo} from '../../assets';
import {useTranslation} from 'react-i18next';
import {NavigationProp, useNavigation} from '@react-navigation/native';

interface AddButtonCardProps {
  title: string;
}

const AddButtonCard: React.FC<AddButtonCardProps> = ({title}) => {
  const {t} = useTranslation();

  const navigation = useNavigation<NavigationProp<AddButtonCardProps>>();
  const handlePressed = (name: string) => {
    navigation.navigate(name as keyof AddButtonCardProps);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handlePressed(title)}>
      <Text style={styles.text}>{t(title)}</Text>
      <Image source={BackArrowLogo} style={styles.image} />
    </TouchableOpacity>
  );
};

export default AddButtonCard;

const styles = StyleSheet.create({
  container: {
    height: ms(56),
    width: ms(342),
    backgroundColor: colors.secondaryBgColor,
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  image: {
    height: ms(24),
    width: ms(24),
    transform: [{rotate: '180deg'}],
  },
  text: {
    color: colors.textColor,
    fontSize: ms(18),
  },
});
