const router = require("express").Router();
const userRoutes = require("./api/user-routes");
const thoughtRoutes = require("./api/thought-routes");

router.use("/users", user-routes);
router.use("/thoughts", thought-routes);

module.exports = router;
