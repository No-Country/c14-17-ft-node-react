import "./globals.css";
import { Poppins } from "next/font/google";
import { ProviderWrapper } from "@/redux/providers";
import Head from "next/head";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "sans-serif"],
});

export const metadata = {
  title: "MiFinanz",
  description: "Plataforma para gestionar tus finanzas personales",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>

      <body className={poppins.className}>
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
