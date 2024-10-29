import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {DownArrowLogo, UpArrowLogo} from '../../assets';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {languages, colors, ms} from '../../utils';

interface DropDownProps {
  closeDropDown: Function;
  show: boolean;
}

const DropDown: React.FC<DropDownProps> = ({closeDropDown, show}) => {
  const [option, setOption] = useState('english');
  const {t, i18n} = useTranslation();

  useEffect(() => {
    const loadLanguage = async () => {
      const savedLang = await AsyncStorage.getItem('selectedLanguage');
      if (savedLang) {
        const selectedLang = languages.find(lang => lang.code === savedLang);
        if (selectedLang) {
          setOption(selectedLang.name); // Set the display option to the saved language
          i18n.changeLanguage(savedLang); // Change the i18n language
        }
      }
    };

    loadLanguage();
  }, []);
  const handleSelect = async (name: string, code: string) => {
    setOption(name);
    closeDropDown();
    i18n.changeLanguage(code);
    await AsyncStorage.setItem('selectedLanguage', code);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={() => closeDropDown()}>
        <Text>{option}</Text>
        <Image
          source={show ? UpArrowLogo : DownArrowLogo}
          style={styles.icon}
        />
      </TouchableOpacity>
      {show && (
        <View style={styles.dropBox}>
          {languages?.map(lang => (
            <Text
              key={lang.code}
              onPress={() => handleSelect(lang.name, lang.code)}>
              {t(lang.name)}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  container: {
    zIndex: 0.5,
  },
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
    gap: 5,
    backgroundColor: colors.secondaryBgColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: ms(5),
    borderRadius: 10,
    paddingVertical: ms(5),
    position: 'absolute',
    zIndex: 1,
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
