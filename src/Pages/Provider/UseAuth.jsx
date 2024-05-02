import { useContext} from 'react';
import { AuthContext } from './Provider';

const UseAuth = () => {
    const all =useContext(AuthContext)
    return all 
    
};

export default UseAuth;