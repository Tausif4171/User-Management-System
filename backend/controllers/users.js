// In controllers folder all the bussiness logic will be written like CRUD operation in this scenario

import { v4 as uuid } from 'uuid'

let users = []

export const getUsers = (req, res) => {
    res.send(users)
}

export const createUser = (req, res) => {
    const user = req.body   // payload
    users.push({ ...user, id: uuid() })
    res.send('user added successfully')
}

export const getSingleUser = (req, res) => {
    const singleUser = users.filter((user) => user.id === req.params.id)
    res.send(singleUser)
}

export const updateUser = (req, res) => {
    const user = users.find((user) => user.id === req.params.id)
    user.name = req.body.name
    user.email = req.body.email
    user.phoneNumber = req.body.phoneNumber
    res.send('user update successfully')
}

export const deleteUser = (req, res) => {
    users = users.filter((user) => user.id !== req.params.id)
    res.send('user deleted successfully')
}