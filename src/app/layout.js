import { Montserrat, Lato, Merriweather } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import "rsuite/dist/rsuite-no-reset.min.css";
import { CustomProvider } from "rsuite";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-merriweather",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${lato.variable} ${merriweather.variable}`}
      >
        <NextTopLoader showSpinner={false} />
        <CustomProvider>{children}</CustomProvider>
      </body>
    </html>
  );
}
