import { useParams } from "react-router-dom";
import { chatStore } from "../stores/chats.store";

const ChatDetails = () => {
  const getChatByUser = chatStore((state) => state.getChatByUser);
  const { userName } = useParams() as { userName: string };
  const chat = getChatByUser(userName);

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
