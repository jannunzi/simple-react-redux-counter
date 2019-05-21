import {PLUS, MINUS, RESET} from '../constants'

const counter = (state = { value: 10 },
                 action) => {
    switch (action.type) {
        case RESET:
            return { value: 0 }
        case PLUS:
            return { value: ++state.value }
        case MINUS:
            return { value: --state.value }
        default:
            return state
    }
}

export default counter;