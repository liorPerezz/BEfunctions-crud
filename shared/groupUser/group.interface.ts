import * as mongoose from 'mongoose';

export interface IPerson {
  name: string;
  id: string;
  inGroups: string[];
}

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
