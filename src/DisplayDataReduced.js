import React, { useReducer, useEffect } from "react";
import {INITIAL_STATE, USERS_ACTION_TYPES, usersReducer} from "./Reducer"

function Users() {
    const [usersState, dispatch] = useReducer(usersReducer, INITIAL_STATE);
    useEffect(() => {
        dispatch({ type: USERS_ACTION_TYPES.LOADING });
        //aby sprawdzić czy obsługujemy dobrze errory - zrobić błąd w url
        const dataUrl = "https://jsonplaceholder.typicode.com/users"
        fetch(dataUrl)
            .then(response => response.json())
            .then(jsonData => setTimeout(() => {
                dispatch({ type: USERS_ACTION_TYPES.SUCCESS, data: jsonData })
            }, 3000))
            .catch(e => {
                dispatch({ type: USERS_ACTION_TYPES.ERROR });
            })
    }, []);

    return (
        <>
            <div>
                <ul>
                    <h2>Użytkownicy</h2>
                    {usersState.isLoading && <div>Ładowanie danych</div>}
                    {usersState.isError && <div>Błąd ładowania danych</div>}
                    {usersState.data.map((hits) => <li key={hits.id}>{hits.name}</li>)}
                </ul>
            </div>
        </>
    )
}

export default Users