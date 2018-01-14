import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index';

export default function(state = {}, action) {
    switch(action.type) {
        case DELETE_POST:
            // When we hit delete button and programmaticaly navigate
            // to index we do not get the deleted post as fetched 
            return _.omit(state, action.payload);

        case FETCH_POST:
            // This is somewhat ES5 syntax
            // const post = action.payload.data;
            // const newState = { ...state };
            // newState[post.id] = post;
            // return newState;

            // This is ES6 one-liner but completetly identical to the ES5 solution
            return { ...state, [action.payload.data.id]: action.payload.data };
            
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');

        default:
            return state;
    }
}