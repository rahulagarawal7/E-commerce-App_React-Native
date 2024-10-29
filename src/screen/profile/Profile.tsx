import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {UserLogo} from '../../assets';
import {AddButtonCard, NameAddressCard} from '../../component';
import {colors, ms} from '../../utils';

const userInfo = {
  name: 'rahul Agrawal',
  phone: 7067076526,
  email: 'rahul@gmail.com',
};

const profileButtonNames: profileButtonNames[] = [
  {id: 1, name: 'address'},
  {id: 2, name: 'wishlist'},
  {id: 3, name: 'payment'},
  {id: 4, name: 'help'},
  {id: 5, name: 'support'},
];

interface profileButtonNames {
  id: number;
  name: string;
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
          <AddButtonCard key={btn.id} title={btn.name} />
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
