import * as mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
  name: mongoose.Schema.Types.String,
  inGroups: {type: [mongoose.Schema.Types.ObjectId], ref: "Group" }
});

export const PersonModel: any = mongoose.model(
  'Person',
  personSchema,
  'people'
);