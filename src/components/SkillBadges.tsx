import { SKILL_CATEGORIES } from "../data";
import { Code, Database, Terminal, Cpu, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const CATEGORY_ICONS: Record<string, any> = {
  "Frontend Engineering": Code,
  "Backend & Database": Database,
  "Developer Tools": Terminal,
  "Cloud & AI Utilities": Cpu,
};

export default function SkillBadges() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {SKILL_CATEGORIES.map((category, idx) => {
        const IconComponent = CATEGORY_ICONS[category.title] || Sparkles;

        return (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 md:p-8 rounded-2xl glass-card border border-neutral-200/50 dark:border-neutral-800/50 flex flex-col justify-between"
          >
            {/* Category Header */}
            <div className="flex items-center space-x-3 pb-4 mb-6 border-b border-neutral-100 dark:border-neutral-800/60">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <IconComponent className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-neutral-900 dark:text-white">
                {category.title}
              </h3>
            </div>

            {/* Skills Badges Grid */}
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="px-4 py-2 rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-white/5 group hover:border-emerald-500 hover:bg-emerald-500/10 dark:hover:bg-emerald-500/10 transition-all duration-200"
                >
                  <span className="text-xs font-mono font-bold text-neutral-800 dark:text-neutral-200 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
