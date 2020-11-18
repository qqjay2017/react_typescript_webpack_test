import * as React from "react";
import * as ReactDOM from "react-dom";

const root = document.getElementById("root");



let props = { className: "title" };
let element = React.createElement("div", props, "hello");
ReactDOM.render(element, root);
