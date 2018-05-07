import * as actionTypes from '../actions/actionTypes';

const initialState = {
    posts: [],
    singlePost: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.FETCH_ALL_POSTS:
            return{
                ...state,
                posts: [...action.posts]
            }
        
        case actionTypes.CREATE_POST:
            return {
                ...state
            }

        case actionTypes.SET_POST:
            return {
                ...state,
                singlePost: {...action.singlePost}
            }
        
        case actionTypes.EDIT_POST:
            return {
                ...state
            }
        default:
            return{
                ...state
            }
    }
}

export default reducer;

