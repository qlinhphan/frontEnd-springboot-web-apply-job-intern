
import { INCREMENT, DECREMENT } from '../action/counterAction.ts';
const INITIAL_STATE = {
    info: {
        id: "",
        email: "",
        name: "",
        accessToken: "",
        refreshToken: "",
        role: ""
    },
    isAuthenticated: false
};
const userReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case "USER_LOGIN_SUCCESS":
            return {
                ...state,
                info: {
                    id: action.payload.id,
                    email: action.payload.email,
                    name: action.payload.name,
                    accessToken: action.payload.accessToken,
                    refreshToken: action.payload.refreshToken,
                    role: action.payload.role
                },
                isAuthenticated: true
            };
        case "logout_success":
            return {
                ...state,
                info: {
                    id: "",
                    email: "",
                    name: "",
                    accessToken: "",
                    refreshToken: "",
                    role: ""
                },
                isAuthenticated: ""
            };

        case DECREMENT:
            return {
                ...state
            };
        default: return state;
    }
};

export default userReducer;