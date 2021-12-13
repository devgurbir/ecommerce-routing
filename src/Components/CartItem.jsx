import {useContext} from 'react'
import {CartContext} from "../Context/CartContextProvider"

function CartItem({id, title, price, quantity}){

    const [cart, setCart] = useContext(CartContext)

    const updateQuantityInCart = (inc) => {
        let updatedCart = [...cart]

        for(let i = 0; i<updatedCart.length; i++){
            if(updatedCart[i].id === id){
                updatedCart[i].quantity += inc;
                if(updatedCart[i].quantity <= 0){
                    updatedCart.splice(i, 1)
                }
                break;
            }
        }
        
        setCart(updatedCart)

    }

    return (
        <tr>
            <td>{title}</td>
            <td><button onClick={() => updateQuantityInCart(-1)}>-</button>{quantity}<button onClick={() => updateQuantityInCart(1)}>+</button></td>
            <td>{price}</td>
            <td>{Number(quantity) * Number(price)}</td>
        </tr>
    )
}

export default CartItem