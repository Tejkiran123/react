import { RES_URL } from "../common/contents"

const CardComponent = (props)=>{
    const {resData}=props
    return (
        <div className="card">
        <img className="img" src= {RES_URL + resData.cloudinaryImageId} />
        <div><h3>{resData.name}</h3></div>
        <div><h4>{resData.cuisines}</h4></div>
        <div><h4>Rating: {resData.avgRating}</h4></div>
        </div>
    )
}

export default CardComponent