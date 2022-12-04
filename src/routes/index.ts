import { Router } from 'express'
import router from './socket/socket'

// router imports
import socketRouter from './socket/socket'

// router use
router.use('/socket', socketRouter)

//export router
export default router;