
import React from "react";
import ReactDOM from "react-dom";

// React.createElement => object => HtmlRender

const heading = React.createElement(
  "h1",
  { id: "headind" },
  "this is mandar marathe 🍟"
);
console.log(heading);

// jsx => html like
// React element
const jsxHeading = <h1 id="heading">hii form jsx syntax 🍟</h1>;





// React function component

const number =100

const Heading = () => {
  return (
    <div id="container">
      <h1> React functional component</h1>
       <h2>  {  number +23 }</h2> 
       <h3>{jsxHeading}</h3>
      <Heading1></Heading1>    {/* component composition */}
      {Heading1()}
    </div>
  );
};
const Heading1 = () => {
  return (
    <div id="child">
      <h1> React functional component1</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading)
// root.render(jsxHeading)
root.render(<Heading/>)
// root.render( <><Heading /><Heading1 /></>);
