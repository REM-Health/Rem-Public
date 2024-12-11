import "@/styles/globals.css";

export const metadata = {
  title: "Rem",
  description: "AI-powered insurance solutions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-beige font-sans">{children}</body>
    </html>
  );
}
