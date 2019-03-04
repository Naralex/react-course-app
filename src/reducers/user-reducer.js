const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGGIN':
            state = {
                ...state,
                layout: {
                    showMenu: (state.layout.showMenu ? false : true)
                }
            };
            break;
    }
    return state
};

export default userReducer;