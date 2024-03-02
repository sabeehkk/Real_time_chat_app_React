import User from "../models/user.model.js";

export const getUsersForSidebar=async(req,res)=>{
    try {
        const loggedInUserId = req.user._id;
        console.log(loggedInUserId,'logged in user');
        const filteredUsers =await User.find({_id:{$ne:loggedInUserId}}).select("-password")
        console.log(filteredUsers,'filteredUsers');
        res.status(200).json(filteredUsers)
    } catch (error) {
        console.log(error.message,'erro in getUsersForSidebar');
        res.status(500).json({error:"internal server error"});
    }
}