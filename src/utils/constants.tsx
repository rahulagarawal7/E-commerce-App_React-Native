import {
  CategoriesImage1,
  CategoriesImage2,
  CategoriesImage3,
  CategoriesImage4,
  CategoriesImage5,
} from '../assets';

export const colors: {[key: string]: string} = {
  tintColor: '#8e6cef',
  textColor: '#000000',
  secondaryBgColor: '#f4f4f4',
  cardBgColor: '#f3f3f3',
  primaryBgColor: '#ffffff',
  radioButtonBgColor: '#342f3f',
};

export const languages = [
  {name: 'english', code: 'en'},
  {name: 'hindi', code: 'hi'},
  {name: 'french', code: 'fr'},
];

export const categoriesList = [
  {
    id: 1,
    categoriesImage: CategoriesImage1,
    categoriesName: 'hoodies',
  },
  {
    id: 2,
    categoriesImage: CategoriesImage2,
    categoriesName: 'shorts',
  },
  {
    id: 3,
    categoriesImage: CategoriesImage3,
    categoriesName: 'accessories',
  },
  {
    id: 4,
    categoriesImage: CategoriesImage4,
    categoriesName: 'shoes',
  },
  {
    id: 5,
    categoriesImage: CategoriesImage5,
    categoriesName: 'bag',
  },
];

export const screenNames = {
  login: 'Login',
  signUp: 'SignUp',
  bottomTab: 'BottomTab',
  address: 'Address',
  wishlist: 'Wishlist',
  payment: 'Payment',
  help: 'Help',
  support: 'Support',
  userProfile: 'UserProfile',
  addAddress: 'AddAddress',
  seeAllCategories: 'SeeAllCategories',
  categoryList: 'CategoryList',
  addPayment: 'AddPayment',
  cart: 'Cart',
  search: 'Search',
};
