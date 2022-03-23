export const actionType = {
    SET_PLAYER_ONE_NAME: 'SET_PLAYER_ONE_NAME',
    SET_PLAYER_ONE_SCORE: 'SET_PLAYER_ONE_SCORE'
}

const initState = {
    playerOneName: "",
    playerOneScore: 0
};

export const itemReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.SET_PLAYER_ONE_NAME: {
            return { ...state, playerOneName: action.payload };
        }
        case actionType.SET_PLAYER_ONE_SCORE: {
            return { ...state, playerOneScore: action.payload };
        }
        default:
            return state;
    }
};

export const actions = {
    setPlayerOneName: (playerOneName) => ({ type: actionType.SET_PLAYER_ONE_NAME, payload: playerOneName }),
    setPlayerOneScore: (playerOneScore) => ({ type: actionType.SET_PLAYER_ONE_SCORE, payload: playerOneScore }),
}
