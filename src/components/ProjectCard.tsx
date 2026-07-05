import { Project } from "../types";
import { GitBranch, ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
  index: number;
  key?: string;
}

export default function ProjectCard({ project, onViewDetails, index }: ProjectCardProps) {
  return (
    <motion.div
      id={`project-card-${project.id}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white/50 dark:bg-neutral-900/40 glass-card p-6 md:p-8 hover:shadow-lg hover:border-emerald-500/40 dark:hover:border-emerald-500/40"
    >
      {/* Decorative hover gradient block */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      {/* Card Content Top */}
      <div className="space-y-4">
        {/* Name and Tagline */}
        <div className="flex flex-col justify-between items-start gap-2">
          <span className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            {project.technologies[0]} + {project.technologies[1] || "More"}
          </span>
          <h3 className="text-2xl font-display font-bold text-neutral-900 dark:text-white group-hover:text-emerald-500 transition-colors duration-300">
            {project.name}
          </h3>
        </div>

        {/* Short details */}
        <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
          {project.description}
        </p>

        {/* Dynamic highlights list */}
        <ul className="space-y-2 pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
          {project.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-center space-x-2 text-xs text-neutral-500 dark:text-neutral-400 font-sans">
              <CheckCircle2 className="w-4 h-4 text-emerald-500/80 shrink-0" />
              <span className="truncate">{feature}</span>
            </li>
          ))}
          {project.features.length > 3 && (
            <li className="text-[11px] text-neutral-400 dark:text-neutral-500 font-mono italic pl-6">
              + {project.features.length - 3} additional features
            </li>
          )}
        </ul>

        {/* Stack list tags */}
        <div className="flex flex-wrap gap-1.5 pt-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] font-mono bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 text-neutral-500 dark:text-neutral-400 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action panel footer */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-8 pt-4 border-t border-neutral-100 dark:border-neutral-800/50">
        {/* External links block */}
        <div className="flex items-center space-x-3">
          <a
            href={project.githubUrl}
            target="_blank"
            referrerPolicy="no-referrer"
            className="flex items-center space-x-1.5 text-xs font-mono text-neutral-500 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            title="Inspect Repository on GitHub"
          >
            <GitBranch className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center space-x-1.5 text-xs font-mono text-neutral-500 dark:text-neutral-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              title="Launch Application"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>

        {/* View Details modal launch button */}
        <button
          onClick={() => onViewDetails(project)}
          className="flex items-center justify-center space-x-2 px-3 py-1.5 text-xs font-mono font-medium rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 text-neutral-700 dark:text-neutral-300 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-all cursor-pointer"
        >
          <span>View Blueprint</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
