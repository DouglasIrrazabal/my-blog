import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Doug's tech blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className="bg-neutral-950 text-white m-5 sm:mx-auto sm:max-w-2xl"
    >
      <body className="flex flex-col md:mt-16">
        <Navigation />
        <hr className="my-7 h-px bg-neutral-600 border-0" />
        <main className="flex flex-col">{children}</main>
      </body>
    </html>
  );
}
