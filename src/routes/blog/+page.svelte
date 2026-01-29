<script lang="ts">
  import { ArrowRight } from 'lucide-svelte'
  import Seo from '$lib/components/atoms/Seo.svelte'

  import { spotlight } from '$lib/actions/spotlight'
  import { animate } from '$lib/actions/animate'

  const articles = [
    {
      title: 'Why Custom SaaS Outperforms Template Solutions',
      excerpt: 'Analyzing the long-term ROI of building tailored infrastructure versus renting generic platforms.',
      date: '2024-03-15',
      tags: ['Strategy', 'SaaS'],
      slug: 'custom-saas-roi',
    },
    {
      title: 'Automating Operations with Local AI Agents',
      excerpt:
        'How we implemented secure, private AI agents to handle 80% of routine data entry tasks.',
      date: '2024-02-28',
      tags: ['AI', 'Automation', 'Privacy'],
      slug: 'local-ai-automation',
    },
    {
      title: 'From Monolith to Microservices: A Migration Guide',
      excerpt: 'Lessons learned from modernizing a legacy system while keeping the business running.',
      date: '2024-01-10',
      tags: ['Modernization', 'Architecture'],
      slug: 'legacy-migration-guide',
    },
  ]
</script>

<Seo
  title="Insights & Strategies"
  description="Strategic insights on digital transformation, AI automation, and custom software architecture from Codevo Labs."
/>

<section class="px-4 py-20 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-4xl space-y-12">
    <div class="space-y-4">
      <span class="font-mono text-sm tracking-wider text-quark-beam">LAB NOTES / BLOG</span>
      <h1 class="font-display text-4xl font-bold text-white md:text-5xl">Insights from the Lab</h1>
      <p class="max-w-2xl text-zinc-400">
        We share what works. Strategic thinking and technical deep-dives from our daily work building products.
      </p>
    </div>

    <div class="grid gap-6">
      {#each articles as article, i}
        <article
          use:spotlight
          use:animate={{ delay: i * 0.1 }}
          class="group relative overflow-hidden rounded-xl border border-border bg-panel/50 transition-colors hover:border-quark-beam/50"
        >
          <div
            class="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style="background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(245, 158, 11, 0.15), transparent 40%);"
          ></div>

          <div class="relative z-10 p-6 md:p-8">
            <a
              href={`/blog/${article.slug}`}
              class="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between"
            >
              <div class="space-y-4">
                <div class="flex flex-wrap items-center gap-3 font-mono text-xs text-zinc-500">
                  <time datetime={article.date} class="text-zinc-400">{article.date}</time>
                  <span class="text-zinc-700">•</span>
                  <div class="flex gap-2">
                    {#each article.tags as tag}
                      <span
                        class="rounded-md border border-white/5 bg-void/50 px-2 py-1 text-zinc-400 transition-colors group-hover:border-white/10 group-hover:text-zinc-300"
                      >
                        #{tag}
                      </span>
                    {/each}
                  </div>
                </div>

                <div>
                  <h2
                    class="font-display text-2xl font-bold text-white transition-colors group-hover:text-quark-beam"
                  >
                    {article.title}
                  </h2>
                  <p
                    class="mt-3 max-w-2xl leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200"
                  >
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div
                class="shrink-0 -translate-x-2 self-start opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:self-center"
              >
                <ArrowRight class="h-6 w-6 text-quark-beam" />
              </div>
            </a>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>