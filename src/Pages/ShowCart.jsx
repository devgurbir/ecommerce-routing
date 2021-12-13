import { useContext } from "react"
import { CartContext } from "../Context/CartContextProvider"
import CartTable from "../Components/CartTable";
import CartItem from "../Components/CartItem";

export default function ShowCart(){
    const [cart] = useContext(CartContext);
    return (
            <>
            {cart.length > 0 ?
                 <CartTable>
                    {cart.map(el => <CartItem key={el.id} id={el.id} quantity = {el.quantity} title = {el.title} price={el.price} />)}
                 </CartTable>
                  :
                  <div>Cart is empty</div>}
            </>
        
    )
}