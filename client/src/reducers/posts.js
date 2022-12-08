export default (posts=[], action) =>{
    switch(action.type){
        case "FECTCH_ALL":
            return posts;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}