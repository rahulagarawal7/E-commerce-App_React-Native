import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ms} from '../../utils/scale';
import {colors} from '../../utils/constants';
import {BackArrowLogo} from '../../assets';

interface AddButtonCardProps {
  title: string;
}

const AddButtonCard: React.FC<AddButtonCardProps> = ({title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>
        {title?.charAt(0)?.toUpperCase() + title?.slice(1)}
      </Text>
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
