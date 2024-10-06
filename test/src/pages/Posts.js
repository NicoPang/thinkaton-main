import React, { useState, useEffect } from "react";

function Posts() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://api.thinkaton.com/posts/search')
        .then(response => response.json())
        .then(json => setData(json))
    }, []);

    return (
        <div>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>
    )
}

export default Posts