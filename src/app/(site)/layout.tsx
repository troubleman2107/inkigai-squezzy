import { NextAuthProvider } from "./providers";

import "@/styles/globals.css";
import type { Metadata } from "next";
import Header from "@/components/core/header/Header";

export const metadata: Metadata = {
  title: "NextAuth OAuth with Prisma and Postgres",
  description: "A simple example of how to use NextAuth with OAuth providers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background font-sans antialiased">
        <NextAuthProvider>
          <Header />
          <main>
            <div className="container">{children}</div>
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
