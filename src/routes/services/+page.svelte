<script lang="ts">
  import BentoCard from '$lib/components/molecules/BentoCard.svelte'
  import Seo from '$lib/components/atoms/Seo.svelte'

  import { Code, Database, Cpu, Zap, Rocket, Handshake } from 'lucide-svelte'
  
  import { animate } from '$lib/actions/animate'

  const services = [
    {
      title: 'Custom Digital Infrastructure',
      description: 'We engineer tailored platforms that adapt to your specific workflow. No generic templates—just precision software designed to organize chaos and streamline your operations.',
      icon: Code,
      class: 'md:col-span-2',
    },
    {
      title: 'Rapid MVP Launch', 
      description: 'Validate your startup idea fast. We turn concepts into market-ready products in weeks, not months, helping you secure early users and revenue immediately.',
      icon: Rocket, // Sekarang error ini akan hilang
    },
    {
      title: 'Intelligent Automation',
      description: 'Deploy custom AI Agents to handle the busywork. From complex data entry to 24/7 customer support, we build smart systems that work while you sleep.',
      icon: Cpu,
    },
    {
      title: 'High-Performance API',
      description: 'Sub-millisecond latency connections that ensure your apps feel "instant" to users, eliminating lag even during peak traffic hours.',
      icon: Zap,
    },
    {
      title: 'Dedicated Tech Partner', 
      description: 'We don’t just deliver and disappear. Codevo acts as your internal tech team—maintaining, fixing, and scaling your product as your business grows.',
      icon: Handshake, // Ini juga sudah diperbaiki
    },
    {
      title: 'System Modernization',
      description: 'Transform legacy bottlenecks and spreadsheets into modern digital assets. We refactor old systems without disrupting your daily business flow.',
      icon: Database,
      class: 'md:col-span-2',
    },
  ]
</script>

<Seo
  title="Engineering Services"
  description="Codevo Solutions provides custom SaaS architecture, AI automation, and system modernization to help businesses scale efficiently."
/>

<section class="px-4 py-20 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-7xl space-y-12">
    <div class="space-y-4 text-center">
      <h1 class="font-display text-4xl font-bold text-white md:text-5xl">
        Beyond "Just a Website"
      </h1>
      <p class="mx-auto max-w-2xl text-zinc-400">
        We architect digital ecosystems that solve critical business problems, automate manual work, and drive revenue.
      </p>
    </div>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      {#each services as service, i}
        <div class={service.class} use:animate={{ delay: i * 0.1 }}>
          <BentoCard
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        </div>
      {/each}
    </div>
  </div>
</section>