import { Poppins, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700", "800"], // Bebas Neue only has 400 weight
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

// write the same for poppins font please as written above for other fonts

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Clean Power Energy | Smart Solar Solutions for a Sustainable Future",
  description:
    "Clean Power Energy provides reliable and affordable solar energy solutions for homes and businesses. Reduce your energy bills and carbon footprint with our high-quality solar systems and expert installation services.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
