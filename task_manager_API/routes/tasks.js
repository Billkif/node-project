const express = require('express')
const router = express.Router()
const { getAllTasks, createTask, getTask, updateTask, DeleteTask } = require('../controllers/tasks')


router.route('/').get(getAllTasks)
router.route('/').post(createTask)
router.route('/:id').get(getTask)
router.route('/:id').patch(updateTask)
router.route('/:id').delete(DeleteTask)

// router.route('/').get(getAllItems).post(AddAnItem)


module.exports = router