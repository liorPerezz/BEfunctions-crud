import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { GroupModel} from '../shared/groupUser/group.model';
import getConnection from '../shared/mogoose';


const createGroup: AzureFunction = async (
    _context: Context,
    req: HttpRequest
  ): Promise<void> => {
    try {
      await getConnection();
      await GroupModel.create(req.body);
    } catch (err) {
      console.log(`couldnt create the group ${err}`);
    }
  };

export default createGroup;