import { useAuthContext } from "../../context/authContext"
import { extractTime } from "../../utils/extractTime"
import UseConversation from "../../zustand/useConversation"

function Message({message}) {
  console.log(message,'Message in co');
   const {authUser}= useAuthContext()
   const {selectedConversation}=UseConversation()
   const fromMe =message.senderId===authUser._id || message?.newMessage?.senderId===authUser._id;
   console.log(fromMe,'fromMe');
   const chatClassName =fromMe ? 'chat-end ' : 'chat-start' ;
   const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
   const formattedTime =extractTime(message.createdAt||message?.newMessage?.createdAt);
   const bubbleBgColor =fromMe ? 'bg-blue-500': "";
   const shakeClass =message.shouldShake? "shake" : ""
  return (
    <div className={`chat ${chatClassName}`}>
    <div className="chat-image avatar">
        <div className="w-10 rounded-full ">
        <img 
        src={profilePic} 
        alt="Tailwind CSS chat bubble component" />
        </div>
    </div>
    <div className={`chat-bubble text-white pb-2 ${bubbleBgColor} ${shakeClass}`}>
      {message?.newMessage?.message ||message.message}
    </div>
    <div className="chat-footer opacity-9 text-xs flex gap-1 items-center">{formattedTime}</div>
    </div>
  )
}

export default Message



// function Message() {
//   return (
//     <div className="chat chat-end">Message
//     <div className="chat-image avatar">
//         <div className="w-10 rounded-full bg-slate-900">
//         <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="user avathar" />
//         </div>
//     </div>
//     <div className={`chat-bubble text-white bg-blue-500`}>
//        HI ! how are you doing
//     </div>
//     <div className="chat-footer opacity-9 text-xs flex gap-1 items-center">12:42</div>
//     </div>
//   )
// }

// export default Message