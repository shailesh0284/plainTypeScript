'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.AppController = void 0
var express_1 = require('express')
var app_service_1 = require('./app.service')
var router = (0, express_1.Router)()
router.get('/', function (req, res) {
  var app = new app_service_1.appService()
  res.send(app.getAllData())
})
router.post('/', function (req, res) {
  var app = new app_service_1.appService()
  res.send(app.postData(req.body))
})
exports.AppController = router
