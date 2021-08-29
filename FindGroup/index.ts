import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { GroupModel } from '../shared/groupUser/group.model';
import getConnection from '../shared/mogoose';

const findGroup: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  try {
    await getConnection();
    const group = await GroupModel.findById(context.bindingData.groupId);
    return group;
  } catch (err) {
    console.log(`couldnt find group ${err}`);
  }
};

export default findGroup;
