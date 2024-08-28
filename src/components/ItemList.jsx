import { useDispatch } from "react-redux";
import { RES_LOGO_URL } from "../utils/constants"
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) =>{
//    console.log(items)

    const dispatch = useDispatch();
    const handleAdd = (item) =>{ // dispatching an action
        dispatch(addItem(item))
    }



    return (
        <>
                <div>
                    {items.map((item) =>(
                        <div key={item?.card?.info?.id}  className="p-2 m-2 border-b-2 border-gray-400 text-left flex justify-between" >  
                            <div>
                                <span className="font-bold">{item?.card?.info?.name} - </span>
                                <span  className="font-bold"> Rs {item?.card?.info?.defaultPrice/100  || item?.card?.info?.finalPrice/100 || item?.card?.info?.price/100 }</span>
                                <p className="text-xs font-semibold mt-2 pr-2" >{item?.card?.info?.description}</p>
                            </div> 
                            <div>
                                <img src={RES_LOGO_URL + item?.card?.info?.imageId} className="w-44 h-24 rounded-lg ml-auto" />
                                <button className="px-6 py-1 font-bold text-green-600 bg-white border rounded-2xl border-green-700 mx-10 mb-2 "
                                //  onClick={handleAdd}
                                 onClick={() =>handleAdd(item)} // item because we are mapping over the item above
                                 >Add </button>
                            </div>
                        </div>
                    ))}
                </div>
        </> 
    )
}
export default ItemList