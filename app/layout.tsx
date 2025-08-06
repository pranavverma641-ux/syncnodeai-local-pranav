import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { FooterSection } from "@/components/layout/sections/footer";
import { CustomScrollbar } from "@/components/layout/custom-scrollbar";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <title>SyncNodeAI</title>
      </head>
      <body className={cn("min-h-screen relative bg-gradient-to-r from-blue-100 via-cyan-50 to-blue-50", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="relative z-10">{children}</main>
          <FooterSection />
          <CustomScrollbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
