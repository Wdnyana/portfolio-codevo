<script lang="ts">
	import { contactSchema } from '$lib/helpers/schemas'
	import { Loader2, Send } from 'lucide-svelte'

	import { PUBLIC_WEB3FORMS_KEY } from '$env/static/public'

	let formData = $state({
		name: '',
		email: '',
		message: '',
		access_key: PUBLIC_WEB3FORMS_KEY,
	})

	let errors = $state<Record<string, string>>({})
	let status = $state<'idle' | 'submitting' | 'success' | 'error'>('idle')

async function handleSubmit(e: Event) {
    e.preventDefault()
    status = 'submitting'
    errors = {}

    // 1. Client-Side Validation
    const result = contactSchema.safeParse(formData)

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        errors[issue.path[0] as string] = issue.message
      })
      status = 'idle'
      return
    }

    // 2. API Submission
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      )

      if (response.ok) {
        status = 'success'
        // Reset form
        formData.name = ''
        formData.email = ''
        formData.message = ''
      } else {
        status = 'error'
      }
    } catch (err) {
      status = 'error'
    }
  }
</script>

<form
	onsubmit={handleSubmit}
	class="mx-auto max-w-lg space-y-6 rounded-xl border border-border bg-panel/30 p-6 backdrop-blur-sm"
>
	{#if status === 'success'}
		<div
			class="rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-center text-green-400"
		>
			Message transmitted. We will clarify shortly.
		</div>
	{/if}

	<div class="space-y-2">
		<label for="name" class="font-mono text-sm text-text-muted">/IDENTIFIER (Name)</label>
		<input
			type="text"
			id="name"
			bind:value={formData.name}
			class="w-full rounded-md border border-border bg-void p-3 text-primary placeholder-zinc-700 transition-all focus:border-quark-beam focus:ring-1 focus:ring-quark-beam focus:outline-none"
			placeholder="Enter your name"
		/>
		{#if errors.name}
			<p class="font-mono text-xs text-red-400">{errors.name}</p>
		{/if}
	</div>

	<div class="space-y-2">
		<label for="email" class="font-mono text-sm text-text-muted">/CONTACT_POINT (Email)</label>
		<input
			type="email"
			id="email"
			bind:value={formData.email}
			class="w-full rounded-md border border-border bg-void p-3 text-primary placeholder-zinc-700 transition-all focus:border-quark-beam focus:ring-1 focus:ring-quark-beam focus:outline-none"
			placeholder="name@company.com"
		/>
		{#if errors.email}
			<p class="font-mono text-xs text-red-400">{errors.email}</p>
		{/if}
	</div>

	<div class="space-y-2">
		<label for="message" class="font-mono text-sm text-text-muted">/PAYLOAD (Message)</label>
		<textarea
			id="message"
			bind:value={formData.message}
			rows="4"
			class="w-full rounded-md border border-border bg-void p-3 text-primary placeholder-zinc-700 transition-all focus:border-quark-beam focus:ring-1 focus:ring-quark-beam focus:outline-none"
			placeholder="Describe your project requirements..."
		></textarea>
		{#if errors.message}
			<p class="font-mono text-xs text-red-400">{errors.message}</p>
		{/if}
	</div>

	<button
		type="submit"
		disabled={status === 'submitting'}
		class="flex w-full items-center cursor-pointer justify-center gap-2 rounded-md bg-primary py-3 font-bold text-void transition-all hover:bg-quark-beam hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
	>
		{#if status === 'submitting'}
			<Loader2 class="h-4 w-4 animate-spin" /> Transmitting...
		{:else}
			<Send class="h-4 w-4" /> Initialize Connection
		{/if}
	</button>

	{#if status === 'error'}
		<p class="text-center text-sm text-red-400">Transmission failed. Please try again.</p>
	{/if}
</form>
