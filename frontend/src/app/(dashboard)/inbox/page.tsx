import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const emails = [
    {
      id: 1,
      sender: 'John Doe',
      subject: 'Meeting Reminder',
      snippet: 'Don’t forget about the meeting at 3 PM...',
      read: true,
      timestamp: '2:34 PM'
    },
    {
      id: 2,
      sender: 'Jane Smith',
      subject: 'Project Update',
      snippet: 'Here is the latest update on the project...',
      read: true,
      timestamp: '1:15 PM'
    },
    {
      id: 3,
      sender: 'Bob Johnson',
      subject: 'New Assignment',
      snippet: 'You have been assigned a new task...',
      read: false,
      timestamp: '12:05 PM'
    }
    // Add more emails as needed
  ];

export default function Inbox() {
    return (
        <div className="max-w-3xl mx-auto p-4">
          <Link className="flex items-center text-gray-800 hover:text-gray-700 mb-4" href='/dashboard'>
            <FaArrowLeft size={24} className="mr-2" />
          </Link>

          <div className="rounded-lg p-4 bg-blue-200 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
            <h1 className="text-3xl font-bold mb-4 mt-4">Messages</h1>
            <ul className="divide-y divide-gray-200">
              {emails.map(email => (
                <Link href={`/inbox/${email.id}`}>
                <li key={email.id} className="flex justify-between items-center p-4 hover:bg-gray-100 cursor-pointer">
                  <div>
                    <h2 className={`text-lg ${!email.read && 'font-semibold'}`}>{email.sender}</h2>
                    <p className="text-sm text-gray-500">{email.subject}</p>
                    {/* <p className="text-sm">{email.snippet}</p> */}
                  </div>
                  <div className={`text-sm ${email.read && 'text-gray-500'}`}>{email.timestamp}</div>
                </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      );
}