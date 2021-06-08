import React from "react";

const Editor = ({ input, setInput }) => {
    return (
        <textarea value={input} onChange={event => setInput(event.target.value)} id="editor" autoFocus />
    )
}

export default Editor;