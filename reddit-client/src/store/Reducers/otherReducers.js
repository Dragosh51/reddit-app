const initState = {
    openSidebar: false,
    // isLoading: false,
    // user: undefined,
};

const otherReducer = (state = initState, action) => {
    switch (action.type) {
        case 'OPEN-SIDEBAR':
            return {
                ...state,
                // isLoading: true,
                openSidebar: action.payload,
            };

        default:
            return state;
    }
};

export default otherReducer;