import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiEspressif,
} from "react-icons/si";

const techIcons = [
  { icon: SiReact, label: "React" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiPostgresql, label: "PostgreSQL" },
  { icon: SiEspressif, label: "ESP32" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center gap-6">
          {/* Tech stack icons */}
          <div className="flex items-center gap-6">
            {techIcons.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="text-2xl text-dim transition-colors hover:text-accent"
                title={label}
                aria-label={label}
              >
                <Icon />
              </span>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-dim">
            &copy; {new Date().getFullYear()} Diego García ·{" "}
            <a
              href="https://github.com/NomadicAlternative"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-ink"
            >
              Nomadic Alternative
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
