import * as actionType from "../constants/actionTypes";
//constants
export default (posts=[], action) =>{
    switch(action.type){
        case actionType.FETCH_ALL:
            return action.payload;
        case actionType.CREATE:
            return [...posts, action.payload];
        case actionType.UPDATE:
        case actionType.LIKE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case actionType.DELETE:
            return posts.filter((post)=> post._id !== action.payload);
        default:
            return posts;
    }
}