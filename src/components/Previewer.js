import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

const Previewer = ({ input }) => {
    return (
        <div id="preview">
            <ReactMarkdown plugins={[gfm]} children={input} />
        </div>
    )
}

export default Previewer;