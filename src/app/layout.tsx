import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head"; // Import Head for SEO or metadata needs

export const metadata = {
  title: "Toyota | Future-Rafay",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
