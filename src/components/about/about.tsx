// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

function AboutSection() {
  const focusAreas = [
    "High-throughput Microservices & REST APIs",
    "Frontend Performance & React Virtualization",
    "Cloud Infrastructure Automation with Terraform",
    "Zero-downtime CI/CD Pipelines & Observability",
    "AST Static Analysis & Developer Tooling",
    "Event-Driven Distributed Architectures"
  ];

  return (
    <div id="about" className="my-12 lg:my-20 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md tracking-wider">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Column */}
        <div className="order-2 lg:order-1">
          <p className="font-semibold mb-3 text-[#16f2b3] text-lg lg:text-xl uppercase tracking-wider flex items-center gap-2">
            <span>Engineering Profile</span>
          </p>

          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-5 leading-snug">
            Crafting resilient cloud systems & high-performance applications
          </h2>

          <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-6">
            {personalData.description}
          </p>

          <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-6">
            At <strong className="text-white font-semibold">Airbus</strong>, I architect and build enterprise software powering critical manufacturing and scheduling workflows. My day-to-day focuses on scaling Node.js microservices, building virtualized frontend interfaces handling 10k+ records, provisioning automated AWS infrastructure via modular Terraform, and accelerating MTTD with integrated Splunk alerting pipelines.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
            {focusAreas.map((area, index) => (
              <div key={index} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <FiCheckCircle className="text-[#16f2b3] shrink-0" size={16} />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Profile Image */}
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-indigo-500/30 bg-[#0d1224]">
              <Image
                src={personalData.profile}
                width={320}
                height={320}
                alt="Ravi Vishwakarma"
                className="w-72 sm:w-80 h-auto object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;