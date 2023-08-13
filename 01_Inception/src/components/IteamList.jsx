import React from 'react'

const IteamList = (props) => {
  return (
    <div>

        {
            props.iteams.map((ele,idx)=>{
                return(
                    <div key={ele.card.info.id}  style={{border:"1px solid red", margin:"4px 0"}}>


                        <b>{ele.card.info.name}</b>
                        <p>{ele.card.info.description}</p>

                    </div>
                )
            })
        }
    </div>
  )
}

export default IteamList