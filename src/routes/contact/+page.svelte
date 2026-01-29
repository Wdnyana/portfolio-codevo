<script lang="ts">
  import { Mail, MapPin } from 'lucide-svelte'
  import Seo from '$lib/components/atoms/Seo.svelte'

  import ContactForm from '$lib/components/organisms/ContactForm.svelte'
  import { animate } from '$lib/actions/animate'
</script>

<Seo
  title="Start a Project"
  description="Ready to scale your business? Contact Codevo Solutions in Bali for a consultation on Custom SaaS & AI Automation."
/>

<section class="px-4 py-20 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-7xl">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
      <div class="space-y-8" use:animate={{ type: 'slide' }}>
        <div class="space-y-4">
          <span class="font-mono text-sm tracking-wider text-quark-beam">START A PARTNERSHIP</span>
          <h1 class="font-display text-4xl font-bold text-white md:text-5xl">
            Let's Build Something Ambitious
          </h1>
          <p class="text-lg leading-relaxed text-zinc-400">
            Ready to stop managing spreadsheets and start managing an empire? Tell us about your
            bottlenecks, and we'll engineer the solution.
          </p>
        </div>

        <div class="space-y-6 pt-6">
          <div class="flex items-start gap-4">
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-quark-beam"
            >
              <Mail class="h-5 w-5" />
            </div>
            <div>
              <h3 class="font-display font-bold text-white">Email Us</h3>
              <a
                href="mailto:dev.codevo@gmail.com"
                class="text-zinc-400 transition-colors hover:text-white"
              >
                dev.codevo@gmail.com
              </a>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-quark-beam"
            >
              <MapPin class="h-5 w-5" />
            </div>
            <div>
              <h3 class="font-display font-bold text-white">Lab HQ</h3>
              <p class="text-zinc-400">
                Bali, Indonesia<br />
                Serving Clients Globally
              </p>
            </div>
          </div>
        </div>
      </div>

      <div use:animate={{ delay: 0.2 }} class="w-full">
        <ContactForm />
      </div>
    </div>
  </div>
</section>