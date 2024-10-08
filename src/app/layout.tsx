import type { Metadata } from "next";
import "../styles/globals.css";
import NavBar from "@/components/Common/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
export const metadata: Metadata = {
  title: "eunji's blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <NavBar  />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
