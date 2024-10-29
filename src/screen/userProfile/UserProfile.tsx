import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackButton, Button, InputBox} from '../../component';
import {colors, ms} from '../../utils';
import {t} from 'i18next';

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <BackButton heading={'back'} />

      <InputBox placeholder="Name" />
      <InputBox placeholder="Email" />

      <InputBox placeholder="phone" />

      <Button buttonName="update" />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBgColor,
    gap: 15,
  },
  box: {
    alignSelf: 'center',
    flexDirection: 'row',
    height: ms(56),
    width: ms(342),
    justifyContent: 'space-around',
  },
  smallInputBox: {
    width: ms(160),
  },
});
