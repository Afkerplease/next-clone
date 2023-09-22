import "@/styles/globals.css";
import { Metadata } from "next";

import { Providers } from "./providers";

import { Link } from "@nextui-org/link";
import clsx from "clsx";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
