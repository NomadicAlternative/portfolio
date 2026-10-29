import { useTranslation } from "react-i18next";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

interface ExpEntry {
  year: string;
  title: string;
  description: string;
}

export default function About() {
  const { t } = useTranslation("about");
  const entries = t("timeline", { returnObjects: true }) as ExpEntry[];
  const bio = t("bio");

  return (
    <section id="about">
      <SectionHeading section="about" />
      <Reveal>
        <p className="mb-10 max-w-3xl text-base leading-relaxed text-muted">{bio}</p>
      </Reveal>
      {Array.isArray(entries) && (
        <div className="grid gap-3 sm:grid-cols-2">
          {entries.map((entry, i) => (
            <Reveal key={entry.year} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent/40">
                <span className="mb-1 block text-xs font-medium text-accent">{entry.year}</span>
                <h3 className="text-sm font-medium text-ink">{entry.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{entry.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
