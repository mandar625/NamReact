import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //   console.log(props);
    // console.log( this.props.name + "child constructor");
    this.state = {
      count: 0,

      userInfo:{
        name:"dummy name",
        following:"duumy following",
        login:"dummy login iD" 
      }
 
    };
  }

  async componentDidMount(){
    // console.log(this.props.name+ "child componrnt compinent did mount");
    // Api Call

    const data = await fetch("https://api.github.com/users/mandar625")
    const json = await data.json()

    this.setState({
      userInfo:json
    })
    // console.log(json);
  }
  componentDidUpdate(){
    console.log("componentDidUpdate");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
  render() {
    // debugger;
    //   console.log(this.props);
    // const { name, location, contact } = this.props;
    // const { count} = this.state;
    const { login, following, name,avatar_url} = this.state.userInfo;
    console.log( this.props.name+"child render");
    return (
      <div className="userCard">
        {/* <p>{count}</p>
        <button onClick={()=>{
         this.setState({
            count :this.state.count + 1
         })
        }}>Click me</button> */}
        <img src={avatar_url} alt=""  style={{width:"200px", height:"200px"}} />
        <h2>Name :{name}</h2>
        <p>location {following}</p>
        <p>Contact:{login}</p>
      </div>
    );
  }
}

export default UserClass;
