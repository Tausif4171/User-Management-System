// In controllers folder all the bussiness logic will be written like CRUD operation in this scenario

import { v4 as uuid } from 'uuid'

let users = []

export const getUsers = (req, res) => {
    res.send(users)
}