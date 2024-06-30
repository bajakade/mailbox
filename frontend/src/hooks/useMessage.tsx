import { StoreProps, useStore } from "./useStore";
import { countUnread, fetchAllEmails } from "@/utils";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { PageMetaData } from "@/types";
import React from "react";

export const useMessage = (page: number) => {
  const { meta, unread, mails, setMails, setUnread, setMeta, setUser } =
    useStore<StoreProps>((state: any) => state);

  const { data, isLoading } = useQuery({
    queryKey: ["mails", page],
    queryFn: () => fetchAllEmails(page),
    placeholderData: keepPreviousData,
  });

  const {
    data: { totalUnread, user },
  } = useQuery({
    queryKey: ["mails", "unread"],
    queryFn: () => countUnread(),
  });

  React.useEffect(() => {
    if (data?.data && Array.isArray(data.data)) {
      setMails(data.data);

      setMeta(data.meta);
    }
    return () => {
      setMails([]);
      setMeta({} as PageMetaData);
    };
  }, [data]);

  React.useEffect(() => {
    totalUnread && setUnread(totalUnread);
    user && setUser(user);
  }, [totalUnread]);

  return { meta, mails, unread, isLoading, user };
};
