import React, { useState, useEffect } from "react";

function DisplayData() {
    const [data, setData] = useState([])
    const [usersLoading, setUsersLoading] = useState(false);
    const [usersError, setUsersError] = useState(false);


    useEffect(() => {
        setUsersLoading(true);
        //aby sprawdzić czy obsługujemy dobrze errory - zrobić błąd w url
        const dataUrl = "https://jsonplaceholder.typicode.com/users"
        fetch(dataUrl)
            .then(response => response.json())
            .then(jsonData => setTimeout(() => {
                setUsersLoading(false);
                setData(jsonData);
            }, 3000))
            .catch(e => {
                setUsersError(true);
                setUsersLoading(false);
            })
    }, []);

    return (
        <>
            <div>
                <ul>
                    <h2>Użytkownicy</h2>
                    {usersLoading && <div>Ładowanie danych</div>}
                    {usersError && <div>Błąd ładowania danych</div>}
                    {data.map((hits) => <li key={hits.id}>{hits.name}</li>)}
                </ul>
            </div>
        </>
    )
}

export default DisplayData

