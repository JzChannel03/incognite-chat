import { create } from "zustand";

export const userStore = create((set) => ({
  name: "",
  lastname: "",
  logo: "https://avatars.dicebear.com/api/avataaars/1.svg",
  user: "",
  setFullName: (name: string, lastname: string) => set({ name, lastname }),
}));
