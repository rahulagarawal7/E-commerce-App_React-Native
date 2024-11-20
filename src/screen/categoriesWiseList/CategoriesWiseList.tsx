import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackButton} from '../../component';
import {colors, ms} from '../../utils';
import {t} from 'i18next';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';

interface CategoryWiseListProps {
  route: RouteProp<RootStackParamList, 'categoryList'>;
}

const CategoryWiseList: React.FC<CategoryWiseListProps> = ({route}) => {
  return (
    <View style={styles.container}>
      <BackButton heading="back" />
      <Text style={styles.headingText}>{t(route?.params?.name)}</Text>
      <View style={styles.list}></View>
    </View>
  );
};

export default CategoryWiseList;

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
  list: {
    marginBottom: 90,
  },
});