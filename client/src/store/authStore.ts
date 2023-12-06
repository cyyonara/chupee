import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface Auth {
  userId: number;
  firstName: string;
  lastName: string;
  username: string;
}

interface IAuthStore {
  auth: Auth | null;
  setCredential: (credential: Auth) => void;
  clearCredential: () => void;
}

export const useAuthStore = create<IAuthStore>()(
  devtools(
    persist(
      (set) => ({
        auth: null,
        setCredential: (credential) => set({ auth: credential }),
        clearCredential: () => {
          set({ auth: null });
        },
      }),
      { name: "chupee_auth" }
    )
  )
);
