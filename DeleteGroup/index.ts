import { AzureFunction, Context } from '@azure/functions';
import { GroupModel } from '../shared/groupUser/group.model';

const queueTrigger: AzureFunction = async function (
  context: Context,
  myQueueItem: string
): Promise<void> {
  context.log('Queue :', myQueueItem);
  context.log(
    'erased',
    await GroupModel.deleteOne({ _id: myQueueItem }).exec()
  );
};

export default queueTrigger;