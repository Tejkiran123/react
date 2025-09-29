import CardComponent from "./card"
import dummyData from "../common/constants"
import { useState } from "react";
import { Groceries } from "./groceries";
import {useEffect} from "react"
import Shimmer from "./shimmer";
import FooterComponent from "./footer";
import { Link } from "react-router-dom";

//IBM, Deloitte, LTI Mindtree, Tech mahendra, Emhasis,  EY
const BodyComponent = () => {
    const [resList, setResList] = useState([]);
    const [apiData, setApiData]= useState([])
    const [searchText, setSearchText]=useState('')
// data
    useEffect(()=>{
       fetchData()
    }, []);
    const fetchData = async ()=>{
        const data = await fetch("https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.704095899999998&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING");
       const json = await data.json();
       setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       setApiData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       console.log(resList, "resLis")
       console.log(apiData, "apiData")
    }
    // if(resList.length === 0){
    //     return <Shimmer></Shimmer>
    // }
    console.log(apiData, "asdaf")
    return resList.length === 0 ? <Shimmer></Shimmer> : (
        <div className="bodyy">
            <div className="options">
                <span><input type="text" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)
                }}/>
                <button onClick={()=>{
                    const searchedList = apiData.filter(res=> res.info.name.toLowerCase().includes(searchText.toLowerCase()) )
                    console.log(searchedList, "search")
                  if(searchedList.length > 0) {setResList(searchedList) }
                  else{
                    setResList([])
                  }
                }}>Search</button>
                </span>
                <button >Veegterian</button>
                <button>Non Vegeterian</button>
                <button>Snacks</button>
                <button>Desserts</button>
                <button> <Link to="/groceries">Groceries</Link></button>
                <button onClick={() => {
                    const filteredCards = resList.filter(res => parseFloat(res?.info.avgRating) > 4.2
                
                );
                    console.log(filteredCards)
                    // const updatedList = { ...resList, info: filteredCards }; 
                    setResList(filteredCards);
                }}>Top Rated Restaurants</button>
                
            </div>
            <div className="items">
                {

                    resList.map((res, index) =>(<Link key={res?.info?.id} to={'/restaurants/' + res?.info?.id}><CardComponent  resData={res?.info} /> </Link>) )
                }

            </div>

        </div>
    )
}

export default BodyComponent