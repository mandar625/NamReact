/**
 *              <div id="parent">
                  <div id="child">
                    <h1></h1>
                    <h2></h2>
                   </div>
                  <div id="child2">
                    <h1></h1>
                    <h2></h2>
                   </div>
                </div>
 *
 * 
 * ReactElement(object) = > Html(that browser Understand)
 */
import React from "react";
import  ReactDOM  from "react-dom";
const parent = React.createElement(
  "div",
  { id: "parent" },
  [ React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "Hellow this is done by nested  html structure React"),
    React.createElement("h2", {}, "Hellow this is done by nested  html structure React")]
  ), React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1", {}, "Hellow this is done by nested  html structure React"),
    React.createElement("h2", {}, "Hellow this is done by nested  html structure React")]
  )]

 
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", className: "headingClass" },
//   "hiii I am h1 By React"
// );

// console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
