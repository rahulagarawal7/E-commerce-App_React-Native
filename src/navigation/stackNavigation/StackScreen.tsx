import {
  AddAddress,
  Address,
  Help,
  Payment,
  Support,
  UserProfile,
  Wishlist,
} from '../../screen';

const StackScreen = [
  {id: 1, name: 'address', component: Address},
  {
    id: 2,
    name: 'wishlist',
    component: Wishlist,
  },
  {
    id: 3,
    name: 'payment',
    component: Payment,
  },
  {
    id: 4,
    name: 'help',
    component: Help,
  },
  {
    id: 5,
    name: 'support',
    component: Support,
  },
  {
    id: 6,
    name: 'userProfile',
    component: UserProfile,
  },
  {
    id: 6,
    name: 'addAddress',
    component: AddAddress,
  },
];
export default StackScreen;
