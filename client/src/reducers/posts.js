import * as actionType from "../constants/actionTypes";
//constants
export default (state={posts:[]}, action) =>{
    switch(action.type){
        case actionType.FETCH_ALL:
            return {
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
              };
        case actionType.FETCH_BY_SEARCH:
            return {...state, posts:action.payload};
        case actionType.CREATE:
            return [...state, action.payload];
        case actionType.UPDATE:
        case actionType.LIKE:
            return state.map((post) => post._id === action.payload._id ? action.payload : post);
        case actionType.DELETE:
            return state.filter((post)=> post._id !== action.payload);
        default:
            return state;
    }
}