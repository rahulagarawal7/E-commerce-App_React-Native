import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Header} from '../../component';

const Home = () => {
  const [show, setShow] = useState<boolean>(false);
  const closeDropDown = (value: boolean) => {
    setShow(value ? false : !show);
  };
  const {t} = useTranslation();
  return (
    <TouchableWithoutFeedback onPress={() => closeDropDown(true)}>
      <View style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
        <Header closeDropDown={closeDropDown} show={show} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;
