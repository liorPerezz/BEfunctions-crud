import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { PersonModel } from '../shared/personUser/person.model';
import getConnection from '../shared/mogoose';

const createPerson: AzureFunction = async (
  context: Context,
  req: HttpRequest
): Promise<void> => {
  try {
    await getConnection();
    await PersonModel.create(req.body);
    // findPerson: const person111 = await PersonModel.findById(person.id);
  } catch (err) {
    console.log(`couldnt create person ${err}`);
  }
};

export default createPerson;
