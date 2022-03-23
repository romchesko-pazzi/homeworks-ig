import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'sort in ascending order': {
            let copy = state.map(m => ({...m}));
            return copy.sort((a, b) => a.age - b.age);
        }
        case 'sort by decreasing order': {
            let copy = state.map(m => ({...m}));
            return copy.sort((a, b) => b.age - a.age);
        }
        case 'check age 18': {
            return state.filter(f => f.age > 17);
        }
        default:
            return state
    }
}

export type ActionType = {
    type: string,
}