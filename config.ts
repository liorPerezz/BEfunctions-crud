import * as env from 'env-var';

export default {
  mongo: {
    uri: env.get('DB_URI').default('mongodb://localhost:27017/devDB').asUrlString()
   
}
}