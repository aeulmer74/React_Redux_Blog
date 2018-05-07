import axios from '../../axios-instance';


export const FETCH_ALL_POSTS = "FETCH_ALL_POSTS";
export const CREATE_POST = "CREATE_POST";
export const EDIT_POST = "EDIT_POST";
export const FETCH_ONE_POST = "FETCH_ONE_POST";
export const SET_POST = "SET_POST";

export const fetchAllPosts = (posts) => {
    return {
        type: FETCH_ALL_POSTS,
        posts: posts
    }
}

export const initPosts = () => {
    return dispatch => {
        axios.get('/posts')
            .then(response => {
                 dispatch(fetchAllPosts(response.data));
            });
    };
};

export const setOnePost = (postData) => {
    return {
        type: SET_POST,
        singlePost: postData
    }
}

export const editPost = (id, update) => {
    return dispatch => {
        axios.put('/posts/'+id, update)
    }
}

export const fetchOnePost = (id) => {
    return dispatch => {
        axios.get('/posts/'+id)
            .then(response => {
                dispatch(setOnePost(response.data))
            })
    }
}

export const createPost = (postData) => {
    return dispatch => {
        axios.post('/posts/', postData)
    }
}