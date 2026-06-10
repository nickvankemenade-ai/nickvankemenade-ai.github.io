import { projects } from "@/lib/projects";
import Artifact from "@/components/Artifact";
import FeaturedCarousel from "@/components/FeaturedCarousel";

export default function Home() {
  const ae = projects.find((p) => p.id === "ae");

  return (
    <main className="bg-neutral-950 text-neutral-100 min-h-screen">

      {/* HERO */}
      <section className="px-8 pt-24 max-w-6xl mx-auto">
        <h1 className="text-5xl font-semibold">Nick</h1>

        <p className="mt-4 text-xl text-neutral-300">
          Machine Learning Scientist & Engineer
        </p>

        <p className="mt-6 text-neutral-400 max-w-xl">
          Developing efficient neural architectures,
          representation learning methods,
          and intelligent systems.
        </p>
      </section>

      {/* CAROUSEL */}
      <section className="mt-16">
        <FeaturedCarousel />
      </section>

      {/* CURRENT WORK */}
      <section className="mt-24 px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl">Current Research</h2>

        <p className="mt-4 text-neutral-300">
          Autoencoder Architectures (In Progress)
        </p>

        <p className="text-neutral-500 mt-2 max-w-xl">
          Investigating latent structure formation, PCA trajectories,
          and reconstruction dynamics.
        </p>

        <div className="mt-6 max-w-lg">
          {ae && (
            <Artifact {...ae.homepageArtifact} />
          )}
        </div>
      </section>

      {/* OTHER WORK */}
      <section className="mt-24 px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl">Other Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {projects
            .filter((p) => p.id !== "ae")
            .map((p) => (
              <div
                key={p.id}
                className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg"
              >
                <h3>{p.title}</h3>
                <p className="text-sm text-neutral-400 mt-2">
                  {p.summary}
                </p>
              </div>
            ))}
        </div>
      </section>

    </main>
  );
}