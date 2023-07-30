import { useState, useEffect } from "react";
import resList from "../utils/mockdata";
import ResCards from "./ResCards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [restaurantList, setrestaurantList] = useState([]);
    const [serachText, setSerachText] = useState("");
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        console.log(json);
        setrestaurantList(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
        setFiltered(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
    };





    const onlineStatus = useOnlineStatus()
      console.log(onlineStatus,"onlineStatus");

    if (onlineStatus === false)
        return (

            <h1> You are Offline</h1>

        )



    return restaurantList.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        placeholder="serach here "
                        value={serachText}
                        onChange={(e) => {
                            setSerachText(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            console.log(serachText);
                            const filteredrestaurant = restaurantList.filter((ress) => {

                                return (

                                    ress.data.name.toLowerCase().includes(serachText.toLowerCase())
                                )

                            })

                            setFiltered(filteredrestaurant)
                        }}
                    >
                        Serach
                    </button>
                </div>
                <button
                    onClick={() => {
                        const filteredList = restaurantList.filter(
                            (res) => res.data.avgRating > 4
                        );

                        console.log(filteredList);
                        setFiltered(filteredList);
                    }}
                    className="filter-btn"
                >
                    Top reated restaurant whose rating is above 4*
                </button>
            </div>
            <div className="resContainer">
                {filtered.map((restaurant, index) => {
                    return <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id} ><ResCards resData={restaurant} /></Link>;
                })}
            </div>
        </div>
    );
};

export default Body;
