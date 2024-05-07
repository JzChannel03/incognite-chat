import { Outlet } from "react-router-dom";
import { chatStore } from "./stores/chats.store";
import { generateChatData } from "./data/chat-data";
import { useEffect } from "react";

function App() {
  const setChats = chatStore((state) => state.setChats);
  useEffect(() => {
    setChats(generateChatData());
  }, []);

  return (
    <main className="bg-blue-gradient w-screen h-screen overflow-hidden">
      <Outlet />
    </main>
  );
}

export default App;
