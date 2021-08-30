import * as mongoose from 'mongoose';
import {IPerson} from '../personUser/person.interface'
// export interface IPerson {
//   name: string;
//   id: string;
//   inGroups: string[];
// }

export interface IGroup {
  id: string;
  name: string;
  father?: string;
  people: string[];
  groups: string[];
}

export interface GroupDocument extends mongoose.Document {
  id: string;
  name: string;
  father?: string;
  people: IPerson[];
  groups: IGroup[];
}
