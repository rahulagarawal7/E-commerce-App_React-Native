import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ms} from '../../utils/scale';
import {DownArrowLogo, UpArrowLogo} from '../../assets';
import {colors} from '../../utils/constants';

const DropDown = () => {
  const [show, setShow] = useState(false);
  const [option, setOption] = useState('men');

  const handleSelect = (value: string) => {
    setShow(false);
    setOption(value);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={() => setShow(!show)}>
        <Text>{option}</Text>
        <Image
          source={show ? UpArrowLogo : DownArrowLogo}
          style={styles.icon}
        />
      </TouchableOpacity>
      {show && (
        <View style={styles.dropBox}>
          <Text style={styles.dropText} onPress={() => handleSelect('men')}>
            men
          </Text>
          <Text style={styles.dropText} onPress={() => handleSelect('women')}>
            women
          </Text>
        </View>
      )}
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  container: {},
  box: {
    flexDirection: 'row',
    height: ms(40),
    width: ms(80),
    backgroundColor: colors.secondaryBgColor,
    alignItems: 'center',
    paddingHorizontal: ms(10),
    borderRadius: 40,
    justifyContent: 'center',
  },
  dropBox: {
    width: ms(80),
    backgroundColor: colors.secondaryBgColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: ms(5),
    borderRadius: 10,
    paddingVertical: ms(5),
  },
  dropText: {
    paddingVertical: ms(5),
    textAlign: 'center',
  },
  icon: {
    marginHorizontal: 3,
    marginTop: 4,
    height: ms(5),
    width: ms(12),
  },
});
