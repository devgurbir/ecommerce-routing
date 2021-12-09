import {Link, Redirect} from "react-router-dom"
import { AuthContext } from "../Context/AuthContextProvider"
import { useContext } from "react"

export default function Dashboard(){
    const [isAuth] = useContext(AuthContext);

    if(!isAuth){
        return <Redirect to="/login" />
    }

    return (
        <>
        <h3>This is your dashboard</h3>
        <button><Link to="/dashboard/settings">Go To Settings</Link></button>
        </>
    )
}