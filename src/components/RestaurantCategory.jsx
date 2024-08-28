import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory = ({data, showItems, setShowIndex}) =>{
    // console.log(data)

    // const [showItems, setShowItems]  = useState(false)

    // const handleClick = () =>{
    //     setShowItems(!showItems)
    // }

    const handleClick = () =>{
        setShowIndex();
    }

    return (
        <div>
            <div className="w-9/12 bg-gray-200 mb-5 m-auto shadow-lg px-2 py-2 rounded-md"  >
                <div className="flex justify-between cursor-pointer" onClick={handleClick} >
                    <span className="font-bold px-4" >{data.title} ({data.itemCards.length}) </span>
                    <span>⬇</span>
                </div>
                { showItems && <ItemList items= {data.itemCards} />}
            </div>
        </div>
    )
} 

export default RestaurantCategory
