import {
  AddAddress,
  AddPayment,
  Address,
  Cart,
  CategoryList,
  Help,
  Payment,
  Search,
  SeeAllCategories,
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
    id: 7,
    name: 'addAddress',
    component: AddAddress,
  },
  {
    id: 8,
    name: 'seeAllCategories',
    component: SeeAllCategories,
  },
  {
    id: 9,
    name: 'categoryList',
    component: CategoryList,
  },
  {
    id: 10,
    name: 'addPayment',
    component: AddPayment,
  },
  {
    id: 11,
    name: 'cart',
    component: Cart,
  },
  {
    id: 12,
    name: 'search',
    component: Search,
  },
];
export default StackScreen;
