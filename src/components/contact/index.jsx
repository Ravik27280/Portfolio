// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaStackOverflow } from 'react-icons/fa';
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-20 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl font-bold tracking-wider rounded-md">
          GET IN TOUCH
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <ContactForm />

        <div className="lg:w-4/5">
          <div className="flex flex-col gap-5 lg:gap-8">
            <Link
              href={`mailto:${personalData.email}`}
              className="text-sm md:text-lg flex items-center gap-3 group text-gray-300 hover:text-white transition-colors"
            >
              <MdAlternateEmail
                className="bg-[#1a1443] p-2.5 rounded-full group-hover:bg-[#16f2b3] group-hover:text-black group-hover:scale-110 transition-all text-[#16f2b3] border border-violet-700/40"
                size={40}
              />
              <span className="font-mono">{personalData.email}</span>
            </Link>

            <Link
              href={`tel:${personalData.phone.replace(/\s+/g, '')}`}
              className="text-sm md:text-lg flex items-center gap-3 group text-gray-300 hover:text-white transition-colors"
            >
              <IoMdCall
                className="bg-[#1a1443] p-2.5 rounded-full group-hover:bg-[#16f2b3] group-hover:text-black group-hover:scale-110 transition-all text-[#16f2b3] border border-violet-700/40"
                size={40}
              />
              <span className="font-mono">{personalData.phone}</span>
            </Link>

            <div className="text-sm md:text-lg flex items-center gap-3 text-gray-300">
              <CiLocationOn
                className="bg-[#1a1443] p-2.5 rounded-full text-[#16f2b3] border border-violet-700/40"
                size={40}
              />
              <span>{personalData.address}</span>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="mt-8 lg:mt-12 flex flex-wrap items-center gap-4">
            <Link
              target="_blank"
              aria-label="GitHub Profile"
              href={personalData.github}
              className="bg-[#161c3d] p-3 rounded-full hover:bg-[#16f2b3] hover:text-black hover:scale-115 transition-all text-gray-300 border border-violet-800/40"
            >
              <IoLogoGithub size={22} />
            </Link>

            <Link
              target="_blank"
              aria-label="LinkedIn Profile"
              href={personalData.linkedIn}
              className="bg-[#161c3d] p-3 rounded-full hover:bg-[#16f2b3] hover:text-black hover:scale-115 transition-all text-gray-300 border border-violet-800/40"
            >
              <BiLogoLinkedin size={22} />
            </Link>

            <Link
              target="_blank"
              aria-label="LeetCode Profile"
              href={personalData.leetcode}
              className="bg-[#161c3d] p-3 rounded-full hover:bg-[#16f2b3] hover:text-black hover:scale-115 transition-all text-gray-300 border border-violet-800/40"
            >
              <SiLeetcode size={22} />
            </Link>

            <Link
              target="_blank"
              aria-label="Twitter / X Profile"
              href={personalData.twitter}
              className="bg-[#161c3d] p-3 rounded-full hover:bg-[#16f2b3] hover:text-black hover:scale-115 transition-all text-gray-300 border border-violet-800/40"
            >
              <FaXTwitter size={22} />
            </Link>

            <Link
              target="_blank"
              aria-label="Stack Overflow Profile"
              href={personalData.stackOverflow}
              className="bg-[#161c3d] p-3 rounded-full hover:bg-[#16f2b3] hover:text-black hover:scale-115 transition-all text-gray-300 border border-violet-800/40"
            >
              <FaStackOverflow size={22} />
            </Link>

            <Link
              target="_blank"
              aria-label="Instagram Profile"
              href={personalData.instagram}
              className="bg-[#161c3d] p-3 rounded-full hover:bg-[#16f2b3] hover:text-black hover:scale-115 transition-all text-gray-300 border border-violet-800/40"
            >
              <FaInstagram size={22} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;