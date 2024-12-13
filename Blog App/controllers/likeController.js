

//import models

const Like = require("../models/likeModel");
const Post = require("../models/postModel");

//Like a Post

exports.likePost = async (req,res) => {
  try {
    const {post, user}=req.body
    const like = new Like({
      post, user,
    });
    const savedLike=like.save();

    //update   the post collection basis on this
    const updatedPost = await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true}).populate("likes").exec();

     res.json({
      post:updatedPost
     })
  } catch (error) {
return res.status(400).json({
   error:"Error while liking post",
});
  }
}
// Unlike a Post

exports.unlikePost = async(req,res) =>{

try {

  const{post, like}=req.body;
  //find and delete the collection me se
  const deletedLike = await Loke.findOneAndDelete({post:post, _id:like});

  //update the post collection
  const updatedPost= await Post.find.findOneAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true})

} catch (error) {
  return res.status(400).json({
    error:"Error while Unliking post",
 });
}

};
