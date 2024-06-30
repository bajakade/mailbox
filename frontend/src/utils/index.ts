"use server";

import { Message, PaginatedResult } from "@/types";

import { apiServer } from "@/constants";

export async function fetchAllEmails(
  page = 1,
): Promise<PaginatedResult<Message>> {
  const url = `${apiServer}/v1/mails?page=${page}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function readEmail(id: string) {
  const res = await fetch(`${apiServer}/v1/mails/${id}`, { method: "PATCH" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function countUnread() {
  const res = await fetch(`${apiServer}/v1/mails/unread/count`);
  return res.json();
}
