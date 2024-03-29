import QueryProvider from "@/app/context/QueryProvider";
import UserProvider from "@/app/context/UserProvider";
import "./globals.css";
export const metadata = {
  title: "Github Typeahead Next",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <QueryProvider>
          <UserProvider>{children}</UserProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
