import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f3ef] text-[#111111]">
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-16 pt-32 md:px-10 md:pb-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-6xl">
            <p className="mb-8 text-xs font-medium uppercase tracking-[0.3em] text-black/40">
              Intelligent Home
            </p>

            <h1 className="text-[clamp(4rem,12vw,11rem)] font-medium leading-[0.82] tracking-[-0.07em]">
              INTELLIGENT
              <br />
              HOME.
            </h1>

            <div className="mt-12 flex flex-col justify-between gap-8 border-t border-black/10 pt-6 md:flex-row md:items-end">
              <p className="max-w-xl text-lg leading-relaxed text-black/55 md:text-xl">
                Technology designed around the way you live. Lumora creates
                intelligent spaces that are comfortable, secure, efficient,
                and effortless.
              </p>

              <a
                href="#solutions"
                className="group flex items-center gap-4 text-sm font-medium"
              >
                Explore Lumora

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition-transform duration-300 group-hover:translate-x-1">
                  ↘
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-t border-black/10 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-black/40">
              The Lumora System
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
              Technology should disappear into the way you live.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-black/50">
              Lumora brings lighting, security, climate, entertainment, and
              automation together into one intelligent environment designed
              around you.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section
        id="solutions"
        className="bg-[#111111] px-6 py-24 text-white md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/40">
                Solutions
              </p>

              <h2 className="text-5xl font-medium leading-[0.95] tracking-[-0.05em] md:text-7xl">
                Built around
                <br />
                your life.
              </h2>
            </div>

            <p className="max-w-sm leading-relaxed text-white/45">
              Intelligent systems designed to work together instead of
              competing for your attention.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2">
            <SolutionCard
              number="01"
              title="Smart Lighting"
              description="Create the right atmosphere automatically with intelligent lighting scenes."
            />

            <SolutionCard
              number="02"
              title="Smart Security"
              description="Know what is happening at home with connected cameras, access, and monitoring."
            />

            <SolutionCard
              number="03"
              title="Climate Control"
              description="Maintain the perfect environment with intelligent temperature management."
            />

            <SolutionCard
              number="04"
              title="Entertainment"
              description="Bring music, television, and cinema together into effortless experiences."
            />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="px-6 py-24 md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-black/40">
              Selected Projects
            </p>

            <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              Spaces we've
              <br />
              transformed.
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <ProjectCard
              title="The Modern Residence"
              location="Lagos, Nigeria"
              image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85"
            />

            <ProjectCard
              title="The Executive Apartment"
              location="Abuja, Nigeria"
              image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-black/10 px-6 py-24 md:px-10 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-black/40">
              About Lumora
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
              The smartest home is the one that feels effortless.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-black/50">
              Lumora designs and integrates intelligent home technology for
              modern residences, apartments, and commercial spaces across
              Nigeria and Africa.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/50">
              From the first consultation to installation and ongoing support,
              we create technology systems that feel natural, intuitive, and
              completely connected.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-[#111111] px-6 py-24 text-white md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-white/40">
            Start a project
          </p>

          <h2 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] md:text-8xl">
            Let's create
            <br />
            your intelligent home.
          </h2>

          <div className="mt-16 grid gap-12 border-t border-white/10 pt-10 md:grid-cols-2">
            <div>
              <p className="text-sm text-white/40">
                Email
              </p>

              <a
                href="mailto:hello@lumora.com"
                className="mt-3 inline-block text-xl transition-opacity hover:opacity-60"
              >
                hello@lumora.com
              </a>
            </div>

            <div>
              <p className="text-sm text-white/40">
                Service Area
              </p>

              <p className="mt-3 text-xl">
                Nigeria · Africa
              </p>
            </div>
          </div>

          <a
            href="mailto:hello@lumora.com"
            className="mt-12 inline-flex items-center gap-4 rounded-full bg-white px-7 py-5 text-sm font-medium text-black transition-transform duration-300 hover:scale-105"
          >
            Start a conversation
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111111] px-6 pb-8 text-white md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row">
          <p>
            © 2026 Lumora. All rights reserved.
          </p>

          <p>
            Intelligent Home.
          </p>
        </div>
      </footer>
    </main>
  );
}

/* SOLUTION CARD */

function SolutionCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <article className="group bg-[#111111] p-8 transition-colors duration-500 hover:bg-[#1a1a1a] md:p-12">
      <div className="flex min-h-[280px] flex-col justify-between">
        <span className="text-xs tracking-[0.2em] text-white/30">
          {number}
        </span>

        <div>
          <h3 className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">
            {title}
          </h3>

          <p className="mt-4 max-w-md leading-relaxed text-white/40">
            {description}
          </p>
        </div>

        <div className="mt-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sm transition-transform duration-300 group-hover:translate-x-1">
          ↗
        </div>
      </div>
    </article>
  );
}

/* PROJECT CARD */

function ProjectCard({
  title,
  location,
  image,
}: {
  title: string;
  location: string;
  image: string;
}) {
  return (
    <article className="group">
      <div className="aspect-[4/3] overflow-hidden rounded-[2rem] bg-black">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="mt-5 flex items-start justify-between gap-5">
        <div>
          <h3 className="text-xl font-medium tracking-[-0.03em]">
            {title}
          </h3>

          <p className="mt-1 text-sm text-black/40">
            {location}
          </p>
        </div>

        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 transition-transform duration-300 group-hover:translate-x-1">
          ↗
        </span>
      </div>
    </article>
  );
}