import "./globals.css";

export const metadata = {
  title: "Memory Game - Fun Card Matching Game",
  description:
    "A fun and engaging memory card matching game for all ages. Train your brain and improve your memory!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
