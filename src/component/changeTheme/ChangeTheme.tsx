import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors, ms} from '../../utils';

const ChangeTheme = () => {
  const [btnOn, setButOFF] = useState(true);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setButOFF(!btnOn)}>
      <View style={[styles.innerBox, btnOn && styles.on]}></View>
    </TouchableOpacity>
  );
};

export default ChangeTheme;

const styles = StyleSheet.create({
  container: {
    width: ms(60),
    height: ms(30),
    backgroundColor: colors.tintColor,
    borderRadius: 20,
    justifyContent: 'center',
    padding: 4,
  },
  innerBox: {
    width: ms(25),
    height: ms(25),
    borderRadius: 15,
    backgroundColor: colors.cardBgColor,
  },
  on: {
    alignSelf: 'flex-end',
  },
});
