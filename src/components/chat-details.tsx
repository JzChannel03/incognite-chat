import { useParams } from "react-router-dom";
import { chatStore } from "../stores/chats.store";

const ChatDetails = () => {
  const getChatById = chatStore((state) => state.getChatById);
  const { id } = useParams() as { id: string };
  console.log(id);
  const chat = getChatById(id);
  console.log(chat);
  return (
    <div>
      {chat ? (
        <>
          <h1>{chat?.name}</h1>
          <p>{chat?.message}</p>
        </>
      ) : (
        <div>No se ha encontrado el chat.</div>
      )}
    </div>
  );
};

export default ChatDetails;
