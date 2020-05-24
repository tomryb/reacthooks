import React, { useReducer, useEffect } from "react";

const INITIAL_STATE = {
    data: [],
    isLoading: false,
    isError: false,
};

const USERS_ACTION_TYPES = {
    LOADING: 'USERS_LOADING',
    ERROR: 'USERS_ERROR',
    SUCCESS: 'USERS_SUCCESS',
};

function usersReducer(state, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case USERS_ACTION_TYPES.LOADING:
            return {
                ...state,
                isLoading: true
            }
        case USERS_ACTION_TYPES.ERROR:
            return {
                ...state,
                isError: true,
                isLoading: false,
            }
        case USERS_ACTION_TYPES.SUCCESS:
            return {
                data: [...action.data],
                isError: false,
                isLoading: false,
            }


    }
}

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