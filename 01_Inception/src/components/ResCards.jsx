import { CDN_URL } from "../utils/constant";
const ResCards = (props) => {
  // const { resData } = props;
  // // console.log(resData);
  // const {
  //   cloudinaryImageId,
  //   name,
  //   cuisines,
  //   avgRating,
  //   costForTwo,
  //   deliveryTime,
  // } = resData?.data;
  // console.log(props, "props in resCard");
  return (
    <div className="resCard">
      
      <img
        className="resImg"
        src={CDN_URL + props.resData.info.cloudinaryImageId}
      />

      <h3>{props.resData.info.name}</h3>
      <h4>{props.resData.info.cuisines.join(", ")}</h4>
      <h4>{props.resData.info.avgRating}stars </h4>
      <h4>${props.resData.info.costForTwo / 100} for two</h4>
      <h4>{props.resData.info.deliveryTime} min </h4>

    </div>
  );
};
export default ResCards;