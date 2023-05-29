// In controllers folder all the bussiness logic will be written like CRUD operation in this scenario

import { v4 as uuid } from 'uuid'

let users = [{name:'john'}]

export const getUsers = (req, res) => {
    res.send(users)
}

export const createUser = (req, res) => {
    const user = req.body
    users.push({ ...user, id: uuid() })
    res.send('user added successfully')
}