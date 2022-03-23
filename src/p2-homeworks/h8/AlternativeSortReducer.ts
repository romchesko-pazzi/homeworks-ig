import {UserType} from "./HW8";

export const AlternativeSortReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case "SORT-BY-ASCENDING-ORDER": {
            const copy = state.map(m => ({...m}));
            return copy.sort((a, b) => a.age - b.age);
        }
        case "SORT-BY-DECREASING-ORDER": {
            const copy = state.map(m => ({...m}));
            return copy.sort((a, b) => b.age - a.age);
        }
        case "CHECK-AGE-18": {
            return state.filter(f => f.age > 17);
        }
        default:
            return state
    }

}

type ActionType = SortByAscendingOrderType | SortByDecreasingOrderType | Check18Type;
type SortByAscendingOrderType = ReturnType<typeof sortByAscendingOrderAC>
type SortByDecreasingOrderType = ReturnType<typeof sortByDecreasingOrderAC>
type Check18Type = ReturnType<typeof check18AC>

export const sortByAscendingOrderAC = () => {
    return {
        type: "SORT-BY-ASCENDING-ORDER",
    } as const
}

export const sortByDecreasingOrderAC = () => {
    return {
        type: "SORT-BY-DECREASING-ORDER",
    } as const
}

export const check18AC = () => {
    return {
        type: "CHECK-AGE-18",
    } as const
}


