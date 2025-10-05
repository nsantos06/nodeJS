const { Router } = new require("express");
const routes = new Router();

const costumers = require("./app/controllers/CustomersController");

routes.get("/customers", customers.index);
routes.get("/customers/:id", customers.show);
routes.post("/customers", customers.create);
routes.put("/customers/:id", customers.update);
routes.delete("/customers/:id", customers.delete);

module.exports = routes; 