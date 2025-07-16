import type { Metadata } from "next";
import "./styles/globals.css";
import { AppProvider } from "@/context/app_context/AppContext";

export const metadata: Metadata = {
  title: {
    template: 'Joshep Álvarez',
    default: 'Joshep Álvarez'
  },
  description: "Joshep Alvarez Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`antialiased`}
      >
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
