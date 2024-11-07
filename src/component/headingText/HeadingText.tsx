import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, ms} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {t} from 'i18next';

interface HeadingTextProps {
  primaryText: string;
  secondaryText: string;
  screenName?: string;
}

const HeadingText: React.FC<HeadingTextProps> = ({
  primaryText,
  secondaryText,
  screenName,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{t(primaryText)}</Text>
      <Text
        style={styles.seeAllText}
        onPress={() => navigation.navigate(screenName)}>
        {t(secondaryText)}
      </Text>
    </View>
  );
};

export default HeadingText;

const styles = StyleSheet.create({
  container: {
    height: ms(20),
    width: ms(341),

    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    color: colors.textColor,
    fontSize: ms(16),
  },
  headingText: {
    color: colors.textColor,
    fontSize: ms(18),
    fontWeight: '500',
  },
});
