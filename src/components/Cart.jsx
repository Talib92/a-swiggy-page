import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice"

const Cart = () =>{

    const cartItems = useSelector((store)=> store.cart.items)// subscribing to store.

    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart())
    }

    return (
        <div className= "w-6/12 m-auto text-center" >
            <h1 className="p-2 m-4 font-bold text-center text-2xl">YOUR CART</h1>
            <button className="px-4 m2 font-bold bg-black text-white rounded-2xl " 
            onClick={handleClearCart}
            >Clear Cart
            </button>
            {cartItems.length === 0 && <h1 className="p-2 m-2">Your cart is empty</h1>}

            <ItemList items = {cartItems}/>

        </div>
    )
}
export default Cart;