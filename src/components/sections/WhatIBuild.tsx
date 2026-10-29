import { SiVercel, SiEspressif, SiOpenapiinitiative, SiOpenai } from "react-icons/si";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { useTranslation } from "react-i18next";

interface CardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function BuildCard({ icon: Icon, title, description }: CardProps) {
  return (
    <div className="group h-full rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:border-accent/40 hover:bg-surface-2">
      <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
        <Icon className="size-5" />
      </div>
      <h3 className="mb-2 text-base font-medium text-ink">{title}</h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}

export default function WhatIBuild() {
  const { t } = useTranslation("what-i-build");

  const cards = [
    { icon: SiVercel, title: t("saas.title"), description: t("saas.description") },
    { icon: SiEspressif, title: t("iot.title"), description: t("iot.description") },
    { icon: SiOpenapiinitiative, title: t("tools.title"), description: t("tools.description") },
    { icon: SiOpenai, title: t("ai.title"), description: t("ai.description") },
  ];

  return (
    <section id="what-i-build">
      <SectionHeading section="what-i-build" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.08}>
            <BuildCard {...card} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
