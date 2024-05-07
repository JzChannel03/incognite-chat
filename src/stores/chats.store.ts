import { create } from "zustand";
import { ChatProps } from "../interfaces/chat.interface";
import { persist } from "zustand/middleware";

interface ChatStoreProps {
  chats: ChatProps[];
  setChats: (chats: ChatProps[]) => void;
  getChatById: (id: string) => ChatProps | undefined;
}

export const chatStore = create<ChatStoreProps>()(
  persist(
    (set, get) => ({
      chats: [] as ChatProps[],
      setChats: (chats: ChatProps[]) => set({ chats }),
      getChatById: (id: string) => {
        return get().chats.find((chat) => chat.id === id);
      },
    }),
    { name: "chat-storage" }
  )
);
