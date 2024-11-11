export type RootStackParamList = {
  BottomTab: undefined;
  login: undefined;
  signUp: undefined;
  address: undefined;
  wishlist: undefined;
  payment: undefined;
  help: undefined;
  support: undefined;
  userProfile: undefined;
  addAddress: undefined;
  seeAllCategories: undefined;
  categoryList: { name: string }; 
  addPayment: undefined;
  cart: undefined;
  search: undefined;
  [key: string]: undefined | { name: string }; 
};
