//import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");



 //bussinesss Logic

 exports.createComment = async(req,res)=>{
 try {
     //fetch  data from req body
     const {post,user,body}=req.body;

     //create a Comment Object
     const comment = new Comment({
       post,user,body
     });

     //save the Object into the databade
     const savedComment = await comment.save();

     //find the post by Id , add the new Comment to its comments array
     const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})

                   .populate("comments")//populate the comments array with comment documents
                     .exec();

       res.json({
         post:updatedPost,
       }) ;
 }
   catch (error) {
       return res.status(500).json({
         error:"Error While Creating Comment",
       })
   }
 }