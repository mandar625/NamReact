import { useEffect,useState } from "react";
import { MENU_API } from '../utils/constant'


const useRestaurantMenu = (resID) => {
    
    const [resInfo, setResInfo] = useState(null)

    useEffect(()=>{
         fetchdata()
    },[])

    const fetchdata = async() =>{
        const data = await fetch(MENU_API + resID)
        const json = await data.json()

        console.log("mandar",json);

        setResInfo(json.data)
    }

  return resInfo
}

export default useRestaurantMenu;