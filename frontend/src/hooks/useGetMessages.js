import { useEffect, useState } from "react"
import UseConversation from "../zustand/useConversation"
import toast from "react-hot-toast"

const useGetMessages = () => {
    const [loading,setLoading]=useState(false)
    const {messages,setMessages,selectedConversation}=UseConversation()

    useEffect(()=>{
       const GetMessages=async()=>{
        setLoading(true)
          try {
              const res =await fetch(`/api/message/${selectedConversation._id}`)
              const data =await res.json()
              if(data.error)throw new Error(data.error)
                setMessages(data)
          } catch (error) {
            toast.error(error.messages)
          }finally{
            setLoading(false)
          }
       }  
     if(selectedConversation?._id) GetMessages()     
       
     },[selectedConversation?._id,setMessages])
     return {messages,loading}
}

export default useGetMessages
