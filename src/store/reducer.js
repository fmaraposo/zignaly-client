import Actions from "./action"

const defaultState = {}

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case Actions.Types.GET_MOBILES: {

            const newState = {
                ...state,
                mobilePhones: action.payload,
                filterMobilePhones: action.payload
            };

            return newState

        }

        case Actions.Types.FILTER_MOBILES: {

            let newState = {...state}

            const filterMobilePhones = newState.filterMobilePhones.filter(mobilePhone => mobilePhone.name.toLowerCase().includes(action.payload.toLowerCase()))

            if(action.payload.length > 0) {
                newState = {
                    ...state,
                    mobilePhones: filterMobilePhones
                }
            } else {
                newState = {
                    ...state,
                    mobilePhones: state.mobilePhones
                }
            }

            return newState
            
        }

        default:
            return state
    }
}

export default reducer