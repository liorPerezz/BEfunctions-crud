import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { PersonModel } from '../shared/personUser/person.model';
import getConnection from '../shared/mogoose';

const findPerson: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  try {
    await getConnection();
    const person = await PersonModel.findById(context.bindingData.personId);
    // console.log('found person :', person);
    return person;
  } catch (err) {
    console.log(`couldnt find person ${err}`);
  }
};

export default findPerson;
