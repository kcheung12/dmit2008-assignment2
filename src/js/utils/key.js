import { v4 as uuidv4 } from 'uuid';

const keyGenerator = function (data){   
    
    data.id = uuidv4().substr(0,8);    
    return data

}

export {keyGenerator}
