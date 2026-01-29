<script lang="ts">
	import Seo from '$lib/components/atoms/Seo.svelte'
	import { siteConfig } from '$lib/data/site'
</script>

<Seo
	title="Terms of Service"
	description="Terms and conditions for using Codevo Solutions services."
/>

<div class="mx-auto max-w-4xl px-6 py-24 lg:px-8">
	<div class="mb-16 space-y-4">
		<span class="font-mono text-sm tracking-wider text-quark-beam uppercase">Legal</span>
		<h1 class="font-display text-4xl font-bold text-white sm:text-5xl">Terms of Service</h1>
		<p class="text-zinc-400">Last updated: January 2026</p>
	</div>

	<div class="prose prose-lg max-w-none space-y-12 text-zinc-300 prose-invert">
		<section class="space-y-4">
			<h2 class="font-display text-2xl font-bold text-white">1. Agreement to Terms</h2>
			<p>
				These Terms of Service constitute a legally binding agreement made between you, whether
				personally or on behalf of an entity ("you") and {siteConfig.name} ("we," "us," or "our"), concerning
				your access to and use of our website and services.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="font-display text-2xl font-bold text-white">2. Intellectual Property Rights</h2>
			<p>
				Unless otherwise indicated, the Site and Services are our proprietary property and all
				source code, databases, functionality, software, website designs, audio, video, text,
				photographs, and graphics on the Site (collectively, the "Content") and the trademarks,
				service marks, and logos contained therein (the "Marks") are owned or controlled by us or
				licensed to us, and are protected by copyright and trademark laws.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="font-display text-2xl font-bold text-white">3. User Representations</h2>
			<p>By using the Site, you represent and warrant that:</p>
			<ul class="list-disc space-y-2 pl-5 text-zinc-400">
				<li>
					All registration information you submit will be true, accurate, current, and complete.
				</li>
				<li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
				<li>You will not use the Site for any illegal or unauthorized purpose.</li>
				<li>Your use of the Site will not violate any applicable law or regulation.</li>
			</ul>
		</section>

		<section class="space-y-4">
			<h2 class="font-display text-2xl font-bold text-white">4. Limitation of Liability</h2>
			<p>
				In no event will we or our directors, employees, or agents be liable to you or any third
				party for any direct, indirect, consequential, exemplary, incidental, special, or punitive
				damages, including lost profit, lost revenue, loss of data, or other damages arising from
				your use of the site, even if we have been advised of the possibility of such damages.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="font-display text-2xl font-bold text-white">5. Governing Law</h2>
			<p>
				These Terms shall be governed by and defined following the laws of Indonesia. Codevo
				Solutions and yourself irrevocably consent that the courts of Indonesia shall have exclusive
				jurisdiction to resolve any dispute which may arise in connection with these terms.
			</p>
		</section>

		<section class="space-y-4">
			<h2 class="font-display text-2xl font-bold text-white">6. Contact Us</h2>
			<p>If you have any questions about these Terms of Service, please contact us at:</p>
			<p class="font-mono text-quark-beam">hello@codevosolutions.com</p>
		</section>
	</div>
</div>
