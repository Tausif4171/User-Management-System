import express from 'express'
import { createUser, getUsers } from '../controllers/users'

const router = express.Router()

router.get('/users', getUsers)
router.post('/user', createUser)