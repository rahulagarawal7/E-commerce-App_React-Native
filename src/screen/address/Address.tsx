import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackButton, Button, EmptyPage, InputBox} from '../../component';
import {colors, ms} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {EmptyAddressLogo} from '../../assets';

const Address = () => {
  const navigation = useNavigation();
  const addAddress = () => {
    navigation.navigate('addAddress');
  };

  return (
    <View style={styles.container}>
      <BackButton heading="back" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <EmptyPage
          title="no address found"
          btnName="add"
          image={EmptyAddressLogo}
          style={styles.empty}
        />
      </ScrollView>
      <Button buttonName="add" handleSubmit={addAddress} style={styles.btn} />
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBgColor,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  btn: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  empty: {
    marginTop: '30%',
  },
});
