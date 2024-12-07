import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {UserLogo} from '../../assets';
import {AddButtonCard, NameAddressCard} from '../../component';
import {colors, ms} from '../../utils';
import {screenNames} from '../../utils/constants';

const userInfo = {
  name: 'rahul Agrawal',
  phone: 7067076526,
  email: 'rahul@gmail.com',
};

const profileButtonNames: profileButtonNames[] = [
  {id: 1, name: 'address', screenName: screenNames.address},
  {id: 2, name: 'wishlist', screenName: screenNames.wishlist},
  {id: 3, name: 'payment', screenName: screenNames.payment},
  {id: 4, name: 'help', screenName: screenNames.help},
  {id: 5, name: 'support', screenName: screenNames.support},
  {id: 6, name: 'language', screenName: screenNames.language},
];

interface profileButtonNames {
  id: number;
  name: string;
  screenName: string;
}

const Profile = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.userImageContainer}>
        <Image source={UserLogo} style={styles.UserImage} />
      </View>
      <NameAddressCard userInfo={userInfo} />
      <View style={styles.btnBox}>
        {profileButtonNames.map(btn => (
          <AddButtonCard
            key={btn.id}
            title={btn.name}
            screenName={btn.screenName}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.primaryBgColor,
    gap: 20,
  },
  UserImage: {
    width: ms(80),
    height: ms(80),
    borderRadius: 80,
  },
  userImageContainer: {
    height: ms(180),
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  btnBox: {
    gap: 10,
  },
  scrollViewContainer: {
    gap: 25,
  },
});
