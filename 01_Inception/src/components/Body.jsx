import { useState } from "react";
import resList from "../utils/mockdata";
import ResCards from "./ResCards";

const Body = () => {
    const [restaurantList, setrestaurantList] = useState(resList)

    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter" >
                <button onClick={() => {
                    const filteredList = restaurantList.filter(

                        (res) => res.data.data.avgRating > 4
                    )

                    // console.log(filteredList);
                    setrestaurantList(filteredList)


                }} className="filter-btn" >Top reated restaurant</button>
            </div>
            <div className="resContainer">
                {restaurantList.map((restaurant, index) => {

                    return (

                        <ResCards key={restaurant.data.data.id} resData={restaurant} />
                        // we can use index as a kay 
                    )


                })}
            </div>
        </div>
    );
};

export default Body;