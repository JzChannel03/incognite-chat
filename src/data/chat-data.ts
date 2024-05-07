import { v4 as uuidv4 } from "uuid";
import { ChatProps } from "../interfaces/chat.interface";

const names = [
  "Jose Ventura",
  "Ana María",
  "Luis Fernández",
  "Marta Solís",
  "Carlos Pérez",
  "Sofía Castro",
  "Ricardo Vargas",
  "Fernanda Jiménez",
  "Mario Ruiz",
  "Lucía Méndez",
];

const messages = [
  "Hola, ¿cómo estás?",
  "¿Te veo mañana?",
  "¿Recibiste el archivo?",
  "¡Feliz cumpleaños!",
  "¿Quieres salir esta noche?",
  "¿Todo bien en casa?",
  "Te llamo más tarde",
  "Gracias por tu ayuda",
  "¿Vamos al cine?",
  "Nos vemos pronto",
];

function getRandomElement(array: string[]) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateUniqueUsername(
  name: string,
  existingUsernames: Set<string>
): string {
  const baseUsername = name.split(" ")[0].toLowerCase();
  let username = baseUsername;
  let suffix = 1;

  // Append a unique number suffix to the base username until it becomes unique
  while (existingUsernames.has(username)) {
    username = `${baseUsername}${suffix}`;
    suffix++;
  }

  return username;
}

export function generateChatData(): ChatProps[] {
  const uniqueUsernames = new Set<string>();
  const chatData: ChatProps[] = [];

  for (let i = 0; i < 20; i++) {
    const name = getRandomElement(names);
    const message = getRandomElement(messages);
    const userName = generateUniqueUsername(name, uniqueUsernames);

    chatData.push({
      id: uuidv4(),
      name,
      message,
      unreadCount: Math.floor(Math.random() * 20),
      lastMessageTime: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      userName,
    });

    uniqueUsernames.add(userName);
  }

  return chatData;
}
