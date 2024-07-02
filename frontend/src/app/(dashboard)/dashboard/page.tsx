"use client";

import { ButtonLink } from "@/components/button";
import CenteredContainer from "@/containers/centered";
import React from "react";
import { useMessage } from "@/hooks/useMessage";

export default function Dashboard() {
  const {
    meta: { total },
    unread,
    isLoading,
  } = useMessage(1);

  return (
    <CenteredContainer>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Bashir Ibrahim</h1>
        <p className="text-lg mb-6">
          {isLoading
            ? "Loading..."
            : `You have ${unread} unread message(s) out of ${total}`}
        </p>
        <ButtonLink label="View Messages" href="/inbox" />
      </div>
    </CenteredContainer>
  );
}
