// @flow strict
import Image from "next/image";
import Link from "next/link";
import { educations, certifications } from "@/utils/data/educations";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaAws, FaExternalLinkAlt } from "react-icons/fa";
import AnimationLottie from "@/components/helper/animation-lottie";
import GlowCard from "@/components/helper/glow-card";
import lottieFile from '/public/lottie/study.json';

function Education() {
  return (
    <div id="education" className="relative my-12 lg:my-24 border-t border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl font-bold tracking-wider rounded-md">
            EDUCATION & CERTIFICATIONS
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Lottie Animation Column */}
          <div className="lg:col-span-4 flex justify-center sticky top-24">
            <div className="w-full max-w-sm">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          {/* Cards Column */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Certifications Section */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[#16f2b3] mb-4 flex items-center gap-2">
                <FaAws size={18} className="text-amber-400" />
                <span>Professional Certifications</span>
              </h3>

              <div className="flex flex-col gap-4">
                {certifications.map((cert) => (
                  <GlowCard key={cert.id} identifier={`cert-${cert.id}`}>
                    <div className="p-4 sm:p-5 relative border border-amber-500/20 rounded-xl bg-gradient-to-br from-[#121633] to-[#0a0d24]">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1f223c] pb-3 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                          {cert.issueDate}
                        </span>
                        <Link
                          href={cert.link}
                          target="_blank"
                          className="inline-flex items-center gap-1.5 text-xs text-[#16f2b3] hover:underline"
                        >
                          <span>Credly Verification</span>
                          <FaExternalLinkAlt size={10} />
                        </Link>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                          <FaAws size={28} />
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                            {cert.title}
                          </h4>
                          <p className="text-xs sm:text-sm font-medium text-gray-300 mb-2">
                            {cert.issuer}
                          </p>
                          <p className="text-xs text-gray-400 leading-relaxed">
                            {cert.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))}
              </div>
            </div>

            {/* Education History Section */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-4">
                Academic Background
              </h3>

              <div className="flex flex-col gap-4">
                {educations.map((education) => (
                  <GlowCard key={education.id} identifier={`education-${education.id}`}>
                    <div className="p-4 sm:p-5 relative">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80 pointer-events-none"
                      />
                      <div className="flex items-center justify-between border-b border-[#1f223c] pb-2 mb-3">
                        <p className="text-xs sm:text-sm text-[#16f2b3] font-medium">
                          {education.duration}
                        </p>
                        {education.grade && (
                          <span className="text-xs font-mono text-pink-400 font-semibold">
                            {education.grade}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-x-4">
                        <div className="text-violet-400 p-2.5 rounded-lg bg-violet-900/20 shrink-0">
                          <BsPersonWorkspace size={24} />
                        </div>
                        <div>
                          <p className="text-base sm:text-lg font-bold text-white">
                            {education.title}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-300 mt-0.5">
                            {education.institution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;