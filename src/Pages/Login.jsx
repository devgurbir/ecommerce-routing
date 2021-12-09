import React, {useState} from "react"
import { AuthContext } from "../Context/AuthContextProvider";
import { useContext } from "react";
import { Redirect } from "react-router-dom"

export default function Login(){
    const [isAuth, setIsAuth] = useContext(AuthContext)

    console.log("Auth : ", isAuth)

    const [formData, setFormData]  = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.username == 'admin' && formData.password == 'password'){
            console.log("Username & Password correct")
            setIsAuth(true)

        }
        else{
            alert("username/password incorrect, try again")
        }
    }   

    if(isAuth){
        return <Redirect to="/categories" />
    }

    return (
        <div style={{width:"200px", margin:"0 auto"}}>
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", gap:"10px"}}>
            <input type="username" name="username" value={formData.username} onChange={(e) => handleChange(e)} placeholder="Enter username" />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter password" />
            <input type="submit" />
        </form>
    </div>
    )
}