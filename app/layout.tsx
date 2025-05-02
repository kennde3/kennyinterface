import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kenny's Interface",
  description: "My Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="react-app" content="true" />
      </head>
      <body
        className={`antialiased bg-[#0a192f]`}
        data-no-edit="true"
        suppressContentEditableWarning={true}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
