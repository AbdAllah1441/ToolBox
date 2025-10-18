import type { Metadata } from "next";
import { Poppins, Changa } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";

import { cookies } from "next/headers";

import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const changa = Changa({
  weight: ["400", "500", "600", "700"],
  variable: "--font-changa",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Tools",
  description: "Trading",
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value || "en";
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction}>
      <body className={`${changa.variable} ${poppins.variable} antialiased`}>
        <NextIntlClientProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
