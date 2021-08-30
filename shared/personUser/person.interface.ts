import * as mongoose from 'mongoose';

export interface IPerson {
  name: string;
  id: string;
  inGroups: string[];
}

export interface PersonQuery {
  id?: string;
  name?: string;
}

export interface PersonDocument extends mongoose.Document {
  id: string;
  name: string;
  inGroups: string[];
}
