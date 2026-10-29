import { useTranslation } from "react-i18next";
import { SiOpenapiinitiative } from "react-icons/si";
import { HiOutlineSearch, HiOutlineBeaker, HiOutlineShieldCheck } from "react-icons/hi";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const STEP_ICONS = { spec: SiOpenapiinitiative, explore: HiOutlineSearch, build: HiOutlineBeaker, review: HiOutlineShieldCheck } as const;

interface StepData { title: string; description: string; icon: keyof typeof STEP_ICONS }

export default function HowIWork() {
  const { t } = useTranslation("howIWork");
  const steps = t("steps", { returnObjects: true }) as StepData[];

  return (
    <section id="how-i-work">
      <SectionHeading section="howIWork" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.isArray(steps) && steps.map((step, i) => {
          const Icon = STEP_ICONS[step.icon];
          return (
            <Reveal key={step.icon} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent/40">
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-slate-200/10 text-slate-200">
                  <Icon className="size-5" />
                </div>
                <div className="mb-1 text-[10px] font-medium uppercase tracking-[0.16em] text-accent">0{i + 1}</div>
                <h3 className="text-sm font-medium text-ink">{step.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">{step.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
