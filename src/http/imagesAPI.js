import { $images} from "./index";

export const getImages = async () => {
    const {data} = await $images.get(`/images`)
    return(data)
}

export const getImageById = async (imageId) => {
    console.log("imageId в getImageById:", imageId)
    const response = await $images.get(`/image/${imageId}`);
    console.log("response.data в getImageById:", response.data)
    return response.data
}

export const createComment = async(newComment, imageId) => {
    console.log("imageId в createComment:", imageId)
    console.log("newComment в createComment:", newComment)
    const {data} = await $images.post(`/image/${imageId}`, {newComment})
    console.log("data в createComment:", data)
    return data
}