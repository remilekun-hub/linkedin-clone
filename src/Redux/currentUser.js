const LOGGED_IN = "LOGGED_iN"
const LOGGED_OUT = "LOGGED_OUT"

export function login(id, name, email, photourl) {
    return {
        type: LOGGED_IN,
        payload: {
            user: {
                id: id,
                name: name,
                email: email,
                photourl: photourl
            }
        }
    }
}

export function logout() {
    return {
        type: LOGGED_OUT,
        payload: {
            user: null
        }
    }

}

const user = {
   user: null
}

export function userreducer (state = user, action) {
    switch(action.type) {
        case LOGGED_IN:
            return {
                ...state,
                user: {
                    id:action.payload.user.id,
                    name: action.payload.user.name,
                    email: action.payload.user.email,
                    photourl: action.payload.user.photourl
                }
               
                
            }
        case LOGGED_OUT:
            return {
                ...state,
                user: action.payload.user
            }
        default:
            return state
    }
}