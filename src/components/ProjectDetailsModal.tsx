import { Project } from "../types";
import { X, ExternalLink, GitBranch, FolderTree, AlertTriangle, Lightbulb, CheckCircle2, Cpu } from "lucide-react";
import { motion } from "motion/react";

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailsModal({ project, onClose }: ProjectDetailsModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-neutral-950/80 backdrop-blur-md">
      {/* Scrollable Container wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-5xl my-8 overflow-hidden rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-2xl flex flex-col max-h-[90vh]"
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center space-x-3">
            <Cpu className="w-5 h-5 text-emerald-500" />
            <span className="text-xs font-mono text-neutral-500 tracking-wider">PROJECT BLUEPRINT READER</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors cursor-pointer"
            aria-label="Close project blueprint details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8">
          {/* Top Hero Card info */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-neutral-50 to-neutral-100/50 dark:from-neutral-900/40 dark:to-neutral-900/10 border border-neutral-200/50 dark:border-neutral-800/30">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 dark:text-white tracking-tight">
              {project.name}
            </h2>
            <p className="text-base text-emerald-600 dark:text-emerald-400 font-mono mt-2 font-medium">
              {project.tagline}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Core project links */}
            <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-neutral-200/50 dark:border-neutral-800/50">
              <a
                href={project.githubUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center space-x-2 text-xs font-mono bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 hover:bg-emerald-600 dark:hover:bg-emerald-500 hover:text-white dark:hover:text-white px-4 py-2.5 rounded-xl transition-all font-semibold shadow-sm"
              >
                <GitBranch className="w-4 h-4" />
                <span>INSPECT REPOSITORY</span>
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center space-x-2 text-xs font-mono bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-white hover:border-emerald-500 dark:hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 px-4 py-2.5 rounded-xl transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>LAUNCH APPMESH</span>
                </a>
              )}
            </div>
          </div>

          {/* Bento-grid Layout of details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left column - Specs (7 grid slots) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Overview */}
              <div className="space-y-3">
                <h3 className="text-lg font-display font-bold text-neutral-900 dark:text-white">Project Overview</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
                  {project.details.overview}
                </p>
              </div>

              {/* Problem Statement vs. Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl border border-red-200/60 dark:border-red-950/40 bg-red-50/20 dark:bg-red-950/5 space-y-2">
                  <div className="flex items-center space-x-2 text-red-600 dark:text-red-400">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider">The Problem</span>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                    {project.details.problemStatement}
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-emerald-200/60 dark:border-emerald-950/40 bg-emerald-50/20 dark:bg-emerald-950/5 space-y-2">
                  <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider">The Solution</span>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                    {project.details.solution}
                  </p>
                </div>
              </div>

              {/* Architecture & Folder Structure */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center space-x-2">
                  <Cpu className="w-4 h-4 text-emerald-500" />
                  <h3 className="text-lg font-display font-bold text-neutral-900 dark:text-white">Architecture Plan</h3>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
                  {project.details.architecture}
                </p>

                {/* Directory Node */}
                <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/30 p-5 space-y-2">
                  <div className="flex items-center space-x-2 text-neutral-500 dark:text-neutral-400">
                    <FolderTree className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs font-mono font-bold uppercase">Source Tree Blueprint</span>
                  </div>
                  <pre className="text-xs font-mono text-neutral-700 dark:text-neutral-300 overflow-x-auto whitespace-pre p-2 bg-neutral-100/50 dark:bg-neutral-950/50 rounded-lg border border-neutral-200/50 dark:border-neutral-800/50">
                    <code>{project.details.folderStructure}</code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Right column - Achievements, Challenges & Future (5 grid slots) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Features checklist */}
              <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 glass-card space-y-4">
                <h3 className="text-md font-display font-bold text-neutral-900 dark:text-white">Core Functional Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/10 space-y-4">
                <h3 className="text-md font-display font-bold text-neutral-900 dark:text-white">Friction & Technical Challenges</h3>
                <ul className="space-y-3.5">
                  {project.details.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs">
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Future roadmap */}
              <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 glass-card space-y-4">
                <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400">
                  <Lightbulb className="w-4 h-4" />
                  <h3 className="text-md font-display font-bold text-neutral-900 dark:text-white">Future Enhancements</h3>
                </div>
                <ul className="space-y-3">
                  {project.details.futureImprovements.map((improvement, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-2" />
                      <span className="text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/20 text-center text-xs font-mono text-neutral-500">
          CHIRAG JANGID // CODE. CREATE. INNOVATE.
        </div>
      </motion.div>
    </div>
  );
}
