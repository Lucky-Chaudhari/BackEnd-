const express= require("express");
const router = express.Router();


//Import Controller

const { dummyLike } = require("../controllers/likeController")



//Mapping Create
router.get("/dummyrouter",dummyLike);



//Export

module.exports = router;