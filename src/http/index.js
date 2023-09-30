import axios from "axios";
import DELTA_API from "../utils/consts";

const $images = axios.create({
    baseURL: DELTA_API
})


export {
    $images
}