import Actions from "./action"

const defaultState = {}

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case Actions.Types.GET_MOBILES: {

            const newState = {
                ...state,
                mobilePhones: action.payload
            };

            return newState

        }

        case Actions.Types.FILTER_MOBILES: {

            const newState = {...state}

            return newState
            
        }

        default:
            return state
    }
}

export default reducer