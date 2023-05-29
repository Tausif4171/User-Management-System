import express from 'express'
import { createUser, deleteUser, getSingleUser, getUsers, updateUser } from '../controllers/users.js'

const router = express.Router()

router.get('/users', getUsers)
router.post('/user', createUser)
router.get('/user/:id', getSingleUser)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)

export default router