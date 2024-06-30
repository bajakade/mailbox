import { Message } from "@/types";
import { create } from "zustand";

export type StoreProps = {
  mails: Array<Message>;
  setMails: (data: Array<Message>) => void;
  unread: number;
  setUnread: (data: Array<Message>) => void;
};

export const useStore = create<StoreProps>((set) => ({
  mails: [],
  unread: 0,
  setUnread: (unreadMessages: Array<Message>) =>
    set(() => ({
      unread: unreadMessages.length,
    })),
  setMails: (newMails: Array<Message>) => set({ mails: newMails }),
}));
