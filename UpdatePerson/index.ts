import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { PersonModel } from '../shared/personUser/person.model';
import getConnection from '../shared/mogoose';

const updatePerson: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
 
    try{
       await getConnection();
      const currentPersonId = context.bindingData.personId;
       const updatedPerson = req.body
       context.bindings.res={
         body:  await PersonModel.findByIdAndUpdate(currentPersonId,updatedPerson,{new:true}).exec() 
       }
     }
   catch(err){
       console.log('error');
       
   }
    };


export default updatePerson;