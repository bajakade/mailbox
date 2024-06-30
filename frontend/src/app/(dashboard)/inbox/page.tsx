"use client";

import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import { fetchAllEmails } from "@/utils";
import { formatDate } from "@/utils/helpers";
import { useQuery } from "@tanstack/react-query";

export default function Inbox() {
  const { data } = useQuery({
    queryKey: ["mails"],
    queryFn: () => fetchAllEmails(),
  });

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Link
        className="flex items-center text-gray-800 hover:text-gray-700 mb-4"
        href="/dashboard"
      >
        <FaArrowLeft size={24} className="mr-2" />
      </Link>

      <div className="rounded-lg p-4 bg-blue-200 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
        <h1 className="text-3xl font-bold mb-4 mt-4">Messages</h1>
        <ul className="divide-y divide-gray-200">
          {data?.map((email) => (
            <Link href={`/inbox/${email.id}`} key={email.id}>
              <li className="flex justify-between items-center p-4 hover:bg-gray-100 cursor-pointer">
                <div>
                  <h2 className={`text-lg ${!email.isRead && "font-semibold"}`}>
                    {email.subject}
                  </h2>
                  <p className="text-sm">{`${email.content.substring(0, 10)}...`}</p>
                </div>
                <div className={`text-sm ${email.isRead && "text-gray-500"}`}>
                  {formatDate(email.createdAt)}
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
