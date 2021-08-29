import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import getConnection from '../shared/mogoose';

const sendGroup: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    
    try{
        await getConnection();
        const groupId = context.bindingData.groupId;
        context.bindings.groupqueue = groupId;
    }
   catch(err){
    console.log(`couldnt send to queue ${err}`);
   }
    };



export default sendGroup;