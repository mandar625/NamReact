import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RastaturantCategeory from "./RastaturantCategeory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null)

  const { resID } = useParams();
  // console.log(param,"kkkkkkkkkkkkk");

  const resInfo = useRestaurantMenu(resID); // coustom hook

  // const fetchMenu = async () => {

  //     const data = await fetch(MENU_API + resID)
  //     const json = await data.json()
  //     console.log(json, "mmmmmmmmmmmm");
  //     setResInfo(json.data)

  // }
  // useEffect(() => {

  //     fetchMenu()

  // }, [])

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  //   console.log(itemCards,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  console.log(
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards,
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  );

  const categeories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return(
            c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
      }
    );

    console.log(categeories, "filtered");

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* <ul>
        {itemCards.map((ele, inx) => {
          return <li key={inx}>{ele.card.info.name}</li>;
        })}
      </ul> */}

      {/* Catrgerioes Accordian */}
       

      {categeories.map((res , indx)=>{
        return(

            <RastaturantCategeory cardData={res?.card?.card} key ={indx} />
        
        )
      })}

    </div>
  );
};

export default RestaurantMenu;
