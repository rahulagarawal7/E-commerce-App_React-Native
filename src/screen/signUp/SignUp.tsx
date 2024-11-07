import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, ms} from '../../utils';
import {Button, InputBox} from '../../component';
import {t} from 'i18next';

const SignUp = ({navigation}) => {
  const handleLogin = () => {
    navigation.navigate('BottomTab');
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>
      <View style={styles.inputBox}>
        <InputBox placeholder={'name'} />
        <InputBox placeholder="phone" />
        <InputBox placeholder="email" />
        <InputBox placeholder="password" />
        <Button buttonName="sign up" handleSubmit={handleLogin} />
      </View>
      <Text style={styles.createText}>
        {t('already have account')}?{' '}
        <Text
          style={styles.textOne}
          onPress={() => navigation.navigate('Login')}>
          {t('sign in')}
        </Text>{' '}
      </Text>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.primaryBgColor,
  },
  heading: {
    color: colors.textColor,
    fontSize: ms(33),
    padding: ms(20),
    marginVertical: '10%',
  },
  inputBox: {
    gap: 10,
  },
  createText: {
    width: ms(342),
    alignSelf: 'center',
    marginTop: 10,
    color: colors.textColor,
  },
  textOne: {
    color: colors.tintColor,
  },
});
