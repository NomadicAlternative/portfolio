import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import Reveal from "../ui/Reveal";

export default function Projects() {
  return (
    <section id="projects">
      <SectionHeading section="projects" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Reveal delay={0}>
          <ProjectCard
            projectKey="beepdash"
            tags={["SaaS", "IoT", "AI"]}
            screenshots={[
              "/projects/beepdash-1.png",
              "/projects/beepdash-2.png",
              "/projects/beepdash-3.png",
              "/projects/beepdash-4.png",
              "/projects/beepdash-5.png",
              "/projects/beepdash-6.png",
            ]}
          />
        </Reveal>
        <Reveal delay={0.08}>
          <ProjectCard
            projectKey="lps"
            tags={["Dashboard", "AI", "Real-time"]}
            screenshots={[
              "/projects/lps-1.png",
              "/projects/lps-2.png",
              "/projects/lps-3.png",
              "/projects/lps-4.png",
            ]}
          />
        </Reveal>
        <Reveal delay={0.16}>
          <ProjectCard
            projectKey="beepdash-api"
            tags={["API", "JWT", "MQTT"]}
            screenshots={[
              "/projects/api-swagger.png",
              "/projects/api-arch.png",
            ]}
          />
        </Reveal>
        <Reveal delay={0.24}>
          <ProjectCard
            projectKey="ordo"
            tags={["Landing", "Branding", "SEO"]}
            screenshots={[
              "/projects/ordo-1.png",
              "/projects/ordo-2.png",
            ]}
          />
        </Reveal>
        <Reveal delay={0.32}>
          <ProjectCard
            projectKey="calendario"
            tags={["Next.js", "PWA", "iCal"]}
            screenshots={[
              "/projects/cal-1.png",
              "/projects/cal-2.png",
              "/projects/cal-3.png",
            ]}
            live
          />
        </Reveal>
        <Reveal delay={0.40}>
          <ProjectCard
            projectKey="taskflow"
            tags={["Web App", "Full-Stack", "Team"]}
            screenshots={[
              "/projects/taskflow-1.png",
              "/projects/taskflow-2.png",
            ]}
          />
        </Reveal>
      </div>
    </section>
  );
}
