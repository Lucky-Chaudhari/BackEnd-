const express= require("express");
const router = express.Router();


//Import Controller

const { dummyLike } = require("../controllers/likeController")
const {createComment} = require("../controllers/commentController")

//Mapping Create
router.get("/dummyrouter",dummyLike);
router.post("comments/create",createComment);



//Export

module.exports = router;