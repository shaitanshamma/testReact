const defaultUserList = {
    users: [],
    loading: false,
    error: ''
}

export function usersReducer(state = defaultUserList, action) {
    switch (action.type) {
        case 'delete':
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload)
            }
        case 'getUsers':
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case 'getLoading':
            return {
                ...state,
                loading: true
            }
        case 'getError':
            return {
                ...state,
                error: action.payload
            }
        default:
            return defaultUserList
    }
}

export function getUsers() {
    return async (dispatch) => {
        dispatch({
            type: 'getLoading',
        })
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            dispatch({
                type: 'getUsers',
                payload: data
            })
        } catch (error) {
            dispatch({
                type: 'getError',
                payload: error.message
            })
        }
    }
}