import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackButton, EmptyPage} from '../../component';
import {CartEmptyLogo} from '../../assets';
import {colors} from '../../utils';

const Wishlist = () => {
  return (
    <View style={styles.container}>
      <BackButton heading="back" />
      <ScrollView>
        <EmptyPage
          title="Your Wishlist is Empty"
          btnName="explore category"
          image={CartEmptyLogo}
          style={styles.box}
          btn={true}
        />
      </ScrollView>
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.primaryBgColor,
  },
  box: {
    marginVertical: '40%',
  },
});
