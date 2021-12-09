import {Switch, Redirect, Route} from 'react-router-dom'
import { AuthContext } from '../Context/AuthContextProvider'
import { useContext } from 'react'


function PrivateRoutes({path, children}){
    const [isAuth] = useContext(AuthContext)

    if(!isAuth){
        return <Redirect to="/login"/>
    }

    return(
                  
            <Route exact path={path}>
                {children}
            </Route>

    )
}

export default PrivateRoutes