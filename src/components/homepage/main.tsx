// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare, FaAws } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { BiBuildingHouse } from "react-icons/bi";
import { FiClock } from "react-icons/fi";

function Main() {
  return (
    <section className="relative flex flex-col items-center justify-between py-6 lg:py-12">
      {/* Background glow orb */}
      <div className="w-[180px] h-[180px] bg-pink-500/10 rounded-full absolute -top-10 left-10 filter blur-3xl opacity-50 pointer-events-none"></div>
      <div className="w-[240px] h-[240px] bg-violet-600/15 rounded-full absolute top-20 right-10 filter blur-3xl opacity-50 pointer-events-none"></div>

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8 w-full">
        {/* Left Column: Intro */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-10 lg:pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Software Engineer @ Airbus • Open to Opportunities</span>
          </div>

          <h1 className="text-3xl font-extrabold leading-tight text-white md:text-5xl lg:text-[2.8rem] lg:leading-[3.6rem]">
            Hi, I&apos;m <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {personalData.name}
            </span>
          </h1>

          <p className="text-gray-300 text-sm md:text-base mt-4 leading-relaxed max-w-xl">
            Software Engineer with <span className="text-white font-semibold">4 years of experience</span> designing 
            high-throughput microservices, optimizing complex UI performance, and automating cloud infrastructure 
            at <span className="text-[#16f2b3] font-semibold">Airbus</span>. Passionate about system design, AST static analysis, and scalable architectures.
          </p>

          {/* Social Links */}
          <div className="my-6 flex items-center gap-4">
            <Link
              href={personalData.github}
              target="_blank"
              aria-label="GitHub"
              className="transition-all text-pink-500 hover:text-white hover:scale-125 duration-300 p-2 rounded-lg hover:bg-pink-500/10"
            >
              <BsGithub size={26} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              aria-label="LinkedIn"
              className="transition-all text-pink-500 hover:text-white hover:scale-125 duration-300 p-2 rounded-lg hover:bg-pink-500/10"
            >
              <BsLinkedin size={26} />
            </Link>
            <Link
              href={personalData.leetcode}
              target="_blank"
              aria-label="LeetCode"
              className="transition-all text-pink-500 hover:text-white hover:scale-125 duration-300 p-2 rounded-lg hover:bg-pink-500/10"
            >
              <SiLeetcode size={26} />
            </Link>
            <Link
              href={personalData.twitter}
              target="_blank"
              aria-label="Twitter / X"
              className="transition-all text-pink-500 hover:text-white hover:scale-125 duration-300 p-2 rounded-lg hover:bg-pink-500/10"
            >
              <FaTwitterSquare size={26} />
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600 hover:scale-105"
            >
              <button className="px-5 text-xs md:px-7 py-3 md:py-3.5 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out flex items-center gap-2">
                <span>Contact Me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-7 py-3 md:py-3.5 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:shadow-lg hover:shadow-pink-500/25 hover:scale-105"
              role="button"
              target="_blank"
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        {/* Right Column: Interactive Terminal Preview */}
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-xl border bg-gradient-to-br to-[#0a0d37] shadow-2xl shadow-indigo-950/40">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-6 py-3 flex items-center justify-between">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-amber-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-emerald-500/80"></div>
            </div>
            <div className="text-[11px] font-mono text-gray-400">ravi-engineer.ts</div>
          </div>
          <div className="overflow-x-auto border-t border-indigo-900/60 px-4 lg:px-6 py-4 lg:py-6">
            <code className="font-mono text-xs md:text-sm leading-relaxed block">
              <div>
                <span className="mr-2 text-pink-500">interface</span>
                <span className="mr-2 text-cyan-300">SoftwareEngineer</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div className="ml-4">
                <span className="text-gray-400">name:</span> <span className="text-amber-300">&apos;Ravi Vishwakarma&apos;</span>;
              </div>
              <div className="ml-4">
                <span className="text-gray-400">role:</span> <span className="text-amber-300">&apos;Software Engineer @ Airbus&apos;</span>;
              </div>
              <div className="ml-4">
                <span className="text-gray-400">experience:</span> <span className="text-orange-400">&apos;4 Years&apos;</span>;
              </div>
              <div className="ml-4">
                <span className="text-gray-400">certification:</span> <span className="text-amber-300">&apos;AWS Certified Developer (DVA-C02)&apos;</span>;
              </div>
              <div className="ml-4">
                <span className="text-gray-400">coreStack:</span> <span className="text-gray-400">[</span>
                <span className="text-[#16f2b3]">&apos;TypeScript&apos;</span>, <span className="text-[#16f2b3]">&apos;Node.js&apos;</span>, <span className="text-[#16f2b3]">&apos;React&apos;</span>, <span className="text-[#16f2b3]">&apos;Python&apos;</span>, <span className="text-[#16f2b3]">&apos;AWS&apos;</span>, <span className="text-[#16f2b3]">&apos;Terraform&apos;</span>
                <span className="text-gray-400">]</span>;
              </div>
              <div className="ml-4">
                <span className="text-gray-400">impactHighlights:</span> <span className="text-gray-400">[</span>
                <div className="ml-4 text-emerald-300">&apos;380ms render for 10k+ records (virtualized)&apos;,</div>
                <div className="ml-4 text-emerald-300">&apos;Sub-120ms p95 microservices&apos;</div>
                <span className="text-gray-400">]</span>;
              </div>
              <div className="ml-4">
                <span className="text-pink-400">buildScalableSystems:</span> <span className="text-orange-400">() =&gt;</span> <span className="text-cyan-400">true</span>;
              </div>
              <div><span className="text-gray-400">{'}'}</span></div>
            </code>
          </div>
        </div>
      </div>

      {/* Quick Metrics & Credibility Strip */}
      <div className="w-full mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-5">
        <div className="p-4 rounded-xl bg-[#11152c]/90 border border-[#1f223c] flex items-center gap-3 hover:border-violet-500/50 transition-all">
          <div className="p-2.5 rounded-lg bg-violet-600/20 text-violet-400">
            <FiClock size={22} />
          </div>
          <div>
            <div className="text-lg md:text-xl font-bold text-white">4+ Years</div>
            <div className="text-xs text-gray-400">Software Engineering</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#11152c]/90 border border-[#1f223c] flex items-center gap-3 hover:border-violet-500/50 transition-all">
          <div className="p-2.5 rounded-lg bg-blue-600/20 text-blue-400">
            <BiBuildingHouse size={22} />
          </div>
          <div>
            <div className="text-lg md:text-xl font-bold text-white">Airbus</div>
            <div className="text-xs text-gray-400">Enterprise Applications</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#11152c]/90 border border-[#1f223c] flex items-center gap-3 hover:border-violet-500/50 transition-all">
          <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-400">
            <FaAws size={22} />
          </div>
          <div>
            <div className="text-lg md:text-xl font-bold text-white">AWS Certified</div>
            <div className="text-xs text-gray-400">Developer Associate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;