import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "React App",
  description: "Web site created with Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root" className="p-8">
          {children}
        </div>
      </body>
    </html>
  );
}
