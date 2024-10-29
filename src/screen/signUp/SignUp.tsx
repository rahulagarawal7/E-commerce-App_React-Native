import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, ms} from '../../utils';
import {Button, InputBox} from '../../component';

const SignUp = () => {
  const handleLogin = () => {};
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>
      <View style={styles.inputBox}>
        <InputBox placeholder="Name" />
        <InputBox placeholder="Phone" />
        <InputBox placeholder="Email" />
        <InputBox placeholder="Password" />
        <Button buttonName="Sign Up" handleSubmit={handleLogin} />
      </View>
      <Text style={styles.createText}>
        Already have account? <Text style={styles.textOne}>Sign in</Text>{' '}
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
