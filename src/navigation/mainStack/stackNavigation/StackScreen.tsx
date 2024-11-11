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
  Language,
} from '../../../screen';
import {screenNames} from '../../../utils/constants';

type StackScreenType = {
  id: number;
  name: string;
  component: React.ComponentType<any>;
};

const StackScreen: StackScreenType[] = [
  {id: 3, name: screenNames.address, component: Address},
  {id: 4, name: screenNames.wishlist, component: Wishlist},
  {id: 5, name: screenNames.payment, component: Payment},
  {id: 6, name: screenNames.help, component: Help},
  {id: 7, name: screenNames.support, component: Support},
  {id: 8, name: screenNames.userProfile, component: UserProfile},
  {id: 9, name: screenNames.addAddress, component: AddAddress},
  {id: 10, name: screenNames.seeAllCategories, component: SeeAllCategories},
  {id: 11, name: screenNames.categoryList, component: CategoryList},
  {id: 12, name: screenNames.addPayment, component: AddPayment},
  {id: 13, name: screenNames.cart, component: Cart},
  {id: 14, name: screenNames.search, component: Search},
  {id: 15, name: screenNames.language, component: Language},
];

export default StackScreen;
