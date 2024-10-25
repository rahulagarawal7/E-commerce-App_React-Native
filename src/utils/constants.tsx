export const colors: {[key: string]: string} = {
  tintColor: '#8e6cef',
  textColor: '#000000',
  secondaryBgColor: '#f4f4f4',
  cardBgColor: '#f3f3f3',
  primaryBgColor: '#ffffff',
};

export const languages = [
  {name: 'english', code: 'en'},
  {name: 'hindi', code: 'hi'},
  {name: 'french', code: 'fr'},
  {name: 'mandarin', code: 'zh'},
];

export const mask = (cc: number, num = 4, mask = '*') =>
  `${cc}`.slice(-num).padStart(`${cc}`.length, mask);
