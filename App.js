import React from  "react";
import ReactDOM from "react-dom"

//React element is an object.
var hOneReact = React.createElement("h1", {}, "HEADING CREATED using React");
//hOneReact is a object

var htmlRoot = document.getElementById("root");
var rootReact = ReactDOM.createRoot(htmlRoot);

//root.render(..) replaces the existing childs in the root with a html element created from hOneReact object
rootReact.render(hOneReact);

console.log(hOneReact);
//JSX will make easy to create React elements.

//JSX is not part of React. JSX is different from React.

//JSX is a convention to merge HTML and javascript/React.

var jsxHeading = <h1 id="jsxHeading">Heading from JSX!!</h1>
console.log(jsxHeading);
//jsxHeading is a React Element.

//JSX looks like HTML but JSX is not HTML
//JSX is not HTML inside javascript.
//JSX is a HTML/XML like syntax.

rootReact.render(jsxHeading)



// JS Engine cannot understand JSX
// Javascript wont come with JSX
// JS Engine knows only ECMA SCRIPT 
// browser dont undestand JSX , Browser knows only HTML.
// try var jsxHeading = <h1 id="jsxHeading">Heading from JSX!!</h1> in browser console.
// jsxHeading = <h1 id="jsxHeading">Heading from JSX!!</h1>  : is not pure jsvascript.

//then how JSX is working in browser? Parcel manages to  Traspile JSX to javascript. 
//Babel's job is to compile and convert JSX to Bowser/JS Engine/ React understandble code.
// JSX will be traspilled before it reaches to JS Engine.

//React.createElement(..) => React Element -- is a JS Object => render as HTML Element.
//BABEL's job is //JSX => React.createElement(..) => React Element -- is a JS Object => render as HTML Element.

// in future we use only JSX syntax only and dont use createElement(..)

// refer and play on https://babeljs.io/ check how jsx converts to react elements.
//babel can convert JSX to old browser compatible ES-script.

// HTML : <h1 class="head">Heading from JSX!!</h1>
// JSX  : <h1 className="head">Heading from JSX!!</h1>
//JSX attributes must follow Camel case Ex: className, tabIndex

//Single line JSX
var jsxHeading = <h1 id="jsxHeading">Heading from JSX!!</h1>;
//multiline JSX need t wrap in paranthesis()
var jsxHeading = (<h1 
    id="jsxHeading">Heading from JSX!!
    </h1>);

//try prettier extension in vscode

//In React every thing is  a compinenet
//--Functional Componenets(newer way) and -- Classbased componenets(old method).

//React Functional Componenet is nothing but a JS function must return React Element (JSX).
// React Component name mut be start with CAPITAL Letter.

// Arrow function syntax
const HeadingComponent = () => {
    return <h1>ITs a React HeadingComponent</h1>;
}

//we can skip retun when there is only one line or return.
const HeadingComponent1 = () => {
     <h1>ITs a React Head Component1</h1>;
}

//we can remove the braces aswell when there is only one line or return.
const HeadingComponent2 = () => <h1>ITs a React Head Component2</h1>;

//we can add paranthesis when there are multiple lines or return.
const HeadingComponent3 = () => (<h1>ITs a React Head Component3</h1>);

//all the above are sysntaxes or JS not React

// best practice is to use return.

// the JS function can return a nested react elements
const HeadingComponent4 = () => {
    <div id="container1">
        <h1>ITs a React Head Component4</h1>;
    </div>
}

// React Element
const heading = (
    <h1 className="head" tabIndex="2">ITs a React Element</h1>
);

//To convert React Element to React Componenet
//change the name of the variable to CAPITAL Letter and make it as a function.

//Rendering React Element
rootReact.render(heading);

//Rendering React Componenet (must wrap it as a tag) Babel understands it.
rootReact.render(<HeadingComponent4 />);

//Nested React Componenets 

const Title1 = () => {
    <div id="container1">
        <h1>ITs a React Title1 </h1>;
    </div>
}

const HeadingComponent5 = () => {
    // ITs an error to add <Title1> here because function must return only one React Element (may be nested)
    //<Title1 />
    <div id="container1">
        <Title1 />
        <Title1></Title1>
        <Title1/>
        <h1>ITs a React Head Component5</h1>;
    </div>
}

//this is called Componenet Composition (just a terminology)

// Can I use normal function in place of Arrow function to create React Componenet?
// YES!!

const Title2 = function(){
    return (
        <div id="container1">
            <h1>ITs a React Title2 </h1>;
        </div>
    );
}

//but arrow function are industry wide standard.

// React Element inside a React Componenet
// React Element

const heading1 = (
    <h1 className="head" tabIndex="2">ITs a React Heading</h1>
);

const span = (
    <span>{heading1}</span>
);

const num1 = 100;
const HeadingComponent6 = () => {
    //we need to use {} to include any Javascript code inside a JSX
    <div id="container1">
        <Title1 />
        {num1};
        {num1 + 200};
        <h2>{num1 + 300}</h2>;
        {console.log("I am satya.n.")};
        {heading1};
        {Title1()};
        <h1>ITs a React Head Component6</h1>;
    </div>
}

//is it possible to create infinite loop in HTML?
// why i am using const to create react element or react componenet?

// Componenet inside a Element