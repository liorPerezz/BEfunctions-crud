import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { PersonModel } from '../shared/personUser/person.model';
import getConnection from '../shared/mogoose';

const FindPerson: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  try {
    await getConnection();
    const person = await PersonModel.findById(context.bindingData.personId);
    console.log('found person :', person);
  } catch (err) {
    console.log(`couldnt find person ${err}`);
  }
};

export default FindPerson;
