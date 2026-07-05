import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, MessageSquare, AlertCircle, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PERSONAL_INFO } from "../data";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate sending email via EmailJS
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Auto-reset status after 5s
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
      {/* Left side - Information Cards (5 slots) */}
      <div className="lg:col-span-5 space-y-4">
        {/* Contact info card */}
        <div className="p-6 md:p-8 rounded-2xl border border-neutral-200/50 dark:border-neutral-800/50 glass-card space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              GET IN TOUCH
            </span>
            <h3 className="text-xl font-display font-bold text-neutral-900 dark:text-white">
              Let's craft something amazing
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed">
              Have a role in mind, a project concept to explore, or simply want to connect? Send an email or reach out on socials.
            </p>
          </div>

          <div className="space-y-4 font-mono text-xs">
            {/* Email item */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center space-x-3.5 p-3 rounded-xl border border-neutral-100 dark:border-neutral-800/40 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 hover:bg-neutral-50/50 dark:hover:bg-neutral-900/10 transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                <Mail className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <span className="block text-[10px] text-neutral-400 uppercase">E-Mail Address</span>
                <span className="font-semibold text-neutral-800 dark:text-neutral-200 truncate block">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </a>

            {/* Phone item */}
            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
              className="flex items-center space-x-3.5 p-3 rounded-xl border border-neutral-100 dark:border-neutral-800/40 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 hover:bg-neutral-50/50 dark:hover:bg-neutral-900/10 transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] text-neutral-400 uppercase">Phone Line</span>
                <span className="font-semibold text-neutral-800 dark:text-neutral-200 block">
                  {PERSONAL_INFO.phone}
                </span>
              </div>
            </a>

            {/* Location item */}
            <div className="flex items-center space-x-3.5 p-3 rounded-xl border border-neutral-100 dark:border-neutral-800/40">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] text-neutral-400 uppercase">Hub Location</span>
                <span className="font-semibold text-neutral-800 dark:text-neutral-200 block">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>
          </div>

          {/* Socials shortcut links */}
          <div className="flex items-center gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800/60">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              referrerPolicy="no-referrer"
              className="p-2.5 rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              aria-label="Inspect GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              referrerPolicy="no-referrer"
              className="p-2.5 rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 text-neutral-600 dark:text-neutral-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              aria-label="Connect on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Customized Visual map card of Jaipur */}
        <div className="relative p-6 rounded-2xl border border-neutral-200/50 dark:border-neutral-800/50 bg-neutral-50 dark:bg-neutral-900/10 overflow-hidden h-44 flex flex-col justify-between group">
          {/* Styled schematic grids representing Jaipur */}
          <div className="absolute inset-0 opacity-15 dark:opacity-10 pointer-events-none">
            {/* Horizontal streets */}
            <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-neutral-950" />
            <div className="absolute top-2/4 left-0 right-0 h-0.5 bg-neutral-950" />
            <div className="absolute top-3/4 left-0 right-0 h-0.5 bg-neutral-950" />
            {/* Vertical roads */}
            <div className="absolute top-0 bottom-0 left-1/3 w-0.5 bg-neutral-950" />
            <div className="absolute top-0 bottom-0 left-2/3 w-0.5 bg-neutral-950" />
            {/* Diagonal highway */}
            <div className="absolute top-0 left-0 w-[150%] h-0.5 bg-neutral-950 rotate-12 origin-top-left" />
          </div>

          {/* Map point marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
            <span className="flex h-3 w-3 relative mb-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-white" />
            </span>
            <span className="px-2 py-0.5 bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-[9px] font-mono rounded shadow">
              JAIPUR, IN
            </span>
          </div>

          <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 z-10">
            JAIPUR CENTER REGION
          </span>

          <span className="text-[11px] font-sans text-neutral-500 dark:text-neutral-400 z-10 leading-relaxed font-medium">
            Jaipur is Rajasthan's iconic "Pink City". Located in GMT+5:30.
          </span>
        </div>
      </div>

      {/* Right side - Form Panel (7 slots) */}
      <div className="lg:col-span-7">
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="p-6 md:p-8 rounded-2xl border border-neutral-200/50 dark:border-neutral-800/50 bg-white/40 dark:bg-neutral-900/20 glass-card space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="text-[11px] font-mono font-semibold text-neutral-400 dark:text-neutral-500 uppercase">
                Your Full Name *
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-sm text-neutral-800 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-sans"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="contact-email" className="text-[11px] font-mono font-semibold text-neutral-400 dark:text-neutral-500 uppercase">
                Email Address *
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. john@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-sm text-neutral-800 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-sans"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-1.5">
            <label htmlFor="contact-subject" className="text-[11px] font-mono font-semibold text-neutral-400 dark:text-neutral-500 uppercase">
              Topic / Subject
            </label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Project Proposal or Hiring Role"
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-sm text-neutral-800 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-sans"
            />
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label htmlFor="contact-message" className="text-[11px] font-mono font-semibold text-neutral-400 dark:text-neutral-500 uppercase">
              Message / Requirements *
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your project needs, ideas, or message here..."
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-sm text-neutral-800 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-sans resize-none"
            />
          </div>

          {/* Alert messages */}
          <AnimatePresence mode="wait">
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center space-x-2 text-xs font-mono"
              >
                <CheckCircle className="w-4.5 h-4.5 shrink-0" />
                <span>Message dispatched successfully! I will reach out shortly.</span>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 flex items-center space-x-2 text-xs font-mono"
              >
                <AlertCircle className="w-4.5 h-4.5 shrink-0" />
                <span>Encountered sending failure. Please email directly!</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 hover:bg-emerald-600 dark:hover:bg-emerald-500 hover:text-white dark:hover:text-white font-mono text-xs font-semibold rounded-xl transition-all disabled:opacity-50 cursor-pointer shadow"
          >
            {isSubmitting ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>DISPATCHING TRANSMISSION...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>TRANSMIT MESSAGE SECURELY</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
