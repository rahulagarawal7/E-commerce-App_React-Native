import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {BackButton, EmptyPage} from '../../component';
import {CartEmptyLogo} from '../../assets';
import {colors} from '../../utils';

const Cart = () => {
  return (
    <View style={styles.container}>
      <BackButton heading="back" />
      <ScrollView>
        <View style={styles.emptyBox}>
          <EmptyPage
            btnName="explore categories"
            image={CartEmptyLogo}
            title="no item added yet"
            btn={true}
            navigationScreeName="seeAllCategories"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Cart;
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.primaryBgColor,
  },
  emptyBox: {
    marginTop: '50%',
  },
});
