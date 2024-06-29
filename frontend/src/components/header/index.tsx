'use client';

import Dropdown from "../drop-down";
import { FaEnvelope } from "react-icons/fa";
import { IconWithBadge } from "../icons";
import Link from "next/link";
import { useMessage } from "@/hooks/useMessage";

export default function AppHeader() {
    const {unread} = useMessage();
    return (
        <header className="bg-gray-800 text-white flex justify-between items-center p-4">
          <div className="flex items-center">
            <img src="/logo-light.png" alt="Logo" className="h-16 w-16 mr-2" />
            <span className="text-2xl ml-4 font-semibold">Mail</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link className="focus:outline-none" href='/inbox'>
              <IconWithBadge icon={FaEnvelope} numCount={unread} />
            </Link>
            <Dropdown />
          </div>
        </header>
    )
}