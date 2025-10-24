import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

var reactElement = document.getElementById("root");
var reactRoot = createRoot(reactElement);

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
reactRoot.render(<App />);
