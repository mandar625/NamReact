import React from 'react'
import { Collapse } from 'antd';
import IteamList from './IteamList';

const RastaturantCategeory = (props) => {
    console.log(props, "passing");

    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const label = (<>
  {props.cardData.title}  ({props.cardData.itemCards.length})
</>)
const items = [
  {
    key: props.key,
    label: label,
    // children: <p>{text}</p>,
    children: <IteamList  iteams={props.cardData.itemCards}/>,
  },
];
  return (
    <div>
        {/* <h3>{props.cardData.title}</h3> */}
        <Collapse items={items}  />
    </div>
  )
}

export default RastaturantCategeory