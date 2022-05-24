import {AppStoreType} from "../../h10/bll/store";

export type InitialStateType = {
    color: string
};

const initState: InitialStateType = {
    color: "white"
};


type ActionType = ChangeThemeType;
type ChangeThemeType = ReturnType<typeof changeThemeC>


export const themeReducer = (state = initState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, color: action.payload.option};
        }
        default:
            return state;
    }
};

export const changeThemeC = (option: string) => {
    return {
        type: "CHANGE-THEME",
        payload: {option},
    } as const
};

export const select = (state: AppStoreType) => state.theme