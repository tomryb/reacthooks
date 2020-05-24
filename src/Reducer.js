export const INITIAL_STATE = {
    data: [],
    isLoading: false,
    isError: false,
};

export const USERS_ACTION_TYPES = {
    LOADING: 'USERS_LOADING',
    ERROR: 'USERS_ERROR',
    SUCCESS: 'USERS_SUCCESS',
};

export function usersReducer(state, action) {
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