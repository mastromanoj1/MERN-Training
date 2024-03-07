import  express  from 'express'

import { v4 as uuidv4 } from 'uuid';
import  { getAllUser, getOneUser, postCreateUser } from '../controllers/Usercontroller.js';

const router = express.Router()
router.get('/', getAllUser)

router.get('/read/:id',getOneUser)

router.post('/create',postCreateUser)

export default  router;