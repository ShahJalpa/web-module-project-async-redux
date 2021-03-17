import axios from 'axios';

//async action creator
export const FETCH_JOKES_SUCESS = "FETCH_JOKES_SUCESS";
export const FETCH_JOKES_START = "FETCH_JOKES_START";
export const FETCH_JOKES_FAILURE = "FETCH_JOKES_FAILURE";

export const fetchJokesData = () => {
    return (dispatch) => {
        dispatch({type: FETCH_JOKES_SUCESS});

        axios
          .get('http://api.icndb.com/jokes/random')
          .then((response) => {
              console.log(response);
              dispatch({type: FETCH_JOKES_START, payload: response.data.value.joke})
          })
          .catch((error) => {
              console.log(error.message);
              dispatch({type: FETCH_JOKES_FAILURE, payload: error.message});
          })
    }
}