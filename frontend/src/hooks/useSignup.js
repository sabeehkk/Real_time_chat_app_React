import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/authContext"

const UseSignup = () => {
    const [loading,setLoading]=useState(false)
    const {authUser,setAuthUser } = useAuthContext()
    const signup =async({fullName,userName,password,confirmPassword,gender})=>{
    const success = handleInputErrors({fullName,userName,password,confirmPassword,gender})
            if(!success) return
            setLoading(true)
            try {
                const res = await fetch("/api/auth/signup",{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify({fullName,userName,password,confirmPassword,gender})
                })
                const data = await res.json()
                if(data.error){
                    throw new Error(data.error)
                }
                //localstorage
                localStorage.setItem("chat-user",JSON.stringify(data))
                //context
                setAuthUser(data)
                console.log(data);
            } catch (error) {
                toast.error(error.message)
            }finally{
                setLoading(false)
            }
    }
    return {loading,signup}
}

export default UseSignup

function handleInputErrors({fullName,userName,password,confirmPassword,gender}){
    if(!fullName || !userName || !password || !confirmPassword|| !gender){
        toast.error("please fill all field")
    }
    if(password !==confirmPassword){
        toast.error("passwords do not match")
        return false
    }
    if(password.length < 6){
        toast.error("password must be at least 6 characters")
        return false
    }
    return true
}