import * as mongoose from 'mongoose';
// import { IGroup } from './group.interface';

const groupSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.String,
  name: mongoose.Schema.Types.String,
  people: { type: [mongoose.Schema.Types.ObjectId], ref: "Person" },
  groups: { type: [mongoose.Schema.Types.ObjectId], ref: "Group" },
  father: { type: mongoose.Schema.Types.ObjectId, ref: "Group"}
});

export const GroupModel: any = mongoose.model('Group', groupSchema);

