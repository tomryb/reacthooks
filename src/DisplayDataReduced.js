import React, { useReducer, useEffect, useContext } from "react";
import { INITIAL_STATE, USERS_ACTION_TYPES, usersReducer } from "./Reducer"
import { UserContext } from './App';

function DisplayDataReduced(props) {
    const [usersState, dispatch] = useReducer(usersReducer, INITIAL_STATE);
    const userEmail = useContext(UserContext)
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
                    <li>Obecny użytkownik: {props.mail}</li>
                    <button onClick={userEmail.login}>Loguj</button>
                </ul>
            </div>
        </>
    )
}

export default DisplayDataReduced