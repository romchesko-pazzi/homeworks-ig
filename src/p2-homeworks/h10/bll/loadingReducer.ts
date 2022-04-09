export type LoadingStateType = {
    isLoading: boolean
}
type LoadingACType = ReturnType<typeof loadingAC>

const initState: LoadingStateType = {
    isLoading: false
}

export const loadingReducer = (state: LoadingStateType = initState, action: LoadingACType): LoadingStateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, isLoading: !action.payload.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean) => {
    return {
        type: "LOADING",
        payload: {isLoading},
    } as const
}