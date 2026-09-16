import Link from "next/link";
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="relative border-t bg-[#0d1224] border-[#25213b] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-8">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-gray-400">
            © {new Date().getFullYear()}{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/ravik27280/"
              className="text-[#16f2b3] font-semibold hover:underline"
            >
              Ravi Vishwakarma
            </Link>
            . Engineered with Next.js & Tailwind CSS.
          </p>
          <div className="flex items-center gap-5 text-xs sm:text-sm">
            <Link
              target="_blank"
              href="https://github.com/Ravik27280/Portfolio"
              className="flex items-center gap-1.5 uppercase hover:text-[#16f2b3] transition-colors"
            >
              <IoStar size={16} />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/Ravik27280/Portfolio/fork"
              className="flex items-center gap-1.5 uppercase hover:text-[#16f2b3] transition-colors"
            >
              <CgGitFork size={16} />
              <span>Fork</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
