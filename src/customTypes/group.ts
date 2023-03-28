import {group} from 'console';

enum Gender {
  Genderfluid = 'Genderfluid',
  Male = 'Male',
  Female = 'Female',
}

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: Gender;
  avatar: string;
};

type Group = {
  famale: User[];
  male: User[];
};

export type {User, Group};
export {Gender};
