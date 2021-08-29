import { AzureFunction, Context } from '@azure/functions';
import { PersonModel } from '../shared/personUser/person.model';

const queueTrigger: AzureFunction = async function (
  context: Context,
  myQueueItem: string
): Promise<void> {
  context.log('Queue :', myQueueItem);
  context.log(
    'erased',
    await PersonModel.deleteOne({ _id: myQueueItem }).exec()
  );
};

export default queueTrigger;
