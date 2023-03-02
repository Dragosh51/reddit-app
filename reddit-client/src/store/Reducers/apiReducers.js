const initState = {
    // isLoading: false,
    // user: undefined,
};

const apiReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_API':
            return {
                ...state,
                // isLoading: true,
                allSubreddits: action.payload,
            };
        
        case 'FETCH_POSTS':
            return {
                ...state,
                allPosts: action.payload,
            };

        default:
            return state;
    }
};

export default apiReducer;