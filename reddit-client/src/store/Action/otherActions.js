export const handleToggle = (handleToggle) => (dispatch, getState) => {

    dispatch({
        type: 'OPEN-SIDEBAR',
        payload: handleToggle
    })
};