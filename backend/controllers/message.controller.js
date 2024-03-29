import Conversation from '../models/conversation.model.js'
import Message from '../models/message.model.js'
import { getRecieverSocketId, io } from '../socket/socket.js';
export  const sendMessage=async (req, res, next) => {
    try {
        console.log(req.body,'inside sendMessage');
       const {message}=req.body;
       const {id:recieverId}=req.params;
       const senderId=req.user._id;

    let conversation= await Conversation.findOne({ 
         participants:{$all:[senderId,recieverId]}
       })
       if(!conversation){
        conversation=await Conversation.create({
            participants:[senderId,recieverId], 
        })
    }
        const newMessage = new Message({
            senderId,
            recieverId,
            message
        })
        if(newMessage){
            conversation.messages.push(newMessage._id) 
        }
       
        await Promise.all([conversation.save(),newMessage.save()])
        //SOCKET FUNCTIONALITIES GOING HERE
        const recieiverSocketId = getRecieverSocketId(recieverId)
        if(recieiverSocketId){
            //io.to(<socket_id>).emit() used to send events to specific clients
            io.to(recieiverSocketId).emit("newMessage",newMessage)
        }
        res.status(201).json({newMessage})
    } catch (error) {
        console.log('error in send message',error.message);
        res.status(500).json({error:"internal server error"})
    }
} 

export const getMessages=async(req,res)=>{
    try {
          const {id:userToChatId}=req.params
          const senderId =req.user._id
          const conversation=await Conversation.findOne({participants:{$all:[senderId,userToChatId] },
        }).populate("messages")
        if(!conversation)return res.status(200).json([]);
        const messages =conversation.messages
        console.log(messages,'messs');
        res.status(200).json(conversation.messages)

        } catch (error) {
        console.log(error.message,'bug in getMessages');
        res.status(500).json({error:'internal server error'})
    }
}