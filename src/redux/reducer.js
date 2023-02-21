import axios from 'axios';

const GET_GREETINGS = 'GET_GREETINGS';
const API = '/api/v1/greetings';

export const getGreeting = (payload) => (
  {
    type: GET_GREETINGS,
    payload,
  }
);

export const fetchGreetingsFromApi = () => async (dispatch) => {
  axios.get(API).then((response) => {
    const greeting = response.data;
    dispatch(getGreeting(greeting));
  });
};

const greetingReducer = (state = [], action) => {
  switch (action.type) {
    case GET_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};
export default greetingReducer;
