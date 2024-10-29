import {Home, Cart, Notification, Profile} from '../../screen';
import {
  HomeIcon,
  ProfileIcon,
  notificationIcon,
  ReceiptIcon,
} from '../../assets';

const bottomTabNavigation = [
  {
    id: 1,
    name: 'Home',
    component: Home,
    icon: HomeIcon,
  },
  {id: 2, name: 'Cart', component: Cart, icon: ReceiptIcon},
  {
    id: 3,
    name: 'Notification',
    component: Notification,
    icon: notificationIcon,
  },
  {
    id: 4,
    name: 'Profile',
    component: Profile,
    icon: ProfileIcon,
  },
];

export default bottomTabNavigation;
