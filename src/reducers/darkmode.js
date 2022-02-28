const initialState = true;

const darkmode = (state = initialState, action) => {
    switch (action.type) {
        case "DARKMODE":
            state = !state;
            console.log(state);
            return state;
        default:
            return state;
    }
};

export default darkmode;