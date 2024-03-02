import { useState } from "react";
import { LuSendHorizonal } from "react-icons/lu";
import UseSendMessage from "../../hooks/useSendMessage";
function MessageInput() {
    const [message,setMessage]=useState("")
    const {loading,sendMessage}= UseSendMessage()
  const handleSubmit=async(e)=>{
      e.preventDefault()
      if(!message)return ;
      await sendMessage(message)
      setMessage("")
  }
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input type="text"  className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-b-gray-600 text-white" placeholder="Send a message"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
        />
            <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
              {loading?<span className="loading loading-spinner"></span>:<LuSendHorizonal/>}
            </button>
      </div>
    </form>
  )
}

export default MessageInput


// import { LuSendHorizonal } from "react-icons/lu";
// function MessageInput() {
//   return (
//     <form className="px-4 my-3">MessageInput
//       <div className="w-full relative">
//         <input type="text"  className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-b-gray-600 text-white" placeholder="Send a message"/>
//             <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3"><LuSendHorizonal/></button>
//       </div>
//     </form>
//   )
// }

// export default MessageInput