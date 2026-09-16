// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import AnimationLottie from "@/components/helper/animation-lottie";
import GlowCard from "@/components/helper/glow-card";
import experienceLottie from '../../../public/lottie/code.json';

function Experience() {
  return (
    <div id="experience" className="relative border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl font-bold tracking-wider rounded-md">
            EXPERIENCE
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Lottie Animation Column */}
          <div className="lg:col-span-4 flex justify-center sticky top-24">
            <div className="w-full max-w-sm">
              <AnimationLottie animationPath={experienceLottie} />
            </div>
          </div>

          {/* Experience Cards Column */}
          <div className="lg:col-span-8">
            <div className="flex flex-col gap-6">
              {experiences.map((exp) => (
                <GlowCard key={exp.id} identifier={`experience-${exp.id}`}>
                  <div className="p-4 sm:p-6 relative">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80 pointer-events-none"
                    />

                    {/* Header: Duration & Location */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1f223c] pb-3 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-950/80 text-[#16f2b3] border border-violet-700/40">
                        {exp.duration}
                      </span>
                      {exp.location && (
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <IoLocationOutline size={14} className="text-[#16f2b3]" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>

                    {/* Role & Company */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-violet-400 p-2 rounded-lg bg-violet-900/30 shrink-0">
                        <BsPersonWorkspace size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                          {exp.title}
                        </h3>
                        <p className="text-sm font-medium text-[#16f2b3]">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Key Highlights / Achievements */}
                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="space-y-2 mb-4 text-xs sm:text-sm text-gray-300 list-disc list-outside ml-5">
                        {exp.highlights.map((point, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech Stack Pills */}
                    {exp.skills && exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#1f223c]/60">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#11152c] text-violet-300 border border-[#262c55]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;