import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Posts() {
    const [list, setList] = useState(null);
    
    const fetchData = async () => {
        const data = await fetch('https://api.thinkaton.com/post/search')
                    .then(response => response.json())
                    .then(json => JSON.parse(json.body));
        const listItems = data.map(post =>  <li key={post}><Link to={post}>{post}</Link></li>);
        setList(listItems);
        
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {list ? <ul>{list}</ul> : 'Loading...'}
        </div>
    )
}

export default Posts