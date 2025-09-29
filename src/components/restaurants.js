import {useEffect, useState} from "react"
import Shimmer from "./shimmer"

import { useParams } from "react-router"
import useRestaurantApi from "../common/useRestaurantApi"
const Restaurants = ()=>{
    // const [apiData, setApiData] = useState(null)
    const params = useParams()
    const apiData = useRestaurantApi(params)   

    if(apiData === null) return <Shimmer />

    const { name, costForTwoMessage, cuisines, id } = apiData?.cards[2]?.card?.card?.info
    
    const { itemCards } = apiData?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards[1]?.card?.card
    console.log(itemCards)
    console.log(apiData?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards[1])
    return (
        <div>
            <h1>{name}</h1>
            <p>{costForTwoMessage}------{cuisines.join(", ")}</p>
            <ul>{itemCards.map(item=>{return <li key={item.card.info.id}>{item.card.info.name}    .Rs {item.card.info.price/100 || item.card.info.defaultPrice/100}</li> })}
            </ul>
        </div>
        
    )
}
export default Restaurants;