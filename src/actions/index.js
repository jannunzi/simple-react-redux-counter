import {PLUS, MINUS, RESET} from '../constants'

export const plus = dispatch => (
    dispatch({type: PLUS})
)
export const minus = dispatch => (
    dispatch({type: MINUS})
)
export const reset = dispatch => (
    dispatch({type: RESET})
)
