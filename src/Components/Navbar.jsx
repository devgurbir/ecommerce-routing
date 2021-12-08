import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(){
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
            {categories.map( c => <Link to={`/categories/${c.id}`}>{c.title}</Link>)}
        </nav>
    )
}