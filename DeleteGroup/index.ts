import { AzureFunction, Context } from '@azure/functions';
import { GroupModel } from '../shared/groupUser/group.model';

const queueTrigger: AzureFunction = async function (
  context: Context,
  groupsIdsQueue: string
): Promise<void> {
  context.log('Queue :', groupsIdsQueue);
  context.log(
    'erased',
    await GroupModel.deleteOne({ _id: groupsIdsQueue }).exec()
  );
};

export default queueTrigger;