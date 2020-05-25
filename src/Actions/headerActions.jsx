export const GET_IMAGES = "GET_IMAGES"

export const getImages = (limit) => {
    return dispatch => {
        return  fetch(`https://picsum.photos/v2/list?page=2&limit=${limit}`, {
            method: "get",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                dispatch(getImagesSuccess(data));
            })
    }
}

export const getImagesSuccess = images => ({
    type: GET_IMAGES,
    obj: images
})