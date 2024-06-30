import { Message } from "@/types";
import { create } from "zustand";

type StoreProps = {
  mails: Array<Message>;
  setMails: (data: Array<Message>) => void;
  unread: number;
  setUnread: () => void;
};

export const useStore = create<StoreProps>((set) => ({
  mails: [],
  unread: 0,
  setUnread: () =>
    set((state: any) => ({
      unread: state.mails.filter((mail: Message) => !mail.isRead).length,
    })),
  setMails: (newMails: Array<Message>) => set({ mails: newMails }),
}));
