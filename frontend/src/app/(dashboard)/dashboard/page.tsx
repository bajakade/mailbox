import Link from "next/link";
import { Message } from "@/types";

async function getEmails(): Promise<Array<Message>> {
    const res = await fetch('http://localhost:8000/api/v1/mails', {next: {revalidate: 60}});
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        console.log(res)
        throw new Error('Failed to fetch data')
    }
    return res.json();
     
}

export default async function Dashboard() {
    const mails = await getEmails();
    const unread = mails.filter(mail => !mail.isRead)
    

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Hello Bashir</h1>
            <p className="text-lg mb-6">{`You have ${unread.length} unread messages out of ${mails.length}`}</p>
            <Link className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" href='/inbox'>
                View Messages
            </Link>
            </div>
        </div>
      );
}