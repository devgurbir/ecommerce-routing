import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from '../Context/AuthContextProvider'
import { useContext } from 'react'

export default function Navbar(){
    const [isAuth, setIsAuth] = useContext(AuthContext)

    const [categories, setCategories] = useState([])
    
    const fetchCategories = () => {
        return axios.get("http://localhost:3000/categories")
    }

    const handleCategoriesFetching = async () => {
        const fetchedData = await fetchCategories().then(res => res.data)
        setCategories(fetchedData)
    }

    useEffect(() => {
        handleCategoriesFetching()
    } ,[])

    return(
        <nav style={{display:"flex", gap:"15px", justifyContent:"center", marginTop:"20px", marginBottom:"20px"}}>
            <div style={{display: 'flex', gap:"10px", justifyContent:"space-between", border:"1px solid #ccc", padding: "10px" }}>
                <Link to="/product">All Products</Link>
                {categories.map( c => <Link to={`/categories/${c.id}`}>{c.title}</Link>)}
            </div>

            <div style={{display: "flex", gap:"10px", padding: "10px", border: "1px solid black"}}>
                <Link to="/showCart">Cart</Link>
                {isAuth ? <div style={{textDecoration:"underline"}} onClick={() => setIsAuth(false)}>Logout</div> : <Link to="/login">Login</Link>}
                {isAuth && <Link to="/dashboard">Dashboard</Link>}
            </div>

            <div style={{display: "flex", gap:"10px", padding: "10px", border: "1px solid black"}}>
                <Link to="/aboutUs">About Us</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/contact">Contact</Link>
                
            </div>

            
        </nav>
    )
}