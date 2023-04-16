import axios from "axios"
import { API_ENDPOINT, GET_TREE_BY_ID } from "./constant"
import recipes from '../data/food.json'


export const getNewRecipe = () => {
    // return axios.get(API_ENDPOINT + GET_TREE_BY_ID
    // })
    return recipes
}