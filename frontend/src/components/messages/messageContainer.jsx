import MessageInput from "./messageInput";
import Messages from "./messages"
import { TiMessages } from "react-icons/ti";
function MessageContainer() {
    const noChatSelected=true
  return (
    <div className="md:min-w-[450px] flex flex-col">MessageContainer
     {noChatSelected? <NoChatSelected/>:(
         <>
         {/* {header} */}
         <div className="bg-slate-500 px-4 py-2 mb-2">
           <span className="label-text ">To:</span>{" "}
           <span className="text-gray-900 font-bold">Sabeeeh kayanikkal</span>
         </div>
           <Messages/>
           <MessageInput/>
       </>
     )}
    </div>
  )
}

export default MessageContainer

const NoChatSelected=()=>{
    return(
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>welcome sabeeh !!!</p>
                <p>select a chat to start messaging</p>
                <TiMessages className="text-3xl md:text-6xl text-center"/>
            </div>
        </div>
    )
}

// import Messages from "./messages"

// function MessageContainer() {
//   return (
//     <div className="md:min-w-[450px] flex flex-col">MessageContainer
//     <>
//       {/* {header} */}
//       <div className="bg-slate-500 px-4 py-2 mb-2">
//         <span className="label-text ">To:</span>{" "}
//         <span className="text-gray-900 font-bold">Sabeeeh kayanikkal</span>
//       </div>
//         <Messages/>
//     </>
//     </div>
//   )
// }

// export default MessageContainer