import { Montserrat, Lato, Kumbh_Sans, Handlee } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  variable: "--font-kumbhsans",
});

export const metadata = {
  title: "Revus",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${lato.variable} ${kumbhSans.variable}`}
      >
        <NextTopLoader showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
