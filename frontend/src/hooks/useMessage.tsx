import { StoreProps, useStore } from "./useStore";

import React from "react";
import { fetchAllEmails } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export const useMessage = () => {
  const { mails, unread, setMails, setUnread } = useStore<StoreProps>(
    (state: any) => state,
  );

  const { data } = useQuery({
    queryKey: ["mails"],
    queryFn: () => fetchAllEmails(),
  });

  React.useEffect(() => {
    if (data && Array.isArray(data)) {
      setMails(data);
      setUnread(data.filter((mail) => !mail.isRead));
    }
  }, [data]);

  return { all: mails, unread };
};
