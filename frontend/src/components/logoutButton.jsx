import { CgLogOut } from "react-icons/cg";
import useLogout from "../hooks/useLogout";
function LogoutButton() {
  const {loading,logout}=useLogout()
  return (
    <div className="mt-auto">
        <CgLogOut className="w-6 h-6 text-white cursor-pointer"/>
    </div>
  )
}

export default LogoutButton