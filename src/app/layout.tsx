import { Inter } from "next/font/google";
import "./ui/globals.css";
import "./ui/materialIcons.css"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-color4">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
