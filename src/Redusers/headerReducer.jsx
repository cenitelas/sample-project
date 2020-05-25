import {GET_IMAGES} from "../Actions/headerActions";

const prevState = {
    images: []
}

export const images = (state = prevState.images, action)=> {
    switch (action.type) {
        case GET_IMAGES:
            return action.obj;
        default:
            return state;
    }
}
