import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BackArrowLogo} from '../../assets';
import {ms} from '../../utils/scale';
import {colors} from '../../utils/constants';
import SearchBar from '../searchBar.jsx/SearchBar';

interface BackButtonProps {
  heading: string;
  searchBox: boolean;
}

const BackButton: React.FC<BackButtonProps> = ({heading, searchBox}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.container}>
        <Image source={BackArrowLogo} style={styles.image} />
      </TouchableOpacity>
      {searchBox && heading?.length > 0 ? null : heading?.length > 0 ? (
        <Text style={styles.text}>{heading}</Text>
      ) : (
        searchBox && <SearchBar placeholder={'search'} />
      )}
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    height: ms(40),
    width: ms(40),
    borderRadius: 40,
    backgroundColor: colors.secondaryBgColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: ms(12),
    width: ms(6),
  },
  mainContainer: {
    width: ms(342),
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 5,
  },
  text: {
    marginHorizontal: 20,
    color: colors.textColor,
    fontSize: ms(18),
  },
});
