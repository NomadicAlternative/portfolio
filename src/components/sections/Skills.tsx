import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

interface SkillCategory {
  label: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  { label: "Frontend", skills: ["JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Recharts"] },
  { label: "Backend", skills: ["Node.js", "Express", "MongoDB", "Mongoose", "PostgreSQL", "Prisma", "Python", "C#", "JWT", "OAuth"] },
  { label: "APIs & Auth", skills: ["REST", "Swagger/OpenAPI", "Auth.js", "Zod", "Supabase"] },
  { label: "IoT & Firmware", skills: ["MQTT", "ESP32", "C", "PlatformIO", "Arduino", "OTA"] },
];

export default function Skills() {
  return (
    <section id="skills">
      <SectionHeading section="skills" />
      <div className="space-y-4">
        {categories.map((cat, i) => (
          <Reveal key={cat.label} delay={i * 0.08}>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="min-w-[90px] shrink-0 text-xs font-medium text-accent">{cat.label}</span>
              <span className="text-xs leading-relaxed text-muted">
                {cat.skills.join(" · ")}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
