import { useEffect, useState, useRef } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Product from '../Components/Product'


const Categories = () => {
    const {id} = useParams();
        
    const [categoryData, setCategoryData] = useState([])

    const fetchCategoryData = () => {
        return axios.get(`http://localhost:3000/products?categoryId=${id}`).then(res => res.data);
    }

    const handleCategoryFetch = async () => {
        const data = await fetchCategoryData()
        setCategoryData(data)
    }

    useEffect(()=>{
        handleCategoryFetch();
    }, [])

    return (
        <div>
            Dynamic Routing For Categories
            {categoryData.map( product => <Product name={product.title} price={product.price}
             id={product.id} key={product.id} />)}
        </div>
    )
}

export default Categories