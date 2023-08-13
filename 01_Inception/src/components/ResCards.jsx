import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import userContext from "../utils/userContext";
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
  console.log(props, "props in resCard");

  const {loggedInuser} = useContext(userContext)
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
      <h4>{props.additionalProp}</h4>
      <h4>user:{loggedInuser}</h4>

    </div>
  );
};



export const higherOrderComponent = (ResCards) =>{

  return (props) =>{
    const modifiedProps = {
      ...props,
      // name:toUpperCase()
      resData: {
        ...props.resData,
        info: {
          ...props.resData.info,
          name: props.resData.info.name.toUpperCase(),
        },
      },
      additionalProp: "This is top rated restaurant card",
    
      }

    return(
      <div>
        <label>High rated restaurant</label>
        <ResCards {...modifiedProps}/>

      </div>
    )
  }
}
export default ResCards;