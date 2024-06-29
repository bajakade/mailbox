import Dropdown from "@/components/drop-down";
import { FaEnvelope } from "react-icons/fa";
import { ReactNode } from "react";

const Layout = ({ children }: {children: ReactNode}) => {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="bg-gray-800 text-white flex justify-between items-center p-4">
          <div className="flex items-center">
            <img src="/logo-light.png" alt="Logo" className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">Mail</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="focus:outline-none">
              <FaEnvelope size={24} />
            </button>
            <Dropdown />
          </div>
        </header>
        <main className="flex-grow p-4 bg-blue-300 text-black">
          {children}
        </main>
      </div>
    );
  };
  
  export default Layout;