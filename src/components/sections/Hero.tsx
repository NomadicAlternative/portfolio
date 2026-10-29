import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { SiReact, SiNodedotjs, SiTypescript, SiPostgresql, SiMqtt, SiEspressif, SiC } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { track } from "@vercel/analytics";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Hero() {
  const { t } = useTranslation("hero");

  return (
    <motion.section
      id="hero"
      className="flex items-center px-4 pt-28 pb-14 md:pt-32 md:pb-16"
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:gap-16">
        {/* Left: Photo */}
        <motion.div variants={itemVariants} className="shrink-0">
          <img
            src="/photo.jpg"
            alt="Diego García"
            className="size-[150px] rounded-full border-2 border-line object-cover shadow-[0_0_40px_rgba(251,146,60,0.15)] md:size-[160px]"
            width="160"
            height="160"
          />
        </motion.div>

        {/* Right: Content */}
        <div className="flex flex-col text-center md:text-left">
          <motion.h1 variants={itemVariants} className="mb-3 text-4xl font-normal tracking-[-0.04em] text-ink md:text-5xl">
            Diego García
          </motion.h1>

          <motion.p variants={itemVariants} className="mb-5 max-w-xl text-lg leading-relaxed text-muted">
            {t("description")}
          </motion.p>

          <motion.div variants={itemVariants} className="mb-5 flex flex-wrap justify-center gap-2 md:justify-start">
            {[
              { icon: SiReact, label: "React" },
              { icon: SiTypescript, label: "TS" },
              { icon: SiNodedotjs, label: "Node.js" },
              { icon: SiPostgresql, label: "Postgres" },
              { icon: SiMqtt, label: "MQTT" },
              { icon: SiEspressif, label: "ESP32" },
              { icon: SiC, label: "C" },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface-2 px-2.5 py-1 text-xs text-muted">
                <Icon className="size-3" />{label}
              </span>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 md:justify-start">
            <a href="https://github.com/NomadicAlternative" target="_blank" rel="noopener noreferrer"
              onClick={() => track("github_click")}
              className="inline-flex items-center gap-2 rounded-lg border border-accent/50 bg-bg px-5 py-2.5 text-sm font-medium text-accent/80 transition-colors hover:bg-accent/10">
              <FaGithub className="size-4" />GitHub
            </a>
            <a href="https://www.linkedin.com/in/diego-garcía-campagne-a53090171" target="_blank" rel="noopener noreferrer"
              onClick={() => track("linkedin_click")}
              className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-ink">
              <FaLinkedin className="size-4" />LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
