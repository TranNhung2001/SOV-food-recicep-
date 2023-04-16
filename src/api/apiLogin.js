import axios from "axios"
import { API_ENDPOINT, GET_TREE_BY_ID } from "./constant"
import users from '../data/user.json'


export const getUsers = () => {
    return users;
}