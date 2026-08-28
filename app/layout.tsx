import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MLTE | PES 2017 Master League Transfer Engine",
  description: "Enhance transfer AI activity and realism in your Pro Evolution Soccer 2017 Master League without modifying the game executable.",
  keywords: "PES 2017, Pro Evolution Soccer, Master League, Transfer Engine, MLTE, EDIT00000000, ML00000000",
  authors: [{ name: "irvantaufik28" }],
  openGraph: {
    title: "MLTE | PES 2017 Master League Transfer Engine",
    description: "An independent community tool that reads EDIT00000000 and ML00000000 saves to inject realistic transfer desk intelligence and variety into PES 2017.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-navy-950 text-slate-100 min-h-screen flex flex-col font-sans selection:bg-pitch-500 selection:text-navy-950">
        {children}
      </body>
    </html>
  );
}
