import { AzureFunction, Context } from '@azure/functions';
import { PersonModel } from '../shared/personUser/person.model';

const queueTrigger: AzureFunction = async function (
  context: Context,
  peopleIdsQueue: string
): Promise<void> {
  context.log('Queue :', peopleIdsQueue);
  context.log(
    'erased',
    await PersonModel.deleteOne({ _id: peopleIdsQueue }).exec()
  );
};

export default queueTrigger;
