import { v4 as uuidv4 } from "uuid";

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

export function generateChatData() {
  return Array.from({ length: 20 }, () => ({
    id: uuidv4(),
    name: getRandomElement(names),
    message: getRandomElement(messages),
    unreadCount: Math.floor(Math.random() * 10), // Random count from 0 to 9
    lastMessageTime: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }), // Current time
  }));
}
