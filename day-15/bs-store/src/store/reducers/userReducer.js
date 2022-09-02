import { SET_USER } from "../actions/userActions";
import {user} from "../initials/userItems";

const init = {
    user
}
export default function userReducer(state=init, {type,payload}){
    switch (type) {
        case SET_USER:
            return{
                ...state,
                user: {
                    ...payload
                }
            }
        default:
            return{
                ...state
            }
    }
}