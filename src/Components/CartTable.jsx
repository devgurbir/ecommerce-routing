import { makeStyles } from "@material-ui/core"
import {useContext} from 'react'
import { CartContext } from "../Context/CartContextProvider";

const useStyles = makeStyles({
    cartTable: {
        border: "1px solid #ccc",
        margin: "0 auto",
        color: "secondary"
        
    }
})

export default function CartTable({children}){
    const [cart] = useContext(CartContext)
    const classes = useStyles();
    let totalPrice = 0;
    
    for(let item of cart){
        console.log(item.price * item.quantity)
        totalPrice += item.price * item.quantity;
    }

    return (
        <table className = {classes.cartTable}>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Final Price</th>
                </tr>
            </thead>
            <tbody>
                {children}
                <tr>
                    <td colspan={3} style={{border:"1px solid black", fontWeight: "bold"}}>Final Price</td>
                    <td style={{border:"1px solid black"}}>{totalPrice}</td>
                </tr>
            </tbody>
        </table>
    )
}