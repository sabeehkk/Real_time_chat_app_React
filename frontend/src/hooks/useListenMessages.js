import { useEffect } from "react"
import { useSocketContext } from "../context/socketContext"
import UseConversation from "../zustand/useConversation"
import notificationSound from "../assets/sounds/notification.mp3"
const useListenMessages = () => {
  const {socket} =useSocketContext()
  const {messages,setMessages}=UseConversation()

  useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
        newMessage.shouldShake=true
        const sound=new Audio( notificationSound)
        sound.play()
         setMessages([...messages,newMessage])
    })
    return ()=> socket?.off("newMessage")
  },[socket,setMessages,messages])
}

export default useListenMessages