import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";

function Post() {
    let { postid } = useParams();

    const [md, setMd] = useState(null);
    
    const fetchData = async () => {
        const data = await fetch('https://api.thinkaton.com/post/get/' + postid)
        .then(response => response.text());
        setMd(data);
        console.log(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Markdown>{md}</Markdown>
    )
}

export default Post