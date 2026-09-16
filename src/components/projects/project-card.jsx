// @flow strict

import * as React from 'react';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-xl border bg-gradient-to-r to-[#0a0d37] w-full shadow-2xl transition-all duration-300 hover:border-violet-500/60">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      {/* Header with macOS window dots and quick action buttons */}
      <div className="px-4 lg:px-8 py-3 lg:py-4 flex items-center justify-between">
        <div className="flex flex-row space-x-1.5">
          <div className="h-2.5 w-2.5 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2.5 w-2.5 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2.5 w-2.5 lg:h-3 lg:w-3 rounded-full bg-green-300"></div>
        </div>

        <p className="text-center font-bold text-[#16f2b3] text-sm sm:text-base lg:text-lg">
          {project.name}
        </p>

        {/* Action Links */}
        <div className="flex items-center gap-2">
          {project.code && (
            <Link
              href={project.code}
              target="_blank"
              aria-label="View Source Code"
              className="p-1.5 rounded-md bg-violet-950/60 text-gray-300 hover:text-white hover:bg-violet-700/50 transition-all"
            >
              <FaGithub size={15} />
            </Link>
          )}
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              aria-label="View Live Project"
              className="p-1.5 rounded-md bg-emerald-950/60 text-[#16f2b3] hover:text-white hover:bg-emerald-700/50 transition-all"
            >
              <FaExternalLinkAlt size={13} />
            </Link>
          )}
        </div>
      </div>

      {/* Code body */}
      <div className="overflow-x-auto border-t border-indigo-900/60 px-4 lg:px-8 py-4 lg:py-6">
        <code className="font-mono text-xs sm:text-sm leading-relaxed block">
          <div>
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {project.tools.map((tag, i) => (
              <React.Fragment key={i}>
                <span className="text-cyan-300">{tag}</span>
                {project.tools.length - 1 !== i && (
                  <span className="text-gray-400">{`', '`}</span>
                )}
              </React.Fragment>
            ))}
            <span className="text-gray-400">{`],`}</span>
          </div>

          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">role:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-orange-400">{project.role}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">description:</span>
            <span className="text-gray-400">{` '`}</span>
            <span className="text-gray-300">{project.description}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          {/* Direct CTA links rendered inside code block */}
          {(project.code || project.demo) && (
            <div className="ml-4 lg:ml-8 mr-2 pt-1">
              <span className="text-purple-400">links:</span>
              <span className="text-gray-400">{' {'}</span>
              {project.code && (
                <span className="ml-2">
                  <span className="text-gray-400">code:</span>{' '}
                  <Link
                    href={project.code}
                    target="_blank"
                    className="text-[#16f2b3] underline hover:text-white"
                  >
                    &apos;{project.code.replace('https://github.com/', '')}&apos;
                  </Link>
                  {project.demo ? ', ' : ' '}
                </span>
              )}
              {project.demo && (
                <span>
                  <span className="text-gray-400">demo:</span>{' '}
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="text-pink-400 underline hover:text-white"
                  >
                    &apos;{project.demo.replace('https://', '')}&apos;
                  </Link>{' '}
                </span>
              )}
              <span className="text-gray-400">{'}'}</span>
            </div>
          )}

          <div>
            <span className="text-gray-400">{`};`}</span>
          </div>
        </code>
      </div>
    </div>
  );
};

export default ProjectCard;