
import UseGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./conversation";

function Conversations() {
  const { loading, conversations } = UseGetConversations();
  // console.log(conversations, 'conversations');
  
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
    </div>
  );
}

export default Conversations;


// import Conversation from "./conversation"

// function Conversations() {
//   return (
//       <div className="py-2 flex flex-col overflow-auto">
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//       </div>
//   )
// }

// export default Conversations