import './styles/main.scss';

import users from './data/users.json';
import {print} from './utils';

window.onload = async () => {
  print(users);
};
