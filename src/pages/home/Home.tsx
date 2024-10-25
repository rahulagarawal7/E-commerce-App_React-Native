import {View, Text} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Header} from '../../component';

const Home = () => {
  const {t} = useTranslation();
  return (
    <View style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
      <Header />
      <Text>{t('outcome')}</Text>
    </View>
  );
};

export default Home;
