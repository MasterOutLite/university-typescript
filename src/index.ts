import './styles/main.scss';

import {print} from './utils';

const user: User = {
  name: 'Test',
  age: 14,
};

window.onload = () => {
  print(user);
};
