import {
  Poppins,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
const PlusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400",'500','600','700','800'], // Bebas Neue only has 400 weight
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
  title: "Abdul Maalik - Portfolio",
  description: "Video Editor Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${PlusJakartaSans.variable}     ${poppins.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
