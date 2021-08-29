import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { PersonModel } from '../shared/personUser/person.model';
import getConnection from '../shared/mogoose';
import FindPerson from '../FindPerson';

const updatePerson: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
 
    try{
       await getConnection();
      const currentPersonId = context.bindingData.personId;
       const currentPerson = await FindPerson(context,
        req,currentPersonId);
        // console.log('currrrr', currentPerson)
       const updatedPerson = req.body
    //    console.log('newwww' , updatedPerson);
       
       const ppp=  await PersonModel.findByIdAndUpdate(currentPersonId,updatedPerson,{new:true}).exec() 
       console.log( 'i hope this works ',ppp)
     }
   catch(err){
       console.log('error');
       
   }
    };


export default updatePerson;