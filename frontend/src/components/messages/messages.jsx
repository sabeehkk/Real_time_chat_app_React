import Message from "./message"
import MessageInput from "./messageInput"

function Messages() {
  return (
    <div className="px-4 flex-1 overflow-auto">
        <Message/>
      <MessageInput/>
    </div>
  )
}

export default Messages


// import Message from "./message"
// import MessageInput from "./messageInput"

// function Messages() {
//   return (
//     <div className="px-4 flex-1 overflow-auto">
//         <Message/>
//       <MessageInput/>
//     </div>
//   )
// }

// export default Messages