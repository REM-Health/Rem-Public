"use client";

// import { useState } from "react";
import { Providers } from "@/components/provider/Providers";
import { SidebarProvider } from "@/components/navigation/SidebarContext";
import { Sidebar } from "@/components/navigation/Sidebar";
import "@/styles/globals.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className="bg-beige">
        <Providers>
          <SidebarProvider>
            <div className="h-min-screen bg-beige flex overflow-hidden">
              <Sidebar />
              <div className={"bg-beige flex flex-1 flex-col transition-all duration-300"}>
                <main className="flex h-full w-full flex-1">{children}</main>
              </div>
            </div>
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
}
