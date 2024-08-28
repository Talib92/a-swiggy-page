import { RES_LOGO_URL } from "../utils/constants";

const RestaurantCards = (props) =>{
    const {restaurantData} = props
    // console.log(restaurantData)
    const {name, cuisines, costForTwo,avgRating,cloudinaryImageId } = restaurantData?.info;

    return (

            <div className="m-9 p-5 w-[300] bg-gray-100 rounded-md  hover:bg-gray-300 shadow-md">
                <img className="rounded-lg w-[300] h-64" src=
                {RES_LOGO_URL + cloudinaryImageId }
                alt="" />

                <h4 className="font-bold mt-2 text-lg" >{name}</h4>
                <h5 className="font-semibold" >{cuisines.join(", ")}</h5>
                <h5 className="font-semibold" >{costForTwo}</h5>
                <h5 className="font-semibold" >{avgRating + " stars"}</h5>

            </div>
    )
}

export default RestaurantCards;

// supose i want to make a higher order component => which takes a component and return the enhanced version of the componenet

// we can write it as:

// export const EnhancedRestaurant = (RestaurantCards) =>{
//     return(props)=>{ as this is the component we are returning
//         return (
//             our enchanced card. eg. like promoted Etc.
                // <RestaurantCards {...props}/>
//         )
//     }
// }

//  than we gonna use this component in our body and render it maybe using ternary operator.
