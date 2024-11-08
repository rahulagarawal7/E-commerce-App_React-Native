import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CartLogo, UserLogo} from '../../assets';
import {ms} from '../../utils/scale';
import DropDown from '../dropDown/DropDown';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  closeDropDown: Function;
  show: boolean;
}

const Header: React.FC<HeaderProps> = ({closeDropDown, show}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.profileImage}>
        <Image source={UserLogo} style={styles.userImage} />
      </View>
      <DropDown closeDropDown={closeDropDown} show={show} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('cart');
        }}>
        <Image style={styles.cartLogo} source={CartLogo} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: ms(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileImage: {
    height: ms(40),
    width: ms(40),
    borderRadius: ms(40),
  },
  userImage: {
    height: ms(40),
    width: ms(40),
    borderRadius: ms(40),
  },
  cartLogo: {
    height: ms(40),
    width: ms(40),
  },
});
