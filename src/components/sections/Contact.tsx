import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { track } from "@vercel/analytics";

export default function Contact() {
  const { t } = useTranslation("contact");

  return (
    <section id="contact" className="pb-16">
      <SectionHeading section="contact" />
      <div className="flex items-center justify-center gap-3">
        <Reveal>
          <a href="https://github.com/NomadicAlternative" target="_blank" rel="noopener noreferrer"
            onClick={() => track("github_click")}
            className="group flex min-w-[88px] flex-col items-center gap-2 rounded-2xl border border-line p-4 transition-all hover:border-accent/40 hover:bg-surface">
            <FaGithub className="size-6 text-muted transition-colors group-hover:text-accent" />
            <span className="text-xs text-dim">{t("github")}</span>
          </a>
        </Reveal>
        <Reveal delay={0.08}>
          <a href="https://www.linkedin.com/in/diego-garcía-campagne-a53090171" target="_blank" rel="noopener noreferrer"
            onClick={() => track("linkedin_click")}
            className="group flex min-w-[88px] flex-col items-center gap-2 rounded-2xl border border-line p-4 transition-all hover:border-accent/40 hover:bg-surface">
            <FaLinkedin className="size-6 text-muted transition-colors group-hover:text-accent" />
            <span className="text-xs text-dim">{t("linkedin")}</span>
          </a>
        </Reveal>
        <Reveal delay={0.16}>
          <a href="mailto:diegoartemiogarcia@icloud.com"
            onClick={() => track("email_click")}
            className="group flex min-w-[88px] flex-col items-center gap-2 rounded-2xl border border-line p-4 transition-all hover:border-accent/40 hover:bg-surface">
            <HiMail className="size-6 text-muted transition-colors group-hover:text-accent" />
            <span className="text-xs text-dim">{t("email")}</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
