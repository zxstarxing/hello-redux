import { INCREMENT, DECREMENT } from '../constants';
export const increment = (object) => ({
    type: INCREMENT,
    object
})
export const decrement = () => ({
    type: DECREMENT
})