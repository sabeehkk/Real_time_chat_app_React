import MessageContainer from "../../components/messages/messageContainer"
import SearchInput from "../../components/sidebar/searchInput"
import Sidebar from "../../components/sidebar/sidebar"

function Home() {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
    <Sidebar/>
    <MessageContainer/>
    {/* <Mr */}
    </div>
  )
}

export default Home