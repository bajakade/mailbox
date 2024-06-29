import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

import AppHeader from "@/components/header";
import { ReactNode } from "react";
import { fetchAllEmails } from "@/utils";

const Layout = async ({ children }: {children: ReactNode}) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['mails'],
    queryFn: fetchAllEmails,
  })

    return (
      <div className="min-h-screen flex flex-col">
         <HydrationBoundary state={dehydrate(queryClient)}>
            <AppHeader />
            <main className="flex-grow p-4 bg-blue-300 text-black">
              {children}
            </main>
         </HydrationBoundary>
        
      </div>
    );
  };
  
  export default Layout;