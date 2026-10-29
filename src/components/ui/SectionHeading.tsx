import { useTranslation } from "react-i18next";

interface SectionHeadingProps {
  /** Namespace key for i18n title lookup (e.g. "hero", "about") */
  section: string;
}

export default function SectionHeading({ section }: SectionHeadingProps) {
  const { t } = useTranslation(section);

  return (
    <div className="mb-12">
      <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
        {t("kicker")}
      </p>
      <h2 className="text-[32px] font-normal tracking-[-0.035em] text-ink">
        {t("title")}
      </h2>
    </div>
  );
}
