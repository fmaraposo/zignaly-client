import axios from 'axios';
const apiURL = 'http://localhost:1337';

const Types = {
    GET_MOBILES: "GET_MOBILES",
    FILTER_MOBILES: "FILTER_MOBILES"
}

const listMobilePhones = action => ({
    type: Types.GET_MOBILES,
    payload: action
})

const getMobiles = () => {
    return async (dispatch) => {
      
        try {
            const response = await axios.get(apiURL + '/phones');
            console.log(response)
            dispatch(listMobilePhones(response.data.mobiles))

        } catch(e) {
            const error = {errorMessage: `Connection Failed`}
            dispatch(listMobilePhones(error))
        }
    }
}

const filterMobilePhones = action => ({
    type: Types.FILTER_MOBILES,
    payload: action
})

export default {Types, getMobiles, filterMobilePhones}