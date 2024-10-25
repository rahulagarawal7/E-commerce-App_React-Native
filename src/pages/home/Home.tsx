import {View, Text} from 'react-native';
import React from 'react';
import BackButton from '../../component/backButton/backButton';
import CenterHeading from '../../component/centerHeading/CenterHeading';
import ShopByCategoriesCard from '../../component/shopByCategoriesCard/ShopByCategoriesCard';
import Notification from '../notification/Notification';
import NotificationCard from '../../component/notificationCard/NotificationCard';
import EmptyPage from '../../component/emptyPage/EmptyPage';
import {BellEmptyLogo} from '../../assets';
import CartCard from '../../component/cartCard/CartCard';
import AddButtonCard from '../../component/addButtonCard/AddButtonCard';
import InputBox from '../../component/inputBox/InputBox';
import AddressCard from '../../component/addressCard/AddressCard';
import PaymentCard from '../../component/paymentCard/PaymentCard';

const Home = () => {
  return (
    <View style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
      <BackButton heading={'Back'} searchBox={false} />
    </View>
  );
};

export default Home;
