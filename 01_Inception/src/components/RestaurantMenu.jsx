import { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { MENU_API } from '../utils/constant'
import { useParams } from 'react-router-dom'

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null)

    const {resID} = useParams()
    // console.log(param,"kkkkkkkkkkkkk");

    const fetchMenu = async () => {

        const data = await fetch(MENU_API + resID)
        const json = await data.json()
        console.log(json, "mmmmmmmmmmmm");
        setResInfo(json.data)

    }
    useEffect(() => {

        fetchMenu()

    }, [])
   if (resInfo===null) {
        return(
            <Shimmer/>
        )
   
   }

    const {name, cuisines,cloudinaryImageId,costForTwoMessage }  = resInfo?.cards[0]?.card?.card?.info
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  console.log(itemCards,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

    return(
            <div className='menu' >
                <h1>{name}</h1>
                <p>{cuisines.join(", ") } - {costForTwoMessage}</p>
                <ul>
                    {
                        itemCards.map((ele,inx)=>{
                            return(
                                <li key={inx} >{ele.card.info.name}</li>
                            )
                        })
                    }
                 
                </ul>

            </div>
        )
}

export default RestaurantMenu