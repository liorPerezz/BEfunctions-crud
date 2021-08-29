import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { GroupModel } from '../shared/groupUser/group.model';
import getConnection from '../shared/mogoose';
import FindGroup from '../FindGroup';

const updateGroup: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
 
    try{
       await getConnection();
      const currentGroupId = context.bindingData.groupId;
       const currentGroup = await FindGroup(context,
        req,currentGroupId);
       const updatedGroup = req.body
       
       const ppp=  await GroupModel.findByIdAndUpdate(currentGroupId,updatedGroup,{new:true}).exec() 
     }
   catch(err){
       console.log('error');
       
   }
    };


export default updateGroup;