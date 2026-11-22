import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";
import { Toaster } from "sonner";
import Chatbot from "@/components/custom/chatbot";
import ChatbotLauncher from "@/components/custom/ChatbotLauncher";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-poppins",
  subsets: ["latin"],
});

// minimumScale: stops zoom-out from shrinking the page and leaving blank space on mobile
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

export const metadata: Metadata = {
  title: "Forma",
  description: "Generated quality mockups for your UIUX projects",
  icons: {
    icon: "/forma-logo.svg",
    apple: "/forma-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        <Provider>
            {children}
            <ChatbotLauncher />
            <Chatbot />
        </Provider>
        <Toaster position="top-right" richColors />
      </body>
    </html>
    </ClerkProvider>
  );
}