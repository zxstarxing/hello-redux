import { INCREMENT, DECREMENT,FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_FAILURE,LOAD_USER } from '../constants';
import Axios from 'axios';
export const increment = (dispatch) => {
    return dispatch =>{
        setTimeout(()=>{
            dispatch({
                type:INCREMENT
            })
        },2000);
    }
}
export const decrement = () => ({
    type: DECREMENT
})

export const get_user =(dispatch)=>{
    // return dispatch=>{
    //     dispatch(fetch_user_request());
    //     Axios.get('https://randomuser.me/api/')
    //         .then(res=>{
    //             dispatch(fetch_user(res.data.results[0]));
    //         }).catch(error=>{
    //             dispatch(fetch_user_failure(error));
    //         })
    // }
    return{
        type:LOAD_USER,
        payload:Axios.get('https://randomuser.me/api/')
    }
}


export const fetch_user_request =()=>({
    type:FETCH_USER_REQUEST
})


export const fetch_user = (user) => ({
    type: FETCH_USER_SUCCESS,
    user
})

export const fetch_user_failure=(error)=>({
    type:FETCH_USER_FAILURE,
    error
})




