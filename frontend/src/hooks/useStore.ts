import { Message, PageMetaData } from "@/types";

import { create } from "zustand";

export type StoreProps = {
  user: string;
  setUser: (userame: string) => void;

  mails: Array<Message>;
  setMails: (data: Array<Message>) => void;

  unread: number;
  setUnread: (totalUnread: number) => void;

  meta: PageMetaData;
  setMeta: (metaData: PageMetaData) => void;
};

export const useStore = create<StoreProps>((set) => ({
  user: "",
  mails: [],
  unread: 0,
  meta: {} as PageMetaData,
  setUnread: (totalUnread: number) =>
    set(() => ({
      unread: totalUnread,
    })),
  setMails: (newMails: Array<Message>) => set({ mails: newMails }),
  setMeta: (metaData: PageMetaData) => set({ meta: metaData }),
  setUser: (username: string) => set({ user: username }),
}));
