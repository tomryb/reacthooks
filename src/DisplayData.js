import React, { useState, useEffect } from "react";

function DisplayData() {
    const [data, setData] = useState([])


    useEffect(() => {
        const dataUrl = "https://jsonplaceholder.typicode.com/users"
        fetch(dataUrl)
            .then(response => response.json())
            .then(jsonData => setData(jsonData))
    }, []);

    return (
        <>
        <div>
            <ul>
                {data.map((hits) => <li key={hits.id}>{hits.name}</li>)}
            </ul>
        </div>
        </>
    )
}

export default DisplayData

