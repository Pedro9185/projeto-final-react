const express = require ("express");
const router = express.Router();

const {
    requireAuth,
    requireRole,
    requireSelfUserOrRoles
} = require('../middleware/auth');

const { 
    getAllUsersHandler,
    getUserByIdHandler,
    createUserHandler,
    updateUserHandler,
    deleteUserHandler
} = require('../controllers/Usercontrollers');

router.get('/', getAllUsersHandler);
router.get('/:id', requireAuth,getUserByIdHandler);
router.post('/', requireRole,createUserHandler);
router.put('/:id', updateUserHandler);
router.delete('/:id', deleteUserHandler);

module.exports = router;
