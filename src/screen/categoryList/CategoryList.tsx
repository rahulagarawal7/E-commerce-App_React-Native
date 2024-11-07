import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackButton} from '../../component';
import {colors, ms} from '../../utils';
import {t} from 'i18next';

const CategoryList = ({route}) => {
  return (
    <View style={styles.container}>
      <BackButton heading="back" />
      <Text style={styles.headingText}>{t(route?.params?.name)}</Text>
      <ScrollView></ScrollView>
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  headingText: {
    color: colors.textColor,
    fontWeight: '600',
    fontSize: ms(20),
    padding: 15,
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.primaryBgColor,
  },
});
