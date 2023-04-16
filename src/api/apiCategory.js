import axios from "axios"
import { API_ENDPOINT, GET_TREE_BY_ID } from "./constant"
import categories from '../data/category.json'

export const getCategories = () => {
    // return axios.get(API_ENDPOINT + GET_TREE_BY_ID
    // })
    return categories
}
