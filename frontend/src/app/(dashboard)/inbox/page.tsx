"use client";

import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { Pager } from "@/components/pager";
import React from "react";
import { formatDate } from "@/utils/helpers";
import { useMessage } from "@/hooks/useMessage";
import { useStore } from "@/hooks/useStore";

export default function Inbox() {
  const [page, setPage] = React.useState(1);
  const {
    meta: { total, perPage, currentPage },
  } = useStore();
  const { mails } = useMessage(page);

  const handlePageChange = async (page: number) => {
    setPage(page);
  };

  React.useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

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
        {total === 0 ? (
          <p className="text-red-800">You have no message </p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {mails?.map((email) => (
              <Link href={`/inbox/${email.id}`} key={email.id}>
                <li className="flex justify-between items-center p-4 hover:bg-gray-100 cursor-pointer">
                  <div>
                    <h2
                      className={`text-lg ${!email.isRead && "font-semibold"}`}
                    >
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
        )}
      </div>
      {total > 0 && (
        <div className="rounded-lg p-2">
          <Pager
            currentPage={page}
            onPageChange={handlePageChange}
            totalPages={Math.ceil(total / perPage)}
          />
        </div>
      )}
    </div>
  );
}
