'use client';

import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { Message } from "@/types";
import React from "react";
import { formatDate } from "@/utils/helpers";
import { readEmail } from "@/utils";
import { useMutation } from "@tanstack/react-query";
import { useStore } from "@/hooks/useStore";

export default function MailDetail({ params: {slug} }: { params: { slug: number } }) {
    const mails = useStore((state: any) => state.mails)
    const [email, setEmail] = React.useState<Message>();
    
    const mutation = useMutation({
        mutationKey: ['mail', +slug],
        mutationFn: () => {
          return readEmail(+slug)
        },
        onSuccess: (data) => {
            setEmail(data);
        }
    })

    React.useEffect(() => {
        mutation.mutate();
    }, []);

    React.useEffect(() => {
        setEmail(mails.find((mail: Message) => mail.id == slug))
    }, [mails])

    return (
        <div className="max-w-3xl mx-auto p-4">
          <Link className="flex items-center text-gray-500 hover:text-gray-700 mb-4" href='/inbox'>
            <FaArrowLeft className="mr-2" />
            Back to Messages
          </Link>
          <div className="bg-white p-6 rounded-lg shadow-lg bg-blue-200">
            {mutation.isPending ? (
                <h1 className="text-2xl font-bold mb-2">Loading message...</h1>
            ): (
                <>
                    <h1 className="text-2xl font-bold mb-2">{email?.subject}</h1>
                    <p className="text-sm text-gray-500 mb-4">
                    Date: {email && formatDate(email.createdAt)}
                    </p>
                    <div className="border border-gray-500  bg-blue-300 pt-4 px-2 min-h-32">
                    <p>{email?.content}</p>
                    </div>
                </>
                
            )}
            
          </div>
        </div>
      );
}