import { Avatar } from "@nextui-org/react";
import { ChatProps } from "../interfaces/chat.interface";

export default function ChatItem({
  name,
  message,
  unreadCount,
  lastMessageTime,
}: Readonly<ChatProps>) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <div className="flex flex-row items-center gap-1 border-b-1 border-solid border-gray-200">
      <Avatar name={initials} className="w-12 aspect-square" />
      <div className="flex flex-col gap-1 p-3 w-full">
        <div className="w-full flex flex-row items-center align-middle justify-between">
          <h4>{name}</h4>
          <span className="text-sm text-gray-500">{lastMessageTime}</span>
        </div>
        <div className="w-full flex flex-row items-center align-middle justify-between">
          <span className="text-sm text-gray-400">{message}</span>
          <span className="text-sm bg-blue-200 rounded-2xl px-2">
            {unreadCount}
          </span>
        </div>
      </div>
    </div>
  );
}
