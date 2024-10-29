import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackButton, Button, EmptyPage, InputBox} from '../../component';
import {colors, ms} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {EmptyPaymentLogo} from '../../assets';

const Payment = () => {
  const navigation = useNavigation();
  const addAddress = () => {
    navigation.navigate('addAddress');
  };

  return (
    <View style={styles.container}>
      <BackButton heading="back" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <EmptyPage
          title="no payment card found"
          btnName="add card"
          image={EmptyPaymentLogo}
          style={styles.empty}
        />
      </ScrollView>
      <Button buttonName="add" handleSubmit={addAddress} style={styles.btn} />
    </View>
  );
};

export default Payment;

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
    justifyContent: 'center',
  },
  empty: {
    marginTop: '30%',
  },
});
