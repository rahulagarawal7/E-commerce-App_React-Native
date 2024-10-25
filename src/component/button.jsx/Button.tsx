import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ms} from '../../utils/scale';
import {colors} from '../../utils/constants';

interface ButtonProps {
  buttonName: string;
}

const Button: React.FC<ButtonProps> = ({buttonName}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: ms(52),
    width: '50%',
    backgroundColor: colors.tintColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    color: colors.primaryBgColor,
    fontSize: ms(18),
    fontWeight: '600',
  },
});
