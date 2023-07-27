import "./globals.css";

export const metadata = {
  title: "Watch Gallery",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <div>
          <div className="min-h-screen">{children}</div>
        </div>
      </body>
    </html>
  );
}
