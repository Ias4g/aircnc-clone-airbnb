const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const SessionController = require('./controllers/SessionController')
const SpotsController = require('./controllers/SpotsController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')
const BookingControler = require('./controllers/BookingController')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store)

routes.get('/spots', SpotsController.index)
routes.post('/spots', upload.single('thumbnail'), SpotsController.store)

routes.get('/dashboard', DashboardController.show)

routes.post('/spots/:spot_id/bookings', BookingControler.store)

module.exports = routes