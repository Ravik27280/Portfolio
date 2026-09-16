// @flow strict

import { skillsData, categorizedSkills } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { HiCheck } from "react-icons/hi";

function Skills() {
  return (
    <div id="skills" className="relative border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl font-bold tracking-wider rounded-md">
            SKILLS & EXPERTISE
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Animated Marquee */}
      <div className="w-full my-8">
        <Marquee
          gradient={false}
          speed={60}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => {
            const icon = skillsImage(skill);
            return (
              <div
                className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-4 rounded-lg group relative hover:scale-[1.12] cursor-pointer"
                key={id}
              >
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none group-hover:border-[#16f2b3] group-hover:shadow-[0_0_20px_rgba(22,242,179,0.2)] transition-all duration-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2.5 p-5">
                    <div className="h-8 sm:h-10 flex items-center justify-center">
                      {icon?.src ? (
                        <Image
                          src={icon.src}
                          alt={skill}
                          width={38}
                          height={38}
                          className="h-full w-auto rounded"
                        />
                      ) : (
                        <div className="w-9 h-9 rounded bg-violet-800/40 flex items-center justify-center text-xs font-mono text-[#16f2b3]">
                          {skill.slice(0, 2).toUpperCase()}
                        </div>
                      )}
                    </div>
                    <p className="text-white text-xs sm:text-sm font-medium text-center">
                      {skill}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>

      {/* Categorized Matrix for Detailed Scanning */}
      <div className="mt-8 pt-6 border-t border-[#1f223c]/50">
        <h3 className="text-center text-sm uppercase tracking-widest text-[#16f2b3] font-semibold mb-6">
          Categorized Competencies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categorizedSkills.map((cat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#0f142e]/80 border border-[#1e254a] hover:border-violet-500/40 transition-all"
            >
              <h4 className="text-sm font-bold text-white border-b border-[#1e254a] pb-2 mb-3 text-pink-400">
                {cat.category}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((item, iIdx) => (
                  <span
                    key={iIdx}
                    className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-[#161c3d] text-gray-200 border border-[#2b3566]/60 hover:text-white hover:border-[#16f2b3]/60 transition-colors"
                  >
                    <HiCheck size={12} className="text-[#16f2b3]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;