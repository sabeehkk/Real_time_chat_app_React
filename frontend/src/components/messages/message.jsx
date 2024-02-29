
function Message() {
  return (
    <div className="chat chat-end">Message
    <div className="chat-image avatar">
        <div className="w-10 rounded-full bg-slate-900">
        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="user avathar" />
        </div>
    </div>
    <div className={`chat-bubble text-white bg-blue-500`}>
       HI ! how are you doing
    </div>
    <div className="chat-footer opacity-9 text-xs flex gap-1 items-center">12:42</div>
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