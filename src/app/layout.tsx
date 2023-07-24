import "../style/Main.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "فروشگاه اینترنتی کافه ترانه",
  description: "صفحه نخست فروشگاه کافه ترانه",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div id="overLay" className="" />
          {children}
        </Provider>
      </body>
    </html>
  );
}
