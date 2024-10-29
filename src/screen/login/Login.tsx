import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, ms} from '../../utils';
import {Button, InputBox} from '../../component';
import {AppleLogo, FacebookLogo, GoogleLogo} from '../../assets';

const Login = () => {
  const handleLogin = () => {};
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Sign In</Text>
      <View style={styles.inputBox}>
        <InputBox placeholder="Email" />
        <InputBox placeholder="Password" />
        <Button buttonName="Sign In" handleSubmit={handleLogin} />
      </View>
      <Text style={styles.createText}>
        Dont't have account? <Text style={styles.textOne}>Create one</Text>{' '}
      </Text>
      <View style={styles.imgBox}>
        <Image source={GoogleLogo} style={styles.logo} />
        <Image source={FacebookLogo} style={styles.logo} />
        <Image source={AppleLogo} style={styles.logo} />
      </View>
    </ScrollView>
  );
};

export default Login;

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
    gap: 20,
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
  logo: {
    width: ms(342),
    height: ms(49),
    alignSelf: 'center',
  },
  imgBox: {
    marginVertical: '10%',
    gap: 10,
  },
});
