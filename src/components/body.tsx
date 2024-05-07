import { Link } from "react-router-dom";
import ChatItem from "./chat-list-item";
import { chatStore } from "../stores/chats.store";

export default function Body() {
  const chats = chatStore((state) => state.chats);
  return (
    <section className="bg-white px-4 py-2 overflow-y-scroll rounded-t-3xl">
      {chats.map((chat, index) => (
        <Link key={chat.name + index} to={`/chat/${chat.id}`}>
          <ChatItem {...chat} />
        </Link>
      ))}
    </section>
  );
}
