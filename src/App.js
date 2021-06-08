import React, { useEffect, useState } from "react";

import Heading from "./components/Heading";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

import initialMarkdown from "./initial-markdown.md";

const App = () => {
  const [input, setInput] = useState();

  useEffect(() => {
    fetch(initialMarkdown)
    .then((response) => response.text())
    .then((text) => setInput(text));
  }, []);
  
  return (
    <div className="App">
      <Heading />
      <Editor input={input} setInput={setInput} />
      <Previewer input={input} />  
    </div>
  );
}

export default App;
