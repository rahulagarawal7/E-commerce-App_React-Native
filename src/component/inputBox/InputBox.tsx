import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {ms} from '../../utils/scale';
import {colors} from '../../utils/constants';

interface InputBoxProps {
  placeholder: string;
}

const InputBox: React.FC<InputBoxProps> = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={
          placeholder?.charAt(0).toUpperCase() + placeholder.slice(0)
        }
        placeholderTextColor={colors.textColor}
        style={styles.text}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    height: ms(56),
    width: ms(342),
    backgroundColor: colors.secondaryBgColor,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
  text: {
    color: colors.textColor,
  },
});
