import { UserAuth } from './Context/AuthContext';
import { useEffect } from 'react';


function Protected({ children }) {

    const { user, logOut } = UserAuth();

    useEffect(() => logOut(), [])
    
    if (!user) {
        return (console.log("not user"))
    }

    return children;
}

export default Protected;