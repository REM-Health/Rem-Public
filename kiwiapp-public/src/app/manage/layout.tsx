"use client";

import { useState } from "react";
import { Providers } from "@/components/provider/Providers";
import { SidebarProvider } from "@/components/navigation/SidebarContext";
import { Sidebar } from "@/components/navigation/Sidebar";
import "@/styles/globals.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className="bg-beige">
        <Providers>
          <SidebarProvider>
            <div className="h-min-screen flex overflow-hidden bg-beige">
              <Sidebar />
              <div
                className={
                  "flex flex-1 flex-col bg-beige transition-all duration-300"
                }
              >
                <main className="flex h-full w-full flex-1">{children}</main>
              </div>
            </div>
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
}
