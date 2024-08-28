// import { useEffect, useState } from "react"
import { useState } from "react";
import useRestaurant from "../utils/useRestaurant";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
// import { MENU_API } from "../utils/constants"; 
import { useParams } from "react-router-dom";

const RestaurantMenu = () =>{

    //const [restaurantInfo, setRestaurantInfo] = useState(null) // removed all and kept in a single file in order to optimize our app
    const {resId} = useParams()

    const restaurantInfo = useRestaurant(resId) // wrote this for optimization
    const [showIndex, setShowIndex] = useState(null)

    // useEffect(()=>{
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async ()=>{
    //     const data = await fetch(MENU_API + resId )
    //     const json = await data.json();
    //     console.log(json)

    //     setRestaurantInfo(json.data)
    // }

    if(restaurantInfo === null){
        return (
            <Shimmer/>
        )
    }

    const { name, cuisines, costForTwoMessage, avgRatingString, totalRatingsString } = restaurantInfo?.cards[2]?.card?.card?.info;
    //const {itemCards: itemCat1 } = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    //const {categories} = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    //const {itemCards: itemCat2} = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
    const categories = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
    return (
        <div className="mt-5 text-center ">
            <h1 className="font-bold text-2xl">{name}</h1>
            <h3 className="font-semibold text-sm" >{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <h3 className="font-semibold text-sm" > ⭐ {avgRatingString} ({totalRatingsString}) </h3>
            <h1 className="mt-5 font-bold text-2xl mb-4 ">Menu</h1>

            {categories.map(
                (category, index) => 
                <RestaurantCategory 
                data = {category?.card?.card}
                showItems = {index === showIndex ? true : false}
                setShowIndex = {() => setShowIndex(index)}
                />)} 

            {/* <div className="items">
                <ul>
                    <div className=" bg-green-400">
                    <h2 className="font-bold text-lg mt-2 px-2" >{restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.title}</h2>
                   
                    {
                        itemCat1.map((item) => <li className="px-2" 
                            key={item?.card?.info?.id}
                        >
                            {item?.card?.info?.name}.
                            {" Rs "}
                            {item?.card?.info?.defaultPrice /100 || item?.card?.info?.finalPrice /100 || item?.card?.info?.price /100}
                        </li>)  
                    }
                    {/* 
                    
                    <li>{itemCards[0]?.card?.info?.name}</li>
                    <li>{itemCards[1]?.card?.info?.name}</li>
                    <li>{itemCards[2]?.card?.info?.name}</li> */} 
                    {/* </div>
                </ul>
            </div> */} 
            {/* <div className="monsoon-items">
                <ul>
                    <div className=" bg-green-400 mt-2 "> 
                    {<h2 className="font-bold text-lg mt-2 px-2" >{restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card.title}</h2>}
                    {

                        categories[0].itemCards.map((item) => 
                            <li className="px-2" key={item?.card?.info?.id} >
                            {item?.card?.info?.name}.
                            {" Rs "}
                            {item?.card?.info?.defaultPrice/100}
                            </li>
                    )

                        // <>
                        // <li>{categories[0]?.itemCards[0]?.card?.info?.name}</li>
                        // <li>{categories[0]?.itemCards[1]?.card?.info?.name}</li>
                        // <li>{categories[0]?.itemCards[2]?.card?.info?.name}</li>
                        // <li>{categories[0]?.itemCards[3]?.card?.info?.name}</li>
                        // </>


                    }
                        {

                            categories[1].itemCards.map((item) => 
                            <li className="px-2" key={item?.card?.info?.id} >
                            {item?.card?.info?.name}.
                            {" Rs "}
                            {item?.card?.info?.defaultPrice/100}
                            </li>
                        )
                    }
                    </div>
                </ul>
            </div>   */}

                    {/* <div className="pot-rice">
                        <ul>
                            <div className="bg-green-400 mt-2 " >
                            <h2 className="font-bold text-lg mt-2 px-2" >{restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card.title}</h2>
                            {
                                itemCat2.map((item) =>(
                                    <li className="px-2" >
                                        {item?.card?.info?.name}
                                        {" Rs "}
                                        {item?.card?.info?.defaultPrice/100 || item?.card?.info?.finalPrice/100 }
                                        </li>
                                ))
                            }
                            </div>
                        </ul>
                    </div> */}

        </div>
    )
}
export default RestaurantMenu

// categories[0]?.itemCards[0]?.card?.info