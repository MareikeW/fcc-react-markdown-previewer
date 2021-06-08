import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import "./App.css";

const App = () => {
  const [text, setText] = useState();
  

  return (
    <div className="App">
      <h1 className="heading">React Markdown Previewer</h1>
      <textarea value={text} onChange={event => setText(event.target.value)} id="preview" autoFocus />
      <ReactMarkdown plugins={[gfm]} children={text} />
    </div>
  );
}

export default App;
