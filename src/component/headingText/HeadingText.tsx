import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, ms} from '../../utils';

interface HeadingTextProps {
  primaryText: string;
  secondaryText: string;
}

const HeadingText: React.FC<HeadingTextProps> = ({
  primaryText,
  secondaryText,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>
        {primaryText.charAt(0).toUpperCase() + primaryText.slice(1)}
      </Text>
      <Text style={styles.seeAllText}>
        {secondaryText.charAt(0).toUpperCase() + secondaryText.slice(1)}
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
