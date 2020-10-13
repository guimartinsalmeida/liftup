const express = require ('express')
const CompanyController = require("./controlles/CompanyController")
const IncidentsController = require("./controlles/IncidentController")
const ProfileController = require("./controlles/ProfileController")
const SessionController = require("./controlles/SessionController")

const routes = express.Router()

routes.post("/sessions", SessionController.create)

routes.get("/company", CompanyController.index)
routes.post('/company', CompanyController.create)

routes.get("/profile", ProfileController.index)

routes.get("/incidents", IncidentsController.index)
routes.post("/incidents", IncidentsController.create)
routes.delete("/incidents/:id", IncidentsController.delete)




module.exports = routes