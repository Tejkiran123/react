import { useEffect, useState } from "react";
import { RESTAURANTS } from "../common/contents"

const useRestaurantApi = (params)=>{
    const [resInfo, setResInfo]=useState(null)
    useEffect(()=>{
        fetchData()
    }, [])
    async function fetchData(){
        const data = await fetch(RESTAURANTS + params.id + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json()
        setResInfo(json.data)
    }
    return resInfo
}
export default useRestaurantApi;