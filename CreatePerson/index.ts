import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { PersonModel } from '../shared/personUser/person.model';
import getConnection from '../shared/mogoose';

const createPerson: AzureFunction = async (
  _context: Context,
  req: HttpRequest
): Promise<void> => {
  try {
    await getConnection();
    await PersonModel.create(req.body);
  } catch (err) {
    console.log(`couldnt create person ${err}`);
  }
};

export default createPerson;
