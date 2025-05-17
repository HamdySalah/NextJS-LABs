import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function LoginLayout({ children }) {
  return (
    <div className={`${geistSans.variable} login-layout`}>
      {children}
    </div>
  );
}