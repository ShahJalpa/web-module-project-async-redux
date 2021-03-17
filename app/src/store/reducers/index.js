import { FETCH_JOKES_SUCESS,
         FETCH_JOKES_START,
         FETCH_JOKES_FAILURE } from '../actions';

// const initialState = {
//     isLoading: false,
//     //type: "",
//     value: [{
//         id: "",
//         joke:"",
//         category:[]
//     }],
//     error:""
// }

const initialState = {
    isLoading: false,
    type:"",
    value:[],
    error:""
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_JOKES_SUCESS: 
            return {
                ...state,
                isLoading:true
            }

        case FETCH_JOKES_START:
            return{
                ...state,
                //type: action.payload,
                value: action.payload,
                isLoading:false,
                error: ""
            }

        case FETCH_JOKES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}