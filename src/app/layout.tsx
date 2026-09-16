import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import '@/css/card.scss';
import '@/css/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Ravi Vishwakarma | Software Engineer — Full-Stack, Cloud & Systems",
  description: "Portfolio of Ravi Vishwakarma, Software Engineer at Airbus. 4 years of experience building high-performance full-stack applications, microservices, and cloud architectures with TypeScript, Node.js, React, Python, and AWS.",
  keywords: [
    "Ravi Vishwakarma",
    "Software Engineer",
    "Airbus",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "AWS Certified",
    "Terraform",
    "Python",
    "System Design"
  ],
  authors: [{ name: "Ravi Vishwakarma", url: "https://github.com/Ravik27280" }],
  creator: "Ravi Vishwakarma",
  openGraph: {
    title: "Ravi Vishwakarma | Software Engineer",
    description: "4 years of engineering experience across React, Node.js, Python, and AWS at Airbus.",
    url: "https://github.com/Ravik27280",
    siteName: "Ravi Vishwakarma Portfolio",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0d1224] text-white selection:bg-pink-500 selection:text-white`}>
        <ToastContainer theme="dark" position="bottom-right" autoClose={3000} />
        <Navbar />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
