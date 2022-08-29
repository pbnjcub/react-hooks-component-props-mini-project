import React from "react";
import blogData from "../data/blog";
import RenderHeader from "./Header"
import RenderAbout from "./About"

console.log(blogData.image);
function App() {
  return (
    <div className="App">
      <RenderHeader name={blogData.name}/>
      <RenderAbout alt="image" src={blogData.image}/>
    </div>
  );
}

export default App;
