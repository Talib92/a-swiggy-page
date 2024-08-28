import RestaurantCards from "./RestaurantCards";
//import restaurantObj from "../utils/data"
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";  
import useOnlineStatus from "../utils/useOnlineStstus";

const Body = () =>{

    const [restaurantList, setrestaurantList] = useState([]); //  here we had restaurantObj
    const [filteredRestaurants, setfilteredResaurants] = useState([]);

    const [searchText, setsearchText] =  useState("")

    // const PromotedCard = EnhancedRestaurant(RestaurantCards); // also import it


    useEffect(() =>{
        fetchData()
    },[])

    const fetchData =  async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json  = await data.json()
        //console.log(json)
       setrestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       setfilteredResaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }


    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return (
            <h1 className="text-red-500 font-bold">Oops! It seems you're offline. Please check your internet connection.</h1>
        )
    }

    // conditional rendering, rendering component based on condition
    // if(restaurantList.length === 0){
    //     return (
    //     <Shimmer/>
    //     )
    // } // converted into ternary below

    return restaurantList.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="flex  mt-5">
                <div className="">
                    <input className="ml-10 border border-solid border-black rounded-md pl-2 outline-none" type="search" placeholder="Search" value = {searchText}
                        onChange={(event)=>{
                            setsearchText(event.target.value)
                        }}
                    />
                    <button className="bg-blue-200 px-5 rounded-md ml-2 " onClick={()=>{
                        //console.log(searchText)
                       const searchedRes =  restaurantList.filter(
                        (restaurant) => 
                        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setfilteredResaurants(searchedRes)

                    }}
                    >
                        Search</button>
                </div>
                <button className="bg-green-300 ml-20 px-5 rounded-md" onClick={() => {
                    const filteredRes = restaurantList.filter(
                        (restaurant)=>
                            restaurant.info.avgRating>4.4);
                    //console.log(filteredRes)
                    setfilteredResaurants(filteredRes)
                }}
                >    
                    Top Rated Restaurants</button>
            </div>
                <div className="flex flex-wrap ">
                            {filteredRestaurants.map((restaurant) =>( // we display from filteredrestaurants and filter etc from restaurantlist and then update setfilteredrestaurant
                            <Link className="res-links" key = {restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
                                {/* here we can add date as restaurant.data.promoted ? (<Promotedcard  restaurantData = {restaurant}/>) :  */}
                                {/* PromotedCard we can declare above as shown */}
                                <RestaurantCards  restaurantData = {restaurant}/>
                             </Link>
                        ))}
                    {/* {restaurantList.map((restaurant) => (
                    <RestaurantCards key={restaurant.id} restaurantData={restaurant} />
                    ))} */}

                    {/* <RestaurantCards restaurantData = {restaurantObj[0]}/>
                    <RestaurantCards restaurantData = {restaurantObj[1]}/>
                    <RestaurantCards restaurantData = {restaurantObj[2]}/> */}
                </div>
        </div>
    )
}

export default Body;