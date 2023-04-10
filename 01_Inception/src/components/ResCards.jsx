import { CDN_URL } from "../utils/constant";
const ResCards = (props) => {
    const { resData } = props;
    // console.log(resData);
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
    } = resData?.data?.data;
    return (
      <div className="resCard">
        <img
          className="resImg"
          src={CDN_URL+cloudinaryImageId}
        />
  
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}stars </h4>
        <h4>${costForTwo / 100} foe two</h4>
        <h4>{deliveryTime} min </h4>
      </div>
    );
  };
  export default ResCards;