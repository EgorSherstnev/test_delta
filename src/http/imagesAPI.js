import { $images} from "./index";

export const getImages = async () => {
    const {data} = await $images.get(`/images`)
    return(data)
}