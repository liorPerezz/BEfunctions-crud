import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import getConnection from '../shared/mogoose';

const sendPerson: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    
    try{
        await getConnection();
        const personId = context.bindingData.personId;
        context.bindings.personqueue = personId;
    }
   catch(err){
    console.log(`couldnt create person ${err}`);
   }
    };



export default sendPerson;