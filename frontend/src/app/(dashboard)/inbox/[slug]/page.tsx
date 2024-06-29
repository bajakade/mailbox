import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function MailDetail() {
    const email = {
        id: 1,
        sender: 'John Doe',
        subject: 'Meeting Reminder',
        content: 'Don’t forget about the meeting at 3 PM. Here are the details...',
        timestamp: '2:34 PM'
    };
    return (
        <div className="max-w-3xl mx-auto p-4">
          <Link className="flex items-center text-gray-500 hover:text-gray-700 mb-4" href='/inbox'>
            <FaArrowLeft className="mr-2" />
            Back to Messages
          </Link>
          <div className="bg-white p-6 rounded-lg shadow-lg bg-blue-200">
            <h1 className="text-2xl font-bold mb-2">{email.subject}</h1>
            <p className="text-sm text-gray-500 mb-4">
              From: {email.sender} | {email.timestamp}
            </p>
            <div className="border border-gray-500  bg-blue-300 pt-4 px-2 min-h-32">
              <p>{email.content}</p>
            </div>
          </div>
        </div>
      );
}