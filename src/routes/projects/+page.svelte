<script lang="ts">
  import { ArrowUpRight } from 'lucide-svelte'
  import { projects } from '$lib/data/projects'
  import Seo from '$lib/components/atoms/Seo.svelte'

  import { spotlight } from '$lib/actions/spotlight'
  import { animate } from '$lib/actions/animate'
</script>

<Seo
  title="Selected Case Studies"
  description="Explore how we've helped businesses transform through custom software and automation."
/>

<section class="px-4 py-20 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-7xl space-y-12">
    <div class="space-y-4 text-center">
      <h1 class="font-display text-4xl font-bold text-white md:text-5xl">Proven Results</h1>
      <p class="mx-auto max-w-2xl text-zinc-400">
        A collection of mission-critical systems we've engineered and shipped.
      </p>
    </div>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      {#each projects as project, i}
        <div
          use:spotlight
          use:animate={{ delay: i * 0.1 }}
          class="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-panel/50 transition-colors hover:border-quark-beam/50"
        >
          <div
            class="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style="background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(245, 158, 11, 0.15), transparent 40%);"
          ></div>

          <div class="relative z-10 flex h-full flex-col">
            <div
              class="flex aspect-video w-full items-center justify-center border-b border-white/5 bg-zinc-800/50 text-zinc-600"
            >
              <span class="font-mono text-sm">{project.slug}_preview.jpg</span>
            </div>

            <div class="flex flex-grow flex-col justify-between space-y-4 p-6">
              <div>
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <h3 class="font-display text-xl leading-tight font-bold text-white">
                      <a
                        href="/projects/{project.slug}"
                        class="transition-colors hover:text-quark-beam"
                      >
                        {project.title}
                      </a>
                    </h3>
                    <p class="mt-1 font-mono text-xs text-quark-beam">
                      {project.year} • {project.subtitle}
                    </p>
                  </div>

                  <a
                    href="/projects/{project.slug}"
                    class="shrink-0 rounded-full p-1 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                    aria-label="View Project"
                  >
                    <ArrowUpRight class="h-5 w-5" />
                  </a>
                </div>

                <p
                  class="mt-4 line-clamp-3 text-sm leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200"
                >
                  {project.description}
                </p>
              </div>

              <div class="mt-auto flex flex-wrap gap-2 pt-4">
                {#each project.techStack.slice(0, 3) as tech}
                  <span
                    class="rounded-md border border-white/5 bg-void/50 px-2 py-1 font-mono text-[10px] tracking-wider text-zinc-500 uppercase transition-colors duration-300 group-hover:border-white/10 group-hover:text-zinc-400"
                  >
                    {tech}
                  </span>
                {/each}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>