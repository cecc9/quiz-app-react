import { useEffect, useRef } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { Props } from "./types";
import hljs from "highlight.js";

import "highlight.js/styles/monokai-sublime.css";

const CodeBlock = ({ codeString, language, width = "80%" }: Props) => {
    const codeRef = useRef<HTMLElement>(null);
    const [isLargerThan600] = useMediaQuery("(max-width: 600px)");

    useEffect(() => {
        if (codeRef.current !== null) {
            hljs.highlightBlock(codeRef.current);
        }
    }, []);

    return (
        <pre style={{ width: `${width}` }}>
            <code
                ref={codeRef}
                className={language}
                style={{ fontSize: `${isLargerThan600 ? "12px" : "14px"}` }}
            >
                {codeString}
            </code>
        </pre>
    );
};

export default CodeBlock;
