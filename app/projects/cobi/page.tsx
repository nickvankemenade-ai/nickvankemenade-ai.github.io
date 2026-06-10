import { projects } from "@/lib/projects";
import Artifact from "@/components/Artifact";

export default function ProjectPage({ params }: any) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) return <div>Not found</div>;

  return (
    <main className="bg-neutral-950 text-neutral-100 min-h-screen px-8 py-16 max-w-4xl mx-auto">

      {/* HERO */}
      <h1 className="text-4xl font-semibold">{project.title}</h1>
      <p className="text-neutral-400 mt-3">{project.summary}</p>

      <div className="mt-8">
        <Artifact {...project.heroArtifact} />
      </div>

      {/* ARTIFACTS */}
      <section className="mt-12">
        <h2 className="text-xl mb-4">Artifacts</h2>

        <div className="space-y-6">
          {project.artifacts.map((a, i) => (
            <div key={i}>
              <Artifact {...a} />
              {a.caption && (
                <p className="text-sm text-neutral-500 mt-2">
                  {a.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* LINKS */}
      <section className="mt-12 text-sm text-neutral-400">
        {project.links.paper && (
          <a className="underline" href={project.links.paper}>
            Paper
          </a>
        )}
      </section>

    </main>
  );
}