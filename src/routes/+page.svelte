<script lang="ts">
  import Hero from '$lib/components/organisms/Hero.svelte'
  import Seo from '$lib/components/atoms/Seo.svelte'
  import BentoCard from '$lib/components/molecules/BentoCard.svelte'
import { Code, Database, Cpu, Zap, Handshake, Rocket } from 'lucide-svelte'
  import { animate } from '$lib/actions/animate'
</script>

<Seo
  title="Strategic Software Laboratory"
  description="Codevo Solutions transforms manual businesses into automated digital empires through custom SaaS and AI integration."
/>

<div class="relative z-10">
  <Hero />

<section class="px-4 py-20 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl space-y-12">
      <div class="space-y-4 text-center" use:animate>
        <h2 class="font-display text-3xl font-bold text-white md:text-4xl">
          The Codevo Difference
        </h2>
        <p class="mx-auto max-w-2xl text-zinc-400">
          Stop relying on fragile spreadsheets. We build robust systems that turn your operations into a competitive advantage.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div class="md:col-span-2" use:animate={{ delay: 0.1 }}>
          <BentoCard
            title="Custom Digital Infrastructure"
            description="We don't force your business into generic templates. We build precision software that adapts to your unique workflow, organizing chaos into a streamlined operation."
            icon={Code}
          />
        </div>

        <div use:animate={{ delay: 0.2 }}>
          <BentoCard
            title="Dedicated Tech Partner"
            description="We don't just deliver and disappear. Codevo acts as your long-term internal tech team, scaling the product as your business grows."
            icon={Handshake}
          />
        </div>

        <div use:animate={{ delay: 0.3 }}>
          <BentoCard
            title="Intelligent Automation"
            description="Deploy custom AI Agents to handle the busywork. We automate repetitive tasks so your team can focus on high-value strategy."
            icon={Cpu}
          />
        </div>

        <div class="md:col-span-2" use:animate={{ delay: 0.4 }}>
          <BentoCard
            title="Rapid MVP Launch"
            description="Speed is our currency. We turn concepts into market-ready products in weeks, not months, helping you validate ideas and secure revenue faster."
            icon={Rocket}
          />
        </div>
      </div>
    </div>
  </section>
</div>