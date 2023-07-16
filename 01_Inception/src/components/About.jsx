import React from "react";
import User from "./User";
import UserClass from "./UserClass";


// const About = () => {
//   return (
//     <>
//       <div>This is about us page</div>
//       <User name={"This name Mandar Vai fumctional Component"}  />
//       <UserClass  name={"This name Mandar Vai  Clasbased Component"} location="Aurangabad" contact="mandar_96_k" />
//     </>
//   );
// };

// export default About;


class About extends React.Component {

  constructor(props) {

    super(props)
    console.log("parent consstrucrtor");
  }
  
  componentDidMount(){
    console.log("parent componrnt compinent did mount");
  }
  render() {
     console.log("pareent render");
    return (

      <>
        <div>This is about us page</div>
        {/* <User name={"This name Mandar Vai fumctional Component"} /> */}
        <UserClass name={"This name Mandar Vai  Clasbased Component"} location="Aurangabad" contact="mandar_96_k" />
        {/* <UserClass name={"This name Aditya Vai  Clasbased Component"} location="Aurangabad" contact="mandar_96_k" /> */}
      </>

    )
  }
}

export default About;


